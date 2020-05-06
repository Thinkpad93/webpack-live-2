const path = require('path');
const webpack = require('webpack');
// html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 压缩CSS插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// vue-loader 插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

const isDev = process.env.NODE_ENV === 'development' ? true : false;

const isBeta = isDev ? 'beta' : 'www';

const _g = require('./config');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
};

module.exports = {
  // 入口文件
  entry: {
    index: PATHS.src + `/${_g.targets}/${_g.dirName}/js/index.js`,
  },
  // 出口文件
  output: {
    filename: isDev ? 'js/[name].[hash].js' : 'js/[name].[chunkhash].js',
    path: PATHS.dist + `/${_g.targets}/${_g.dirName}/`,
    publicPath: '',
  },
  resolve: {
    extensions: ['.js', '.scss', '.css', '.json'],
  },
  // 配置模块如何解析
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': PATHS.src,
      assets: path.resolve(__dirname, '../src/assets'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.js$/,
        // 排除node_modules 目录下的文件
        exclude: /node_modules/,
        // 只转化src目录下的js
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              // 因为新版本的babel更新原配置修改如下
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
                  publicPath: '',
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
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require('../dist/dll/manifest.json')
    }),
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: '',
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
      minify: false,
      hash: false,
      chunks: ['commons','index'],
    }),
    //动态插入CDN资源
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'logger',
          entry: `http://${isBeta}.whddd666.com/bibi/common/js/log.js`,
          global: 'logger',
        },
        {
          module: 'vConsole',
          entry: 'https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js',
          global: 'vConsole',
        },
      ],
    }),
  ],
  // 抽取第三方模块
  optimization: {
    splitChunks: {
      minChunks: 1,
      name: true,
      minSize: 30000,
      cacheGroups: {
        // vendor: {
        //   name: 'vendor',
        //   test: /[\\/]node_modules[\\/]/,
        //   chunks: 'initial',
        //   priority: 10, // 优先级
        // },
        commons: {
          name: 'commons',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          //chunks: 'initial',
          //priority: 10, // 优先级
        },
      },
    },
  },
};
