import Vue from "vue";
import index from "../index";
//引入rem支持
import "@/assets/js/flexible";
//引入公共样式
import "@/assets/css/site.scss";

if (process.env.NODE_ENV === "development") {
  new VConsole();
}


//实例化操作
new Vue({
  render: h => h(index)
}).$mount("#root");
