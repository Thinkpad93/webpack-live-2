
import Vue from "vue";
import bus from "../bus";
//引入rem支持
import "@/assets/js/flexible";
//引入调试工具
import vConsole from "vconsole";

if (process.env.NODE_ENV === "development") {
  //实例化vconsole
  new vConsole();
}

//实例化操作
new Vue({
  render: h => h(bus)
}).$mount("#root");
