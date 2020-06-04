const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  stats: { children: false },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: 'localhost', // 默认是localhost
    hot: true, // 开启热更新
    port: 1993, // 端口
    historyApiFallback: true,
    compress: true, // 启用gzip 压缩
    proxy: {
      '/api': {
        target: 'http://betatest.whddd666.com', // http://beta.whddd666.com
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    // 热替换，热替换不是刷新
    new webpack.HotModuleReplacementPlugin(),
  ],
});
