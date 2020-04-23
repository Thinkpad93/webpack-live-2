import Vue from "vue";
import index from "../index";
//引入rem支持
import "@/utils/flexible";
//引入公共样式
import "@/styles/site.scss";
//测试或正式环境判断
import { envChenk } from "@/utils";
// 只有是开发环境和
if (envChenk() === "beta") {
  new VConsole();
}
// 引入阿里云日志
//import "@/utils/log";

//实例化操作
new Vue({
  render: h => h(index)
}).$mount("#root");
