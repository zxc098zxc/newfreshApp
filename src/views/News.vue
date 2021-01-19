<template>
  <div>
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2>
          <a href>首页</a>&gt;
          <a href>公司动态</a>
        </h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container" v-if="data">
      <div class="news">
        <ul>
          <li v-for="(item,index) in data.data" :key="index">
            <!-- 过滤器 filter 专门修改{{}}中的值 -->
            <span>{{item.pubTime | date}}</span>
            <router-link :to="`/news_details/${item.nid}`">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
      <!-- 分页导航-->
      <div class="pages">
        <a @click="getData(data.pageNum -1)" v-if="data.pageNum>1">上一页</a>
        <a v-else class="default">上一页</a>
        <a
          @click="getData(item)"
          :class="{cur:item==data.pageNum}"
          v-for="(item,index) in data.pageCount"
          :key="index"
        >{{item}}</a>
        <!-- <a href="">2</a> -->
        <!--<a href="">3</a>-->
        <!--<a href="">4</a>-->
        <!--<a href="">5</a>-->
        <a @click="getData(data.pageNum+1)" v-if="data.pageNum<data.pageCount">下一页</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 用于存放在html中的变量都存放在这里
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    // 周期中不应该写具体代码,调用函数
    this.getData(1);
  },
  methods: {
    getData(pno) {
      // if the current page as same as request page ,not request to save 流量
      if (this.data && pno == this.data.pageNum) return;
      let url =
        "http://101.96.128.94:9999/mfresh/data/news_select.php?pageNum=" + pno;
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data;
      });
    },
  },
  filters: {
    date(value) {
      let date = new Date(value * 1);
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    },
  },
};
</script>

<style>
.pages > a {
  user-select: none;
}
</style>