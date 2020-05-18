import index from '../index';
import { List } from 'vant';

// 引入rem支持
import '@/utils/flexible';
// 引入公共样式
import '@/styles/site.scss';
// 测试或正式环境判断
import { getQueryString } from '@/utils';

let search = getQueryString();

// 开发环境
if (location.href.indexOf('beta') > -1) {
  console.log('开发环境');
  try {
    new VConsole();
  } catch (e) {
    console.log(e);
  }
} else if (Object.keys(search).length) {
  if (search.debug) {
    new VConsole();
  }
}

Vue.use(List);

// 实例化操作
new Vue({
  render: (h) => h(index),
}).$mount('#root');
