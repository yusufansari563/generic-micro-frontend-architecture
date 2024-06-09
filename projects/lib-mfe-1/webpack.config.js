const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "postcss.config.js"),
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      shared: path.resolve(__dirname, "../../projects/shared/public-api.ts"),
      "shared-styles": path.resolve(
        __dirname,
        "../../projects/shared/assets/index.ts"
      ),
      mfe1: path.resolve(__dirname, "../mfe-1/main.ts"),
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "web",
  devServer: {
    static: "./../../public",
    compress: true,
    port: 3001,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./../../public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "mfe1",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.tsx",
        "./Test": "./main.ts",
      },
      shared: {
        react: {
          requiredVersion: "18.3.1",
          singleton: true,
          eager: true,
        },
        "react-dom": {
          requiredVersion: "18.3.1",
          singleton: true,
          eager: true,
        },
      },
    }),
  ],
};