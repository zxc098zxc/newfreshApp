import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// VueResource能做ajax做的事情,但是API比其更简单
// import VueResource from "vue-resource";
// Vue.use(VueResource);
//
import axios from "axios";

import VueAxios from "vue-axios";

axios.defaults.baseURL = "http://101.96.128.94:9999/mfresh/data/";

// 全局注册过滤器
import { date } from "./filters";
// 第1个名字  第2个函数
Vue.filter("date", date);

Vue.use(VueAxios, axios);   
// 注册swiper
import VueAwesomeSwiper from "vue-awesome-swiper";

// import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'

// import style (<= Swiper 5.x)
import "swiper/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default options with global component } */);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
//组件根据用法可以分为2类
// 1路由切换
// 2公共的
