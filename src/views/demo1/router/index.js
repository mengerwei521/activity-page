import Vue from "vue";
import VueRouter from "vue-router";
const { projectValue } = require("_c/project");  //项目配置
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    redirect: "/home"
  },
  //首页
  {
    path: "/home",
    name: "home",
    component: () => import("../page/home.vue"),

  },
  {
    path: "/about",
    name: "about",
    component: () => import("../page/about.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: projectValue.route,
  routes,
});

export default router;
