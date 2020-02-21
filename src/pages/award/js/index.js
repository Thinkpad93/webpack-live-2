import Vue from "vue";
import index from "../index";

//引入rem支持
import "@/assets/js/flexible";
import { checkVersion } from "@/assets/js/appNativeFun";

let obj = checkVersion();
console.log(obj);

//实例化操作
new Vue({
  render: h => h(index)
}).$mount("#root");
