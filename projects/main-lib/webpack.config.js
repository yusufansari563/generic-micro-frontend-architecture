const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./main.ts",
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
      main: path.resolve(__dirname, "../main/main.ts"),
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../../dist/main-lib"),
  },
  target: "web",
  devServer: {
    static: "./../../public",
    compress: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./../../public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "MainApp",
      remotes: {
        mfe1: "mfe1@http://localhost:3002/remoteEntry.js",
        mfe2: "mfe2@http://localhost:3003/remoteEntry.js",
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
