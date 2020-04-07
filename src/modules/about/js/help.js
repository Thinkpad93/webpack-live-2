import Vue from "vue";
import help from "../help";
//引入rem支持
import "@/assets/js/flexible";
//引入公共样式
import "@/assets/css/site.scss";

//实例化操作
new Vue({
  render: h => h(help)
}).$mount("#root");
