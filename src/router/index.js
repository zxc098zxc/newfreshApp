import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Index from "../views/Index.vue";
import Contact from "../views/Contact.vue";
import News from "../views/News.vue";
import Register from "../views/Register.vue";
import Product from "../views/Product.vue";
import Login from "../views/Login.vue";
import Cart from "../views/Cart.vue";
import no from "../views/9527.vue";
import Product_details from "../views/Product_details.vue";
import NewsDetails from "../views/NewsDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/index",
    name: "Index",
    component: Index,
  },
  {
    path: "/news_details/:nid",
    name: "NewsDetails",
    component: NewsDetails,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/9527",
    name: "927",
    component: no,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/product/:type",
    name: "Product",
    component: Product,
  },
  {
    path: "/product_details/:pid",
    name: "Product_details",
    component: Product_details,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
