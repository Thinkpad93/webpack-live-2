- dist 编译后项目文件
- public 静态资源文件
- src 源文件
  - activity 活动页
  - api 后端 api 接口
  - assets
  - components
  - config
  - eventBus
  - filters
  - mixins
  - modules modules 页
  - styles 通用 css 样式
  - utils
- .eslintignore
- .eslintrc.js
- .gitignore
- babel.config.js
- postcss.config.js
- package.json 依赖包及配置信息文件
- README.md 描述文件

---

##### 做事四象限法(事情分轻重缓急)

1.紧急很重要的 2.重要但不紧急的 3.紧急但不重要的 4.不重要也不紧急的

---

##### 如何培养领导力

第一阶段：熟悉自己的业务，知道问题在哪里，怎样可以解决。
领导者是给大家指方向的，你必须先知道要走哪个方向，才能带领别人，这是领导力的基础。

第二阶段：培养说服能力，能说服他人，问题可以按照你说的方式解决。
领导力的表现是，他人愿意服从你。这不能都靠制度压服，而要让他人真心觉得你是对的。如果你可以让他人相信你，你就可以领导。

第三阶段：激发他人的热情，让他们产生解决问题的热情。
说服他人的更高境界，是让他们真正投身进来，自觉发挥自己的潜力，全力以赴解决需要解决的问题。好的领导和差的领导，区别就在于能否激励下级，让每个人都知道自己的职责，努力工作。

第四阶段：你培养其他人的领导能力。
如果你离开，团队也能正常运作下去，说明一切已经制度化了，你的领导已经成功了。这时，你可以让其他人接管团队，自己去实现下一个目标。

##### git 提交规范

feature: 开发新的功能
fix: 修复 bug
refactor: 代码重构
docs: 文档修改
style: 代码格式修改, 注意不是 css 修改
test: 测试用例修改
perf: 改善性能
build: 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）
revert: 代码回退

比如：
git commit -m "fix：修复某某 bug"

---

##### H5 页面打开时间久问题

CDN 资源文件问题
如访问 https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.min.js 资源
实际上是转发到了去访问 https://cdnjs.com/ 的资源文件，所以会导致打开页面等待时间很长的问题（页面空白）
这个时候建议更换 CDN 库即可

##### iosApp 强更和软更区别

强更时用户必须点击更新，不能关闭弹出层
软更进用户可查看完自行关闭

##### ios 中输入框不自动收回，有白块

这是因为 ios 键盘弹出后，会把页面整体顶上去，因此我们需要使用 scrollTo 函数，在 blur 键盘落下时滚动页面，使页面归位。

```javascript

blur() {
  window.scrollTo(0, 0);
}

```

1.如果是纯页面内容展示的，直接手写 html 文件即可(简单粗暴)，不用走.vue 单文件显示

##### 马甲包问题

-

##### 四大错误类型

TypeError 类型错误
ReferenceError 变量不存在
RangeError 数值溢出  
SyntaxError 语法错误
