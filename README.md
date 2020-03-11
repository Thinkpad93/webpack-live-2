> 命令行

```shell

rm -rf node_modules //删除指定目录
rm package-lock.json
npm cache clear --force //清除缓存
npm install


```

> 目录

- src

  - assets
  - pages

> 因为 sass-loader 依赖于 node-sass，所以还要安装 node-sass，但是建设使用 cnpm 安装，避免安装不成功出现各种问题

> 开发下这些文件是保存到内存中的，但是你最后打包生成的是需要直接生成到目标文件夹中的

### ios客户端交互

> 获取uid方法

```javascript
var info = {};
//js调用native方法
//异步执行的，成功后oc会去执行js里的一个全局(getMessage)函数，并把数据以键值对的方式带回到JS中
window.webkit.messageHandlers.getUid.postMessage(null); 
//getMessage
function getMessage(key, value) {
  info[key] = value;
}

```
- 在npm run dev开发环境编译的时候，dist目录的内容都在内存中了

```javascript

//创建div节点
const root = document.createElement("div");
//将div节点添加到body下
document.body.appendChild(root);
//vue在创建Vue实例时,通过调用render方法来渲染实例的DOM树,也就是这个组件渲染的是App的内容
//vue在调用render方法时,会传入一个createElement函数作为参数,也就是这里的h的实参是createElement函数,然后createElement会以App为参数进行调用

```