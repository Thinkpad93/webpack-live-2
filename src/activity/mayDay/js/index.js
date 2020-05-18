import Vue from 'vue';
import index from '../index';
// 引入rem支持
import '@/utils/flexible';
// 引入公共样式
import '@/styles/site.scss';
// 测试或正式环境判断
import { getQueryString } from '@/utils';
import { initNav } from '@/utils/appNativeFun';

// 获取url的参数
let search = getQueryString();

// 开发环境
if (location.href.indexOf('beta') > -1) {
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

// 是否可分享
if (search.initNav && search.initNav != 'undefined') {
  // 分享信息
  let shareInfo = {
    type: 2,
    data: {
      msg: 'wewawa',
      link: location.href,
      title: '五一有假，浪漫无假', // 分享标题
      showUrl: location.href,
      imgUrl: '',
      desc: '爱情需要诺言更需要陪伴，陪伴是最长情的告白', // 分享描述
    },
  };
  // 生成分享
  initNav(shareInfo);
}

//实例化操作
new Vue({
  render: (h) => h(index),
}).$mount('#root');
