import index from '../index';

// 引入rem支持
import '@/utils/flexible';
// 引入公共样式
import '@/styles/site.scss';

new VConsole();

// 实例化操作
new Vue({
  render: (h) => h(index),
}).$mount('#root');
