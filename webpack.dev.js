const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  stats: { children: false },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 1993,
    historyApiFallback: true,
    proxy: {
      "/api": {
        arget: "http://beta.guangzhouyueda.com",
        changeOrigin : true,
        secure: false,
        pathRewrite: {"^/api" : ""}
      }
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    // 热替换，热替换不是刷新
    new webpack.HotModuleReplacementPlugin()
  ]
});
