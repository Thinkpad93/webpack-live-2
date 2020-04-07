const path = require("path");
// 引入webpack
const webpack = require("webpack");

module.exports = {
  mode: "production",
  devtool: "none",
  // 要打包的第三方模块
  entry: {
    // 将模块作为入口编译成动态链接库
    main: ["vue", "vue-router", "axios"]
  },
  output: {
    // 指定文件名
    filename: "[name].dll.js",
    library: "[name]_[hash]",
    // 指定生成文件所在目录
    path: path.resolve("dist/dll")
  },
  plugins: [
    // 动态链接库
    new webpack.DllPlugin({
      name: "[name]_[hash]",
      path: path.join(__dirname, "dist/dll/", "manifest.json")
    })
  ]
};
