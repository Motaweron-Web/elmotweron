<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container align-items-lg-end">
      <router-link to="/" class="navbar-brand">
        <img :src="logo" />
      </router-link>

      <button
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="link pe-3">
              <!-- <i class="fa-light fa-house me-2"></i> -->
              <p>الرئيسية</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'About' }" class="link pe-3">
              <!-- <i class="fa-light fa-circle-info me-2"></i> -->
              <p>من نحن</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Services' }" class="link pe-3">
              <!-- <i class="fa-light fa-briefcase me-2"></i> -->
              <p>خدماتنا</p>
            </router-link>
            <ul>
              <li>
                <router-link :to="{ name: 'Services' }" class="link">
                  <p>التطبيقات</p>
                </router-link>
                <ul>
                  <li>
                    <router-link :to="{ name: 'Services' }" class="link">
                      <p>اندرويد</p>
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Services' }" class="link">
                      <p>ايفون</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link :to="{ name: 'Services' }" class="link">
                  <p>مواقع الويب</p>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Services' }" class="link">
                  <p>التصميم</p>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Services' }" class="link">
                  <p>الانظمة</p>
                </router-link>
                <ul>
                  <li>
                    <router-link :to="{ name: 'Services' }" class="link">
                      <p>نظام ادارة الشركات</p>
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Services' }" class="link">
                      <p>نظام المحاسبة المالية</p>
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'Portfolio' }" class="link pe-3">
              <!-- <i class="fa-light fa-images me-2"></i> -->
              <p>اعمالنا</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Processes' }" class="link pe-3">
              <!-- <i class="fa-light fa-waveform-lines me-2"></i> -->
              <p>العمليات</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Contact' }" class="link pe-3">
              <!-- <i class="fa-light fa-message me-2"></i> -->
              <p>تواصل معنا</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logo: require(`@/assets/img/logo.png`),
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const appScroll = window.pageYOffset;
      if (appScroll > 60 && appScroll < 99999999999) {
        document.querySelector(".navbar").classList.add("animatedNav");
      } else {
        document.querySelector(".navbar").classList.remove("animatedNav");
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.navbar {
  padding: 0;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background: #ffffff00;
}
.navbar-brand {
  padding: 5px;
  img {
    height: 80px;
    width: 100%;
    object-fit: contain;
    transition: all 0.3s ease-in-out;
  }
}
.navbar-toggler {
  border: none;
  outline: none;
  box-shadow: none;
}
.navbar-nav {
  justify-content: center;
  .nav-item {
    display: flex;
    justify-content: center;
    position: relative;
    .link {
      padding: 20px 10px;
      color: #000;
      // border-bottom: 3px solid transparent;
      transition: 0.3s ease-in-out all;
      display: inline-flex;
      align-items: center;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: -1px;
        width: 0%;
        height: 2px;
        background-color: #ed2729;
        border-radius: 10px;
        transition: 0.3s ease-in-out;
      }
      i {
        transition: 0.1s ease-in-out all;
      }
      &.router-link-exact-active {
        color: #ed2729;
        // border-bottom: 3px solid #ed2729;
        &::after {
          width: 100%;
        }
        i {
          font-weight: 600;
        }
      }
    }
    ul {
      position: absolute;
      right: -50%;
      top: calc(100% + 20px);
      background: #fff;
      list-style: none;
      margin: 0;
      box-shadow: 0px 2px 4px #00000030;
      min-width: 170px;
      padding: 10px 15px;
      transition: 0.2s ease-in-out all;
      opacity: 0;
      visibility: hidden;
      z-index: 3;
      li {
        margin-bottom: 5px;
        position: relative;
        .link {
          padding: 10px 0;
          display: block;
          &.router-link-exact-active {
          &::after{
            display: none;
          }
          }
        }
        &::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 1px;
          width: 0%;
          height: 2px;
          background-color: #ed2729;
          border-radius: 10px;
          transition: 0.3s ease-in-out;
        }
        ul {
          // right: unset;
          top: 0;
          right: calc(100% + 20px);
        }
        &:hover {
          &::after {
            width: 30px;
          }
          & > ul {
            opacity: 1;
            visibility: visible;
            right: calc(100% + 0px);
          }
        }
      }
    }
    &:hover {
      & > ul {
        opacity: 1;
        visibility: visible;
        top: calc(100% + 0px);
      }
    }
  }
  @media (max-width: 768px) {
    padding: 20px 10px;

    .nav-item {
      display: block;
      text-align: center;
      ul {
        position: relative;
        right: unset;
        top: unset;
        box-shadow: none;
        // opacity: unset;
        // visibility: unset;
        height: 0px;
        padding: 0;

        li {
          ul {
            right: unset;
            top: unset;
            left: unset;
          }
          &:hover {
            & > ul {
              opacity: unset;
              visibility: unset;
              left: unset;
              right: unset;
              height: 100%;
              margin-top: 10px;
            }
          }
        }
      }
      &:hover {
        & > ul {
          opacity: unset;
          visibility: unset;
          top: unset;
          height: 100%;
          margin-top: 10px;
        }
      }
    }
  }
}
.animatedNav {
  background: #ffffff !important;
  box-shadow: 0px 4px 12px #00000030;
  .navbar-brand {
    img {
      height: 60px !important;
    }
  }
  .navbar-nav {
    .nav-item {
      .link {
        color: #000000;
        &.router-link-exact-active {
          color: #ed2729;
          i {
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>