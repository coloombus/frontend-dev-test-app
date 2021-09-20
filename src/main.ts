import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require("./mocks/browser");
  worker.start();
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
