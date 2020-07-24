import index from '../index';
// 引入公共样式
import '@/styles/site.scss';

// 实例化操作
new Vue({
  render: (h) => h(index),
}).$mount('#root');
