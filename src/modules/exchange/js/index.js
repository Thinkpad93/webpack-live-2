import Vue from "vue";
import index from "../index";
//引入rem支持
import "@/assets/js/flexible";
//引入公共样式
import "@/assets/css/site.scss";
//测试或正式环境判断
import { envChenk } from "@/assets/js/utils";

// 只有是开发环境和
if (process.env.NODE_ENV === "development" && envChenk() === "beta") {
  new VConsole();
}

//实例化操作
new Vue({
  render: h => h(index)
}).$mount("#root");
