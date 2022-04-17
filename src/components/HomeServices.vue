<template>
  <div class="ServicesHome">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4 p-2">
          <div class="info">
            <h2>خدماتنا</h2>
            <p>تعرف اكثر علي الخدمات التي نقدمها للعالم ...</p>
            <router-link
              :to="{ name: 'Services' }"
              class="customBtn wow fadeInUp"
            >
              <p>كل الخدمات <i class="fa-duotone fa-left-long ms-2"></i></p>
            </router-link>
          </div>
        </div>
        <div class="col-md-8 p-2">
          <div class="services">
            <div class="row">
              <div class="col-sm-6 p-2 singleService">
                <div class="info">
                  <div class="content">
                    <div class="icon">
                      <i class="fa fa-desktop"></i>
                    </div>
                    <h3>التطبيقات</h3>
                    <p>
                      تصميم مواقع الانترنت للشركات والمؤسسات والمجتمعات
                      والمجالات التجارية والتي تحتاج الى تصميم جديد
                    </p>
                    <router-link :to="{ name: 'Services' }">
                      <p><i class="fa-duotone fa-left-long ms-2"></i></p>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 p-2 singleService">
                <div class="info">
                  <div class="content">
                    <div class="icon">
                      <i class="fa fa-mobile"></i>
                    </div>
                    <h3>مواقع الويب</h3>
                    <p>
                      تصميم الموبايل للشركات والمؤسسات والمجتمعات والمجالات
                      التجارية والتي تحتاج الى تصميم جديد
                    </p>
                    <router-link :to="{ name: 'Services' }">
                      <p><i class="fa-duotone fa-left-long ms-2"></i></p>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 p-2 singleService">
                <div class="info">
                  <div class="content">
                    <div class="icon">
                      <i class="fa fa-paint-brush"></i>
                    </div>
                    <h3>التصميم</h3>
                    <p>
                      تصميم المواقع الإلكترونية للشركات والمؤسسات والمجتمعات
                      والمجالات التجارية والتي تحتاج الى تصميم جديد
                    </p>
                    <router-link :to="{ name: 'Services' }">
                      <p><i class="fa-duotone fa-left-long ms-2"></i></p>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 p-2 singleService">
                <div class="info">
                  <div class="content">
                    <div class="icon">
                      <i class="fa-solid fa-solar-system"></i>
                    </div>
                    <h3>الانظمة</h3>
                    <p>
                      تصميم المواقع الإلكترونية للشركات والمؤسسات والمجتمعات
                      والمجالات التجارية والتي تحتاج الى تصميم جديد
                    </p>
                    <router-link :to="{ name: 'Services' }">
                      <p><i class="fa-duotone fa-left-long ms-2"></i></p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainImg: require(`@/assets/img/hello.png`),
    };
  },
};
</script>

<style lang="scss" scoped>
.ServicesHome {
  background-color: #f2f3f8;
  padding: 70px 0 150px;

  .info {
    h2 {
      font-size: 50px !important;
      font-weight: bold;
      margin-bottom: 20px;
    }
    a {
      margin-top: 20px;
    }
  }
  .services {
    .singleService {
      .info {
        padding: 20px;
        border-radius: 5px;
        box-shadow: 5px 5px 15px #d1d9e6,-5px -5px 15px #fff;
        background-color: #fff;
        position: relative;
        &::after {
          height: 100%;
          content: "";
          left: 0px;
          position: absolute;
          top: 0px;
          width: 100%;
          transition: all 0.3s ease-in-out;
          opacity: 0;
          border-radius: 5px;
          background-size: cover;
          background-position: center;
          z-index: 1;
        }

        .content {
          position: relative;
          z-index: 2;
          transition: all 0.3s ease-in-out;

          .icon {
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 30px 10px;
            transition: all 0.3s ease-in-out;

            i {
              font-size: 30px;
              color: #ed2729;
            }
          }
          h3 {
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 10px;
            transition: all 0.3s ease-in-out;
          }
          p {
            font-size: 16px;
            line-height: 30px;
            transition: all 0.3s ease-in-out;
          }
          a {
            padding: 20px 0px 0;
            display: block;
            transition: all 0.3s ease-in-out;

            i {
              font-size: 20px;
              color: #ed2729;
            }
          }
        }
        &:hover {
          &::after {
            opacity: 1;
          }
          .content {
            a,
            .icon {
              i {
                color: #fff;
              }
            }
            p,
            h3 {
              color: #fff;
            }
          }
        }
      }
      &:nth-child(1) {
        .info {
          &::after {
            background-image: linear-gradient(60deg, #f074dcd5, #ed272ad5),
              url(@/assets/img/apps.jpg);
          }
        }
      }
      &:nth-child(2) {
        .info {
          &::after {
            background-image: linear-gradient(60deg, #f074dcd5, #ed272ad5),
              url(@/assets/img/web.jpg);
          }
        }
      }
      &:nth-child(3) {
        .info {
          &::after {
            background-image: linear-gradient(60deg, #f074dcd5, #ed272ad5),
              url(@/assets/img/design.jpg);
          }
        }
      }
      &:nth-child(4) {
        .info {
          &::after {
            background-image: linear-gradient(60deg, #f074dcd5, #ed272ad5),
              url(@/assets/img/systems.jpg);
          }
        }
      }
    }
  }
}
</style>