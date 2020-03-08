const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
// 打包之前清除文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "none",
  plugins: [
    new CleanWebpackPlugin({
      verbose: false, //开启在控制台输出信息
      dry: false
    })
  ]
});
