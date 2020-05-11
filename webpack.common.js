const path = require('path');
const webpack = require('webpack');
// html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 压缩CSS插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// vue-loader 插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

const $obj = require('./config');

const isDev = process.env.NODE_ENV === 'development' ? true : false;
const isBeta = isDev ? 'beta' : 'beta';

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
};

module.exports = {
  entry: {
    // 入口文件
    index: PATHS.src + `/${$obj.targets}/${$obj.dirName}/js/index.js`,
  },
  output: {
    // 打包出口文件
    filename: isDev ? 'js/[name].[hash].js' : 'js/[name].[chunkhash].js',
    path: PATHS.dist + `/${$obj.targets}/${$obj.dirName}/`,
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.js$/,
        //排除node_modules 目录下的文件
        exclude: /node_modules/,
        //只转化src目录下的js
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              //因为新版本的babel更新 原配置修改如下
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        ],
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          isDev
            ? 'style-loader'
            : {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: true,
                publicPath: '../',
                hmr: isDev,
              },
            },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              esModule: false,
              name: '[name].[hash:7].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              limit: 10000,
              name: '[name].[ext]',
              //outputPath: "media/"
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.scss', '.css', '.json'],
  },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: '真爱榜',
      template: __dirname + `/public/index.html`,
      filename: 'index.html',
      minify: false,
      hash: false,
      favicon: __dirname + "/public/favicon.ico",
      chunks: ['manifest', 'vendor', 'commons', 'index'],
    }),
    //动态插入CDN资源
    // new HtmlWebpackExternalsPlugin({
    //   externals: [
    //     {
    //       module: 'logger',
    //       entry: `http://${isBeta}.whddd666.com/bibi/common/js/log.js`,
    //       global: 'logger',
    //     },
    //   ],
    // }),
  ],
  //配置模块如何解析
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      assets: path.resolve(__dirname, 'src/assets'),
    },
  },
  // externals: {
  //   'vue': 'Vue',
  //   'axios': 'axios'
  // },
  //抽取第三方模块
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      minChunks: 1,
      name: true,
      minSize: 30000,
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: 10, // 优先级
        },
        //抽取公共模块
        // commons: {
        //   name: "commons",
        //   chunks: "all",
        //   minChunks: 1, //至少引用2次，才打包出commons文件
        //   //priority: 20, // 优先级
        // },
      },
    },
  },
};
