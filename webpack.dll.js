const path = require("path");
// 引入webpack
const webpack = require("webpack");

module.exports = {
  mode: "production",
  devtool: "none",
  // 要打包的第三方模块
  entry: {
    main: ["vue", "vue-router", "axios"]
  },
  output: {
    filename: "[name].dll.js",
    library: "[name]_[hash]",
    path: path.resolve("dist/dll")
  },
  plugins: [
    // 动态链接库
    new webpack.DllPlugin({
      name: "[name]_[hash]",
      path: path.join(__dirname, "", "manifest.json")
    })
  ]
};
