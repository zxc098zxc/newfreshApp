<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./views/Index";
export default {
  // 注册子组件
  components: { Header, Footer, Index },
};
</script>

<style>
@import "./assets/css/common.css";
@import "./assets/css/mycss.css";
</style>