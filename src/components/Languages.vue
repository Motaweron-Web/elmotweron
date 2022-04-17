<template>
  <!-- slider -->
  <div class="languages">
    <div class="container">
      <swiper
        :speed="1000"
        :slidesPerView="'auto'"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
        :navigation="true"
        :modules="modules"
        class="languagesSlider"
      >
        <swiper-slide v-for="img in sliderImgs" :key="img">
          <img :src="img" alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>


<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade, Autoplay, Pagination, Navigation],
    };
  },
  data() {
    return {
      sliderImgs: [
        require(`@/assets/img/languages/1.png`),
        require(`@/assets/img/languages/2.png`),
        require(`@/assets/img/languages/3.png`),
        require(`@/assets/img/languages/4.png`),
        require(`@/assets/img/languages/5.png`),
        require(`@/assets/img/languages/6.png`),
        require(`@/assets/img/languages/7.png`),
        require(`@/assets/img/languages/8.png`),
        require(`@/assets/img/languages/9.png`),
        require(`@/assets/img/languages/10.png`),
        require(`@/assets/img/languages/11.png`),
        require(`@/assets/img/languages/12.png`),
        require(`@/assets/img/languages/13.png`),
        require(`@/assets/img/languages/14.png`),
        require(`@/assets/img/languages/15.png`),
        require(`@/assets/img/languages/16.png`),
        require(`@/assets/img/languages/17.png`),
        require(`@/assets/img/languages/18.png`),
        require(`@/assets/img/languages/19.png`),
        require(`@/assets/img/languages/20.png`),
        require(`@/assets/img/languages/21.png`),
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
.languages {
  margin-top: -100px;
  .container {
    // background: linear-gradient(45deg, #ffffff90, #ffffff),
    //   url(@/assets/img/counter-bg.png);

    background: #ffffffb1;
    padding: 40px 20px;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 3px solid #fff;
    // box-shadow: 0px 4px 12px #00000020;
  }
  .languagesSlider {
    .swiper-slide {
      width: auto !important;
      img {
        width: 100%;
        height: 120px;
        object-fit: contain;
        padding: 15px;
        margin: 20px 40px;
      }
    }
  }
}
</style>