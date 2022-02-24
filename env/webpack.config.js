const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const { stringifiedEnv } = require("./env");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/main.js",
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "自定义加载env文件",
    }),
    new DefinePlugin({
      "process.env": stringifiedEnv,
    }),
  ],
};
