import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Trigle from "../views/Trigle.vue";
import Trustbreed from "../views/Trustbreed.vue";
import PowrFinance from "../views/PowrFinance.vue";
import Doorstep from "../views/Doorstep.vue";
import CollectAfrica from "../views/CollectAfrica.vue";
import Test from "../views/Test.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/trigle",
    name: "trigle",
    component: Trigle,
  },
  {
    path: "/powrfinance",
    name: "powrfinance",
    component: PowrFinance,
  },
  {
    path: "/trustbreed",
    name: "trustbreed",
    component: Trustbreed,
  },
  {
    path: "/doorstep",
    name: "doorstep",
    component: Doorstep,
  },
  {
    path: "/collectafrica",
    name: "collectafrica",
    component: CollectAfrica,
  },
  {
    path: "/test",
    name: "test",
    component: Test,
  },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  //     scrollBehavior (to, from, savedPosition) {
  //     if (savedPosition) {
  //       return savedPosition;
  //     } else if (to.hash) {
  //       return {
  //         selector: to.hash
  //       };
  //     } else {
  //       return { x: 0, y: 0 };
  //     }
  //   }
});

export default router;
