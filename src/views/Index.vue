<template>
  <div>
    <!-- index.html 12~~56 -->

    <!--banner-->
    <!-- 练习：编写banner的html和css-->
    <!-- 图片列表-->
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide>
        <img src="../assets/images/banner_01.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/banner_03.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/banner_02.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/banner_04.jpg" alt />
      </swiper-slide>
      <!-- 左右箭头-->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <!-- pagination:分页 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 左右箭头-->
    <!-- <span class="cut prev"></span> -->
    <!-- <span class="cut next"></span> -->
    <!-- 小圆点指示器-->
    <!-- <div class="indicator">
        <a href class="cur"></a>
        <a href></a>
        <a href></a>
        <a href></a>
    </div>-->
    <!--main-->
    <div class="main container">
      <div class="ind_con1">
        <h2 class="title">
          <a href="#" class="more">more</a>净美仕产品
        </h2>
        <ul class="clearfloat">
          <li>
            <a href="#" class="link">
              <img src="../assets/images/01.jpg" alt />
            </a>
          </li>
          <li>
            <a href="#" class="link">
              <img src="../assets/images/02.jpg" alt />
            </a>
          </li>
          <li>
            <a href="#" class="link">
              <img src="../assets/images/03.jpg" alt />
            </a>
          </li>
        </ul>
      </div>
      <div class="ind_con2 clearfloat">
        <div class="ind_about">
          <h2 class="title">
            <a href="#" class="more">more</a>关于净美仕
          </h2>
          <p>
            北京净美仕环境科技有限公司自诞生起一直关注人类呼吸健康的问题，并专注于室内空气质量的研究与改善。2003年，非典来袭，环境安全威胁到了每个人的生命，全国陷入一片恐慌。净美仕肩负着为人类创造健康安全生活环境的使命应运而生。2012年7月，亿朗以“净美仕(Mfresh)”为品牌重塑，以崭新的面貌屹立在净化行业。
            <a
              href="#"
            >查看更多</a>
          </p>
        </div>
        <div class="ind_news">
          <h2 class="title">
            <a href="#" class="more">more</a>公司动态
          </h2>
          <ul>
            <li>
              <span>2016-02-21</span>
              <a href>空气净化器要逆天？ “玫瑰金”“土豪金”齐上阵</a>
            </li>
            <li>
              <span>2016-02-21</span>
              <a href>净美仕新风净化系统 助力校园新风行动</a>
            </li>
            <li>
              <span>2016-02-21</span>
              <a href>全国新风行动全面启动 助推净美仕战略升级</a>
            </li>
            <li>
              <span>2016-02-21</span>
              <a href>智能空气净化器翻盘：净美仕能否领衔?</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 如果在加载的时候,使用了动态请求图片的.require静态分析的时候,webpack看到require关键词,就知道后方的文件必须引入
      // require('../assets/images/banner_01.jpg')
      swiperOption: {
        loop: true,
        // 自动滚动
        autoplay: {
          delay: 2500,
          // 用户触摸后,自动滚动失效
          disableOnInteraction: false, 
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // 页
        pegination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
};
</script>

<style>
</style>