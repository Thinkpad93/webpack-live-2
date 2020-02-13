const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    // 多入口文件
    app: __dirname + "/src/pages/oauth/js/index.js",
    another: __dirname + "/src/pages/oauth/js/another-module.js"
  },
  output: {
    // 打包多出口文件
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist/oauth/"),
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
              presets: ["@babel/preset-env"]
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
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
    new CleanWebpackPlugin({
      verbose: false, //开启在控制台输出信息
      dry: false
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:8].css",
      chunkFilename: "css/[id].[hash:8].css"
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/pages/oauth/index.html",
      minify: false,
      hash: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    splitChunks: {
      name: "common", // 指定公共 bundle 的名称。
      chunks: "initial",
      minChunks: 2
    }
  }
};
