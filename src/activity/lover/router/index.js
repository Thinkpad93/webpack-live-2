import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/list',
    },
    {
      path: '/list',
      component: () => import(/* webpackChunkName: "list" */ '../views/list'),
      meta: {
        title: '列表页',
      },
    },
    {
      path: '/article',
      component: () =>
        import(/* webpackChunkName: "article" */ '../views/article'),
      meta: {
        title: '文章页',
      },
    },
  ],
});

export default router;
