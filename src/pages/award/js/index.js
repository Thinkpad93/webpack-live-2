import Vue from "vue";
import index from "../index";

//normalize.css
import "normalize.css";
//引入rem支持
import "@/assets/js/flexible";
//引入调试工具
import VConsole from "vconsole";

const info = {};
function getMessage(key, value) {
  info[key] = value;
}

//实例化vconsole
const vConsole = new VConsole();

//实例化操作
new Vue({
  render: h => h(index)
}).$mount("#root");
