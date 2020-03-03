import Vue from "vue";
import index from "../index";

//normalize.css
import "normalize.css";
//引入rem支持
import "@/assets/js/flexible";
//引入调试工具
import vConsole from "vconsole";

import { getUid, getTicket } from "@/assets/js/appNativeFun";

window.info = {};
window.getMessage = function(key, value) {
  console.log(`${key}=${value}`);
  info[key] = value;
}
getUid();
getTicket();

//实例化vconsole
new vConsole();

//实例化操作
const vm = new Vue({
  render: h => h(index)
}).$mount("#root");
