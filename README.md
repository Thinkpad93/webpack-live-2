> 命令行

```shell

rm -rf node_modules //删除指定目录
rm package-lock.json
npm cache clear --force //清除缓存

```

因为 sass-loader 依赖于 node-sass，所以还要安装 node-sass，但是建设使用 cnpm 安装，避免安装不成功出现各种问题
开发下这些文件是保存到内存中的，但是你最后打包生成的是需要直接生成到目标文件夹中的
在npm run dev开发环境编译的时候，dist目录的内容都在内存中了

```javascript

//创建div节点
const root = document.createElement("div");
//将div节点添加到body下
document.body.appendChild(root);
//vue在创建Vue实例时,通过调用render方法来渲染实例的DOM树,也就是这个组件渲染的是App的内容
//vue在调用render方法时,会传入一个createElement函数作为参数,也就是这里的h的实参是createElement函数,然后createElement会以App为参数进行调用

```

- @babel/cli: 为babel的脚手架工具
- @babel/core: babel-core是作为babel的核心存在，babel的核心api都在这个模块里面，比如：transform，用于字符串转码得到AST
- babel-loader: 就是用于编译JavaScript代码
- @babel/preset-env : 官方解释“用于编写下一代JavaScript的编译器”，编译成浏览器认识的JavaScript标准
- .babelrc 文件为babel的配置文件(我这边是直接在webpack.config.js的babel-loader的options下配置的，.babelrc文件中注意需要转换为json格式，需要将属性名加双引号)
- webpack-merge: 用于合并webpack的公共配置和环境配置(合并webpack.config.js和webpack.development.js或者webpack.production.js)
- clean-webpack-plugin: 用于清除本地文件，在进行生产环境打包的时候，如果不清除dist文件夹，那么每次打包都会生成不同的js文件或者css文件堆积在文件夹中，因为每次打包都会生成不同的hash值导致每次打包生成的文件名与上次打包不一样不会覆盖上次打包留下来的文件
- html-webpack-plugin: 自动生成html,并默认将打包生成的js、css引入到html文件中
- mini-css-extract-plugin: webpack打包样式文件中的默认会把样式文件代码打包到bundle.js中，mini-css-extract-plugin这个插件可以将样式文件从bundle.js抽离出来一个文件，并且支持chunk css
- add-asset-html-webpack-plugin: 从命名可以看出，它的作用是可以将静态资源css或者js引入到html-webpack-plugin生成的html文件中
- optimize-css-assets-webpack-plugin: css压缩，主要使用 cssnano 压缩器(webpack4的执行环境内置了cssnano，所以不用安装)
- splitChunks: CommonChunkPlugin 的后世，用于对bundle.js进行chunk切割(webpack的内置插件)
- DllPlugin: 将模块预先编译，它会在第一次编译的时候将配置好的需要预先编译的模块编译在缓存中，第二次编译的时候，解析到这些模块就直接使用缓存，而不是去编译这些模块(webpack的内置插件)
- DllReferencePlugin: 将预先编译好的模块关联到当前编译中，当 webpack 解析到这些模块时，会直接使用预先编译好的模块(webpack的内置插件)
- HotModuleReplacementPlugin: 实现局部热加载(刷新)，区别与在webpack-dev-server的全局刷新(webpack的内置插件)


#### IOS安装不了问题汇总

- 证书过期，导致app安装不了
