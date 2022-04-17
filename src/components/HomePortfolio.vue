<template>
  <div class="HomePortfolio">
    <div class="container">
      <div class="title">
        <h1>اعمالنا</h1>
      </div>
      <p class="coTitle mb-5">نستعرض لك بعض الاعمال التي قمنا بتنفيذها ...</p>
      <div class="row" v-if="Projects.length">
        <div
          class="col-6 col-sm-4 col-md-3 p-1 p-md-2 "
          v-for="Project in Projects.slice(0, 7)"
          :key="Project.id"
        >
          <div class="project">
            <div class="projectDetails">
              <img :src="Project.image" />
              <div class="details">
                <div class="Tags">
                  <span class="tag" v-for="item in Project.type" :key="item">
                    <a href="https://play.google.com/store/apps/dev?id=7401350121448606845" target="_blank">
                      {{ item }}
                    </a>
                  </span>
                </div>

                <router-link
                  :to="{ name: 'ProjectDetails', params: { id: Project.id } }"
                >
                  <h4>{{ Project.title }}</h4>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 p-1 p-md-2 ">
          <router-link :to="{ name: 'Portfolio' }">
            <div class="showAll">
              <h6>عرض الكل <i class="fa-duotone fa-left-long ms-2"></i></h6>
            </div>
          </router-link>
        </div>
      </div>
      <div v-else>
        <div class="noProjects">
          <h6>لا يوجد اعمال حاليا</h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Projects: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/Projects")
      .then((response) => response.json())
      .then((data) => (this.Projects = data))
      .catch((error) => console.log(error.massage));
  },
};
</script>
<style lang="scss" scoped>
.HomePortfolio {
  padding: 70px 0;
  .project {
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    display: block;
    img {
      border-radius: 10px;
      height: 300px;
      width: 100%;
      object-fit: cover;
    }
    .details {
      bottom: 25px;
      right: 10px;
      z-index: 2;
      transition: all 0.3s ease-in-out;
      position: absolute;
      h4 {
        color: #ffffff;
        font-size: 20px;
        margin-top: 10px;
        transition: all 0.3s ease-in-out;
      }
      .tag {
        color: #dadde3;
        margin: 3px;
        display: inline-block;
        font-size: 12px;
        background: #ed2729;
        border-radius: 100px;
        padding: 3px 10px;
        a {
          color: #fff;
        }
      }
      p {
        color: #ffffff;
        padding: 0 10px;
        max-height: 250px;
      }
      .Tags {
        transition: all 0.3s ease-in-out;
        opacity: 0;
        visibility: hidden;
        height: 0%;
      }
    }
    .projectDetails {
      position: relative;
      &::after {
        content: "";
        height: 100%;
        right: 0px;
        position: absolute;
        width: 100%;
        transition: all 0.3s ease-in-out;
        border-radius: 8px;
      }
      // &::before {
      //   background-image: linear-gradient(60deg, #f074dcd5, #ed272ad5);
      //   opacity: 0;
      //   right: 0px;
      // }
      &::after {
        background-image: linear-gradient(0deg, #1a152e, #1a152e00);
        top: 0px;
        z-index: 1;
      }
    }
    &:hover {
      // .projectDetails::before {
      //   opacity: 0.9;
      // }
      // .projectDetails::after {
      //   opacity: 0;
      // }
      // .details {
      //   bottom: 0px;
      //   opacity: 0;
      //   visibility: hidden;
      // }
      .Tags {
        display: inline-block;
        opacity: 1;
        height: 100%;
        visibility: visible;
      }
    }
  }
  .showAll {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    text-align: center;
    padding: 10px 0;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1a152e00;
    color: #000000;
    border: 1px solid #000000;
    &:hover {
      color: #ffffff;
      background-color: #1a152e;
      box-shadow: 0px 10px 30px #00000030;
    }
  }
  .noProjects {
    text-align: center;
    padding: 10px 0;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1a152e00;
    color: #000000;
    border: 1px solid #000000;
    &:hover {
      color: #ffffff;
      background-color: #1a152e;
      box-shadow: 0px 10px 30px #00000030;
      border-radius: 10px;
    }
  }
}
</style>