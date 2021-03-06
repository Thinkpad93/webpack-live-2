const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
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
