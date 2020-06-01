import Vue from 'vue';
import App from '../App';
import router from '../router';

// 引入rem支持
import '@/utils/flexible';
// 引入公共样式
import '@/styles/site.scss';

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#root');
