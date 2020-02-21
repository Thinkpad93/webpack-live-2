const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const devMode = process.env.NODE_ENV === "development";
//活动页名称
const HtmlName = "operational";

module.exports = {
  entry: {
    // 入口文件
    index: `./src/pages/${HtmlName}/js/index.js`,
    bus: `./src/pages/${HtmlName}/js/bus.js`
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
        test: /\.vue$/,
        use: ["vue-loader"]
      },
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
              name: "[name].[hash:7].[ext]"
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
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + `/src/index.html`,
      filename: "index.html",
      minify: false,
      hash: false,
      //只有写chunks才会把自己的js加载进来，不然会把所有js加载进来
      chunks: ["manifest", "vendor", "index"]
    }),
    new HtmlWebpackPlugin({
      template: __dirname + `/src/index.html`,
      filename: "bus.html",
      minify: false,
      hash: false,
      chunks: ["manifest", "vendor", "bus"]
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "css/[name].[hash:8].css",
      chunkFilename: devMode ? "[id].css" : "css/[id].[hash:8].css"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ],
  //配置模块如何解析
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
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
        }
      }
    }
  }
};
