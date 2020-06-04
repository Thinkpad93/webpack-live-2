import index from '../index';

// 引入rem支持
import '@/utils/flexible';
// 引入公共样式
import '@/styles/site.scss';

var obj = { wd: 1, srv_spt: 1, rsv_iqid: '0xefbc' };

//实例化操作
new Vue({
  render: (h) => h(index),
}).$mount('#root');
