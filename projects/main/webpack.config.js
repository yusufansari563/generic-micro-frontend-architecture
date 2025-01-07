const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "/projects/main/main.ts",
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
      "shared": path.resolve(__dirname, "../../projects/shared/public-api.ts"),
      "shared-styles": path.resolve(
        __dirname,
        "../../projects/shared/assets/index.ts"
      ),
      "mfe1": path.resolve(__dirname,"../mfe-1/main.ts"),
      "mfe2": path.resolve(__dirname,"../mfe-2/main.ts"),
    },
  },
  output: {
    filename: "[fullhash].bundle.js",
    path: path.resolve(__dirname, "../../dist/main"),
  },
  devtool: false,
  target: "web",
  devServer: {
    static: "./../../public",
    compress: true, // Enable gzip compression for everything served
    hot: true, // Enable hot module replacement
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./../../public/index.html",
    }),
  ],
};
