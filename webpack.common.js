const path = require("path");
const webpack = require("webpack");
// html插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 压缩CSS插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// vue-loader 插件
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const manifest = require("./manifest.json");

//活动页名称
const HtmlName = "exchange";
const HtmlTitle = "兑换";

module.exports = {
  entry: {
    // 入口文件
    index: `./src/modules/${HtmlName}/js/index.js`
    //help: `./src/modules/${HtmlName}/js/help.js`
  },
  output: {
    // 打包多出口文件
    filename: "js/[name].js",
    path: path.resolve(__dirname, `dist/modules/${HtmlName}/`),
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
        include: [path.resolve(__dirname, "src")],
        use: [
          {
            loader: "babel-loader",
            options: {
              //因为新版本的babel更新 原配置修改如下
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-transform-runtime"]
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
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
              limit: 10000,
              name: "[name].[ext]",
              //outputPath: "media/"
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
  plugins: [
    // 告诉 Webpack 使用动态链接库
    // 引用对应的动态链接库的manifest.json文件
    new webpack.DllReferencePlugin({
      context: path.join(__dirname),
      manifest
    }),
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: HtmlTitle,
      template: __dirname + `/src/index.html`,
      filename: "index.html",
      minify: false,
      hash: false,
      //favicon: "./ic-app.png",
      //只有写chunks才会把自己的js加载进来，不然会把所有js加载进来
      chunks: ["commons", "index"]
    }),
    // new HtmlWebpackPlugin({
    //   template: __dirname + `/src/index.html`,
    //   filename: "help.html",
    //   minify: false,
    //   hash: false,
    //   favicon: "./ic-app.png",
    //   chunks: ["commons", "help"]
    // }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ],
  //配置模块如何解析
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "assets": path.resolve(__dirname, "src/assets")
    }
  },
  //抽取第三方模块
  optimization: {
    splitChunks: {
      cacheGroups: {
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
