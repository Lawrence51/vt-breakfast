import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/axios";
import store from "./store";
import { Lazyload } from "vant";

// options 为可选参数，无则不传
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: require('./assets/default-pic.png'),
  loading: require('./assets/default-pic.png'),
  attempt: 3
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
