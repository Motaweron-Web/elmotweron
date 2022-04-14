<template>
  <section class="main">
    <div class="row align-items-center">
      <div class="col-md-6 order-md-2">
        <!-- <div class="video">
        <video :src="BGVideo" autoplay loop muted></video>
      </div>
      <img :src="mainImg" class="mainImg" /> -->
        <div class="slider-shapes">
          <div class="shape-item shape-1">
            <div class="shape-inner">
              <img src="../assets/img/slide_1_shape.png" class="has-shadow-1" />
            </div>
          </div>
          <div class="shape-item shape-2">
            <div class="shape-inner">
              <img src="../assets/img/slide_2_shape.png" class="has-shadow-3" />
            </div>
          </div>
          <div class="shape-item shape-3">
            <div class="shape-inner">
              <img src="../assets/img/slide_3_shape.png" class="has-shadow-2" />
            </div>
          </div>
          <div class="shape-item shape-4">
            <div class="shape-inner">
              <img src="../assets/img/slide_4_shape.png" class="has-shadow-2" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 p-2 order-md-1 pt-5 pt-md-2">
        <div class="info">
          <h4 class="wow fadeInUp" data-wow-delay="0s">{{ welcomeText }}</h4>
          <h1 class="wow fadeInUp" data-wow-delay=".5s">{{ companyName }}</h1>
          <h6 class="wow fadeInUp" data-wow-delay="1s">{{ msg }}</h6>
          <router-link :to="{ name: 'Contact' }" class="customBtn wow fadeInUp" data-wow-delay="1.5s">
            <p>تواصل معنا <i class="fa-duotone fa-left-long ms-2"></i></p>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      BGVideo: require(`@/assets/video/video.mp4`),
      mainImg: require(`@/assets/img/hello.png`),
      welcomeText: "اهلا بك في  ",
      companyName: "المطورون",
      msg: "لتصميم التطبيقات ومواقع الانترنت والبرامج المحاسبية والادارية ",
    };
  },
};
</script>
<style lang="scss" scoped>
.main {
  background-color: #f2f3f8;
  overflow: hidden;
  padding: 150px 0;
  min-height: 100vh;

  .info {
    padding: 40px;

    h4 {
      margin-bottom: 10px;
    }
    h1 {
      font-size: 70px !important;
      color: #ed2729;
      margin-bottom: 20px;
    }
    h6 {
      margin-bottom: 30px;
    }
  }
}

.video {
  border-radius: 0px 0px 70% 0;
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    //   background: linear-gradient(45deg , #385267 , #ED272900 );
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    min-height: 90vh;
  }
}
.mainImg {
  width: 100%;
  height: 500px;
  object-fit: contain;
  transform: scaleX(-1);
  margin-top: 100px;
}
.slider-shapes {
  position: relative;
}
.has-shadow-1 {
  box-shadow: 0px 40px 40px 0px #00052724;
}
.has-shadow-2 {
  box-shadow: 0px 20px 70px 0px #00052733;
}
.has-shadow-3 {
  box-shadow: 0px 30px 70px 0px #0005271a;
}

.slider-shapes {
  & > *:not(.shape-1) {
    position: absolute;
  }
  & .shape-1 {
    & img {
      animation: hero-thumb-animation 2s linear infinite alternate;
      max-width: inherit;
      @media (min-width: 1400px) and (max-width: 1700px) {
        max-width: 568px;
      }
      @media (min-width: 1200px) and (max-width: 1399px) {
        max-width: 450px;
      }
      @media (min-width: 992px) and (max-width: 1199px) {
        max-width: 450px;
      }
      @media (min-width: 768px) and (max-width: 991px) {
        max-width: 335px;
      }
      @media (min-width: 576px) and (max-width: 767px) {
        max-width: 100%;
      }
      @media (max-width: 767px) {
        max-width: 100%;
      }
    }
  }
  & .shape-2 {
    left: 100px;
    bottom: -60px;
    @media (min-width: 1400px) and (max-width: 1700px) {
      left: 41px;
    }
    @media (min-width: 1200px) and (max-width: 1399px) {
      left: 47px;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      left: 40px;
    }
    @media (min-width: 768px) and (max-width: 991px) {
      left: 35px;
    }
    @media (min-width: 576px) and (max-width: 767px) {
      left: 19px;
    }
    @media (max-width: 767px) {
      left: 7px;
      bottom: -60px;
    }
    & img {
      animation: hero-thumb-sm-2-animation 4s linear infinite alternate;
      @media (min-width: 1200px) and (max-width: 1399px) {
        max-width: 160px;
      }
      @media (min-width: 992px) and (max-width: 1199px) {
        max-width: 150px;
      }
      @media (min-width: 768px) and (max-width: 991px) {
        max-width: 140px;
      }
      @media (min-width: 576px) and (max-width: 767px) {
        max-width: 150px;
      }
      @media (max-width: 767px) {
        max-width: 88px;
      }
    }
  }
  & .shape-4 {
    position: absolute;
    bottom: -80px;
    right: -90px;
    @media (min-width: 1200px) and (max-width: 1399px) {
      right: 24px;
    }
    @media (min-width: 1400px) and (max-width: 1700px) {
      position: absolute;
      bottom: -80px;
      right: -8px;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      right: 80px;
    }
    @media (min-width: 768px) and (max-width: 991px) {
      right: 40px;
      left: auto;
    }
    @media (min-width: 576px) and (max-width: 767px) {
      right: 39px;
    }
    @media (max-width: 767px) {
      bottom: -40px;
      right: 68px;
    }

    & img {
      animation: hero-thumb-sm-animation 4s linear infinite alternate;
      @media (min-width: 1200px) and (max-width: 1399px) {
        max-width: 205px;
      }
      @media (min-width: 992px) and (max-width: 1199px) {
        max-width: 200px;
      }

      @media (min-width: 768px) and (max-width: 991px) {
        max-width: 170px;
      }
      @media (min-width: 576px) and (max-width: 767px) {
        max-width: 200px;
      }
      @media (max-width: 767px) {
        max-width: 100px;
      }
    }
  }
  & .shape-3 {
    top: 150px;
    right: -255px;
    @media (min-width: 1400px) and (max-width: 1700px) {
      right: -79px;
    }
    @media (min-width: 1200px) and (max-width: 1399px) {
      right: -25px;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      top: 40px;
      right: 42px;
    }
    @media (min-width: 768px) and (max-width: 991px) {
      top: 45px;
      right: 0;
    }
    @media (min-width: 576px) and (max-width: 767px) {
      right: 24px;
    }
    @media (max-width: 767px) {
      top: 19px;
      right: 14px;
    }

    & img {
      animation: hero-thumb-sm-2-animation 4s linear infinite alternate;
      @media (min-width: 1200px) and (max-width: 1399px) {
        max-width: 185px;
      }
      @media (min-width: 992px) and (max-width: 1199px) {
        max-width: 220px;
      }
      @media (min-width: 768px) and (max-width: 991px) {
        max-width: 150px;
      }
      @media (min-width: 576px) and (max-width: 767px) {
        max-width: 200px;
      }
      @media (max-width: 767px) {
        max-width: 132px;
      }
    }
  }
  & .shape-inner {
    & img {
      border-radius: 4px;
    }
  }
}
@keyframes hero-thumb-animation {
  0% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes hero-thumb-sm-animation {
  0% {
    transform: translateY(-20px) translateX(50px);
  }
  100% {
    transform: translateY(-20px) translateX(0px);
  }
}
@keyframes hero-thumb-sm-2-animation {
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
