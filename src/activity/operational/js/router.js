import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    component: () => import("../index"),
    meta: {
      title: "index"
    }
  },
  {
    path: "/bus",
    component: () => import("../bus"),
    meta: {
      title: "bus"
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
