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

事情分轻重缓急，有一个做事四象限法： 1.紧急很重要的 2.重要但不紧急的 3.紧急但不重要的 4.不重要也不紧急的

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
