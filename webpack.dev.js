const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./src",
    openPage: "pages/oauth/index.html",
    https: true,
    hot: true,
    port: 1993,
    https: true,
    proxy: {
      "/api": "http://localhost:3000"
    }
  }
});
