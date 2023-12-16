import Vue from "vue";
import { store } from "./store.js";
import App from "./App.vue";
import vuetify from "@/assets/vuetify.js";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
