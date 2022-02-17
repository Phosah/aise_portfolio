console.log("Mounted");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import store from "./store/index";

createApp(App).use(router).use(store).mount("#app");

console.log("Mounted");
