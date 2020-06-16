<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
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
        pagination: {
          autoplay:true,
          loop:true,
          el: ".swiper-pagination",
        },
         navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
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
