const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

//活动页名称
const HtmlName = "oauth";

module.exports = {
  entry: {
    // 多入口文件
    app: __dirname + `/src/pages/${HtmlName}/js/index.js`
    //another: __dirname + "/src/pages/oauth/js/another-module.js"
  },
  output: {
    // 打包多出口文件
    filename: "js/[name].[hash:8].bundle.js",
    path: path.resolve(__dirname, `dist/${HtmlName}/`),
    publicPath: "./"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              //因为新版本的babel更新 原配置修改如下
              presets: ["@babel/preset-env"]
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          devMode ? "style-loader" : 
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
              publicPath: "../",
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[name].[hash:7].[ext]",
              outputPath: "images/"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:8].css",
      chunkFilename: "css/[id].[hash:8].css"
    }),
    new HtmlWebpackPlugin({
      template: __dirname + `/src/pages/${HtmlName}/index.html`,
      minify: false,
      hash: true
    })
  ]
};
