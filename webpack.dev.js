const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  stats: { children: false },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    https: true,
    hot: true,
    port: 1993,
    https: true,
    overlay: true,
    proxy: {
      "/api": "http://localhost:3000"
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    // 热替换，热替换不是刷新
    new webpack.HotModuleReplacementPlugin()
  ]
});
