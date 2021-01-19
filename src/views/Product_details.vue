<template>
  <div class>
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2>
          <a href>首页</a>&gt;
          <a href>产品中心</a>&gt;
          <a href>净美仕净化器</a>
        </h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container" v-if="data">
      <div class="pd_info clearfloat">
        <div class="pdinfo_img">
          <img :src="`http://101.96.128.94:9999/mfresh/${data.pic}`" alt />
        </div>
        <div class="pdinfo_text">
          <h2>{{data.title1}}</h2>
          <ul>
            <li>型号：{{data.model}}</li>
            <li>功能 : {{data.func}}</li>
            <li>噪音：{{data.noise}}</li>
            <li>风量：{{data.wind}}</li>
            <li>适用对象：{{data.applyTo}}</li>
            <li>适用面积：{{data.size}}</li>
            <li>空气净化能效等级：{{data.level}}</li>
          </ul>
          <p>
            价格：
            <span>¥</span>
            <strong id="price">{{data.price}}</strong>
          </p>
          <a @click="addToCart"  id="addCart">
            <span class="icon_cart"></span>加入购物车
          </a>
        </div>
      </div>
      <div class="details_box">
        <h2 class="title">产品详情</h2>
        <div class="pd_details">
          <p v-html="data.detail"></p>
          <!--<img src="product-imgs/m8088a/01.jpg" alt=""/>-->
          <!-- <img src="product-imgs/m8088a/02.jpg" alt=""/> -->
          <!--<img src="product-imgs/m8088a/03.jpg" alt=""/>-->
          <!--<img src="product-imgs/m8088a/04.jpg" alt=""/>-->
          <!--<img src="product-imgs/m8088a/05.jpg" alt=""/>-->
          <!--<img src="product-imgs/m8088a/06.jpg" alt=""/>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    addToCart() {
      // 判断登录状态--添加购物车;非登录状态--跳转到登录页面
      if (this.$store.state.uid) {
        // pid 在vuex里面拿
        let uid = this.$store.state.uid;
        // post路由传参里面拿
        let pid = this.$route.params.pid;
        // 添加商品到购物车
        let url = `cart_detail_add.php?uid=${uid}&pid=${pid}`;
        this.axios.get(url).then((res) => {
          console.log(res);
          if (res.data.code == 1) {
            alert("添加成功");
          } else {
            alert("添加失败");
          }
        });
      } else {
        // 编程式跳转:使用代码完成路由跳转
        this.$router.push("/login");
      }
    },
    getData() {
      let pid = this.$route.params.pid;
      let url = "product_detail.php?pid=" + pid;
      this.axios.get(url).then((res) => {
        res.data.detail = res.data.detail.replace(
          // 这是原始值
          /src="product-imgs/g,
          // 这是要替换的值
          'src="http://101.96.128.94:9999/mfresh/product-imgs'
        );
        console.log(res.data);
        this.data = res.data;
      });
    },
  },
};
</script>

<style>
</style>