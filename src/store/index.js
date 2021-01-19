import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 专门存放组件间的共享数据
    uname: sessionStorage.getItem("uname"),
    uid: sessionStorage.getItem("uid"),
    phone: sessionStorage.getItem("phone"),
    total: 0,
    count: 0,
    num: 0,
    products: [
      { id: 1, productName: "商品1", salePrice: 2389.99 },
      { id: 3, productName: "商品2", salePrice: 6999.99 },
    ],
  },
  // getters
  getters: {
    productNum(state) {
      return state.products.length;
    },
    changeTotal(state, productNum) {
      return state.productNum;
    },
  },
  // 专门存放更新state中的值的方法
  // 严格要求,参数2的格式必须是{phone:xxx,uid:xxx,uname:xxx}
  mutations: {
    increment(state, count) {
      state.count++;
      sessionStorage.setItem("count", state.count);
    },

    updateUser(state, user) {
      state.phone = user.phone;
      state.uid = user.uid;
      state.uname = user.uname;

      sessionStorage.setItem("uname", user.uname);
      sessionStorage.setItem("uid", user.uid);
      sessionStorage.setItem("phone", user.phone);
    },
    logout(state) {
      state.phone = "";
      state.uid = "";
      state.uname = "";

      // session只能存放字符串类型的值;null会转化成'null';
      sessionStorage.setItem("uname", "");
      sessionStorage.setItem("uid", "");
      sessionStorage.setItem("phone", "");
    },
  },
  actions: {},
  modules: {},
});
