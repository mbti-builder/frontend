const { merge } = require("webpack-merge");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const baseConfig = require("./webpack.base.js");
const PROJECT_ROOT = path.resolve(__dirname, "../..");
const TEMPLATE_PATH = path.resolve(PROJECT_ROOT, "public");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.tsx",
  devServer: {
    hot: true,
    inline: true,
    port: "5050",
    host: '127.0.0.1',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(ts|js)x?$/,
        include: path.resolve("src"),
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(TEMPLATE_PATH, "index.html"),
      minify: {
        removeComments: true,
      },
    }),
  ],
});
