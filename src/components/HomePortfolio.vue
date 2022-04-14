<template>
  <div class="HomePortfolio">
    <div class="container">
      <div class="title">
        <h1>اعمالنا</h1>
      </div>
      <p class="coTitle mb-5">نستعرض لك بعض الاعمال التي قمنا بتنفيذها ...</p>
      <div class="row">
        <div class="col-6 col-sm-4 col-md-3 p-1 p-md-2" v-for="Project in Projects.slice(0, 7)" :key="Project" >
          <div class="project">
            <div class="projectDetails">
              <img :src="Project.image" />
              <div class="details">
                <h4>{{ Project.title }}</h4>
                <span v-for="item in Project.type" :key="item">
                  {{ item }}
                </span>
              </div>
              <div class="details details-2">
                <p>{{ Project.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 p-1 p-md-2">
          <router-link to="/portfolio">
            <div class="showAll">
              <h6>عرض الكل <i class="fa-duotone fa-left-long ms-2"></i></h6>
            </div>
          </router-link>
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
        margin-bottom: 0px;
      }
      span {
        color: #dadde3;
        margin: 3px;
        display: inline-block;
        text-transform: uppercase;
      }
      p {
        color: #ffffff;
        padding: 0 10px;
        max-height: 250px;
      }
    }
    .details-2 {
      opacity: 0;
      top: 0px;
      visibility: hidden;
    }
    .projectDetails {
      position: relative;
      &::after,
      &::before {
        content: "";
        height: 100%;
        right: 0px;
        position: absolute;
        width: 100%;
        transition: all 0.3s ease-in-out;
        border-radius: 8px;
      }
      &::before {
        background-image: linear-gradient(60deg, #f074dcd5, #ed272ad5);
        opacity: 0;
        right: 0px;
      }
      &::after {
        background-image: linear-gradient(0deg, #1a152e, #1a152e00);
        top: 0px;
        z-index: 1;
      }
    }

    &:hover {
      .projectDetails::before {
        opacity: 0.9;
      }
      .projectDetails::after {
        opacity: 0;
      }
      .details {
        bottom: 0px;
        opacity: 0;
        visibility: hidden;
      }
      .details-2 {
        opacity: 1;
        top: 25px;
        visibility: visible;
      }
    }
  }
  .showAll {
    width: 100%;
    height: 100%;
    border-radius: 200px;
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