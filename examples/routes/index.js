import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "./../layout";

import ErrorRoute from "./../views/error.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: Layout,
      meta: {
        title: "Home",
      },
    },
    {
      path: "*",
      component: ErrorRoute,
      meta: {
        title: "Error",
      },
    },
  ],
});
router.beforeEach((to, from, next) => {
  to.meta.title += " | GitHub API";
  next();
});

export default router;
