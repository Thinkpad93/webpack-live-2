// import "../css/index.scss";

// import axios from "axios";
// console.log("bus");

import Vue from "vue";
import bus from "../bus.vue";
//创建div节点
//const root = document.createElement("div");
//将div节点添加到body下
//document.body.appendChild(root);
//vue在创建Vue实例时,通过调用render方法来渲染实例的DOM树,也就是这个组件渲染的是App的内容
//vue在调用render方法时,会传入一个createElement函数作为参数,也就是这里的h的实参是createElement函数,然后createElement会以App为参数进行调用
new Vue({
  render: h => h(bus)
}).$mount("#root");
