
import Vue from "vue";
import bus from "../bus.vue";
//引入rem支持
import "../../../assets/js/flexible";

//实例化操作
new Vue({
  render: h => h(bus)
}).$mount("#root");
