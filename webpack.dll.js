const path = require("path");
// 引入webpack
const webpack = require("webpack");

module.exports = {
  entry: ["axios", "vue", "vue-router", "vconsole"],
  output: {
    filename: "[name].dll.js",
    library: "[name]_[hash]",
    path: path.resolve("dist/dll")
  },
  plugins: [
    // 动态链接库
    new webpack.DllPlugin({
      name: "[name]_[hash]",
      path: path.resolve("dist/dll", "manifest.json")
    })
  ]
};
