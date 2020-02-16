const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//活动页名称
const HtmlName = "operational";

module.exports = {
  entry: {
    // 入口文件
    app: `./src/pages/${HtmlName}/js/index.js`
  },
  output: {
    // 打包多出口文件
    filename: "js/[name].[hash:8].bundle.js",
    path: path.resolve(__dirname, `dist/${HtmlName}/`),
    publicPath: ""
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
        test: /\.(css|scss|sass)$/,
        use: [
          process.env.NODE_ENV === "production"
            ? {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  esModule: true,
                  publicPath: "../",
                  hmr: process.env.NODE_ENV === "development"
                }
              }
            : "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader"
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
    new HtmlWebpackPlugin({
      template: __dirname + `/src/pages/${HtmlName}/index.html`,
      minify: false,
      hash: false
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:8].css",
      chunkFilename: "css/[id].[hash:8].css"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
};
