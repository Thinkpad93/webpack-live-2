import Vue from "vue";
import index from "../index";

//引入rem支持
import "@/assets/js/flexible";
//引入调试工具
import vConsole from "vconsole";

//import { getUid, getTicket } from "@/assets/js/appNativeFun";

window.info = {};
window.getMessage = function(key, value) {
  console.log(`${key}=${value}`);
  info[key] = value;
};
// getUid();
// getTicket();

//实例化vconsole
if (process.env.NODE_ENV === "development") {
  new vConsole();
}

//实例化操作
new Vue({
  render: h => h(index)
}).$mount("#root");
