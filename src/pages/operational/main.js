import Vue from "vue";
import App from "./App.vue";
import router from "./js/router";
//引入rem支持
import "@/assets/js/flexible";
//引入调试工具
import vConsole from "vconsole";

if (process.env.NODE_ENV === "development") {
  //实例化vconsole
  new vConsole();
}

new Vue({
  router,
  render: h => h(App)
}).$mount("#root");
