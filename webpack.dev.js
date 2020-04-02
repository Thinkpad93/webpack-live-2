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
    compress: true, //启用gzip 压缩
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:8033",
    //     pathRewrite: { "^/api": "" }
    //   }
    // }
    proxy: {
      "/api": {
        target: "http://beta.whddd666.com",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/api": "" }
      }
    },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    // 热替换，热替换不是刷新
    new webpack.HotModuleReplacementPlugin()
  ]
});
