<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-warp">
            <li class="menu-item">
              <a href="javascript:;">
                手机 电话卡
                <div class="chlidren"></div>
              </a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">
                电视 盒子
                <div class="chlidren"></div>
              </a>
            </li>
              <li class="menu-item">
              <a href="javascript:;">
                笔记本 平板
                <div class="chlidren"></div>
              </a>
            </li>
              <li class="menu-item">
              <a href="javascript:;">
                家电 插线板
                <div class="chlidren"></div>
              </a>
            </li>
              <li class="menu-item">
              <a href="javascript:;">
                出行 穿戴
                <div class="chlidren"></div>
              </a>
            </li>
              <li class="menu-item">
              <a href="javascript:;">
                智能 路由器
                <div class="chlidren"></div>
              </a>
            </li>
              <li class="menu-item">
              <a href="javascript:;">
                电源 配件
                <div class="chlidren"></div>
              </a>
            </li>
              <li class="menu-item">
              <a href="javascript:;">
               生活 箱包
                <div class="chlidren"></div>
              </a>
            </li>
          </ul>
        </div>
        <swiper v-bind:options="swiperOptions">
          <swiper-slide v-for="(item, index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/product/' + item.id"
              ><img v-bind:src="item.img"
            /></a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <!-- 如果需要滚动条 -->
          <div class="swiper-scrollbar"></div>
        </swiper>
      </div>
      <div class="ads-box"></div>
    </div>
    <ServiceBar></ServiceBar>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import ServiceBar from "./../components/ServiceBar";
import "swiper/css/swiper.css";
export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
  },
  data() {
    return {
      swiperOptions: {
        autoplay: true,
        //是否可循环
        loop: true,
        //  设置切换效果
        effect: "cube",
        cubeEffect: {
          // 开启slide阴影。默认 true。
          slideShadows: true,
          // 开启投影。默认 true
          shadow: true,
          // 投影距离，默认20
          shadowOffset: 100,
          //
          shadowScale: 0.6,
        },
        pagination: {
          el: ".swiper-pagination",
          // 设置分页器能点击切换
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "43",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "44",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-1.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.index {
  .swiper-box {
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
