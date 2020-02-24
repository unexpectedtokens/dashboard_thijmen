import Vue from "vue";
import App from "./App.vue";
import Home from "./Routes/Home";
import About from "./Routes/About";
import VueRouter from "vue-router";
Vue.config.productionTip = false;

const routes = [
  { path: "/about", component: About },
  { path: "/", component: Home }
];

const router = new VueRouter({
  routes
});

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
