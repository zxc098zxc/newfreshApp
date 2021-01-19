<template>
  <div>
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2>
          <a>首页</a>&gt;
          <a>产品中心</a>
        </h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container">
      <div class="pl_header">
        <router-link to="/product/1" :class="{cur:$route.params.type==1}">净美仕净化器</router-link>
        <router-link to="/product/2" :class="{cur:$route.params.type==2}">净美仕滤网</router-link>
      </div>
      <!-- 产品列表-->
      <ul class="product_list clearfloat" v-if="data">
        <li v-for="(item,index) in data.data" :key="index">
          <router-link :to="`/product_details/${item.pid}`">
            <img :src="`http://101.96.128.94:9999/mfresh/${item.pic}`" alt />
          </router-link>
          <div class="pdlist_text clearfloat">
            <h3>
              <p>{{item.model}}</p>
              <span>{{item.title2}}</span>
            </h3>
            <router-link :to="`/product_details/${item.pid}`">查看详情</router-link>
          </div>
        </li>
      </ul>
      <!-- 分页导航-->
      <div class="pages" v-if="data">
        <a @click="getData(data.pageNum-1)" v-if="data.pageNum>1">上一页</a>
        <a v-else class="default">上一页</a>
        <a
          @click="getData(item)"
          :class="{cur:item==data.pageNum}"
          v-for="(item,index) in data.pageCount"
          :key="index"
        >{{item}}</a>
        <a @click="getData(data.pageNum+1)" v-if="data.pageNum<data.pageCount">下一页</a>
        <a v-else class="default">下一页</a>
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
  // 路由守卫
  beforeRouteUpdate(to, from, next) {
    // 路由走到此处,可以继续向下执行:更新路由的值为新值
    next();
  },
  mounted() {
    this.getData(1);
  },
  methods: {
    getData(pno) {
      let url = `product_select.php?type=${this.$route.params.type}&pageNum=${pno}`;
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data;
      });
    },
  },
};
</script>