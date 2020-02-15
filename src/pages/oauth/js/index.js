import "../css/index.css";

let a = 'hello world!!!';
document.body.innerHTML = a;
console.log('这是webpack打包的入口文件');


// 还需要在主要的js文件里写入下面这段代码
if (module.hot) {
  // 实现热更新
  module.hot.accept();
}
// import { cube } from "./math.js";
// import printMe from "./print.js";

// if (process.env.NODE_ENV !== "production") {
//   console.log("Looks like we are in development mode!");
//   console.log(location);
// }

//printMe();

//cube();

// if (module.hot) {
//   module.hot.accept("./print.js", function() {
//     console.log("Accepting the updated printMe module!");
//     console.log("Accepting the updated printMe module!");
//     printMe();
//   });
// }
