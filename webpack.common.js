const path = require("path");
const webpack = require("webpack");
// html插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 压缩CSS插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// vue-loader 插件
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const devMode = process.env.NODE_ENV === "development";
//活动页名称
const HtmlName = "operational";

module.exports = {
  entry: {
    // 入口文件
    index: `./src/pages/${HtmlName}/main.js`
    //bus: `./src/pages/${HtmlName}/js/bus.js`
  },
  output: {
    // 打包多出口文件
    filename: "js/[name].js",
    path: path.resolve(__dirname, `dist/${HtmlName}/`),
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.js$/,
        //排除node_modules 目录下的文件
        exclude: /node_modules/,
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
              name: "[name].[ext]",
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
  resolve: {
    extensions: [".js", ".scss", ".css", ".json"]
  },
  externals: {
    vue: "Vue",
    axios: "axios"
  },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + `/src/index.html`,
      filename: "index.html",
      minify: false,
      hash: false,
      favicon: "./ic-app.png",
      //只有写chunks才会把自己的js加载进来，不然会把所有js加载进来
      chunks: ["manifest", "vendor", "commons", "index"]
    }),
    // new HtmlWebpackPlugin({
    //   template: __dirname + `/src/index.html`,
    //   filename: "bus.html",
    //   minify: false,
    //   hash: false,
    //   favicon: "./ic-app.png",
    //   chunks: ["manifest", "vendor", "commons", "bus"]
    // }),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "css/[name].css"
    })
  ],
  //配置模块如何解析
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  //抽取第三方模块
  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial"
        },
        //抽取公共模块
        commons: {
          chunks: "initial",
          name: "commons",
          minSize: 0,
          minChunks: 2 //至少引用2次，才打包出commons文件
        }
      }
    }
  }
};
