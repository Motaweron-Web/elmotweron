<template>
  <div class="HomePortfolio">
    <div class="container">
      <div class="title">
        <h1>اعمالنا</h1>
      </div>
      <p class="coTitle mb-5">نستعرض لك بعض الاعمال التي قمنا بتنفيذها ...</p>
      <div class="row">
        <div class="col-md-3 p-2" v-for="Project in Projects" :key="Project">
          <div class="project">
            <img :src="Project.image" />
            <div class="projectData">
              <h4>{{ Project.title }}</h4>
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
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #0000001a;
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
      background-image: linear-gradient(60deg, #ffaef2d5, #ff9394d5);
    }
    img {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 250px;
    }
    .projectData {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      background-color: #fff;
      z-index: 3;
      padding: 10px;
      text-align: center;
      box-shadow: 0px 4px 12px #0000001a;
    }
    &:hover{
      &::after {
        opacity: 1;
      }
    }

    // .content {
    //   position: relative;
    //   z-index: 2;
    //   transition: all 0.3s ease-in-out;

    //   .icon {
    //     width: 40px;
    //     height: 40px;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     margin: 30px 10px;
    //     transition: all 0.3s ease-in-out;

    //     i {
    //       font-size: 30px;
    //       color: #ed2729;
    //     }
    //   }
    //   h3 {
    //     font-size: 30px;
    //     font-weight: bold;
    //     margin-bottom: 10px;
    //     transition: all 0.3s ease-in-out;
    //   }
    //   p {
    //     font-size: 16px;
    //     line-height: 30px;
    //     transition: all 0.3s ease-in-out;
    //   }
    //   a {
    //     padding: 20px 0px 0;
    //     display: block;
    //     transition: all 0.3s ease-in-out;

    //     i {
    //       font-size: 20px;
    //       color: #ed2729;
    //     }
    //   }
    // }
    // &:hover {
    //   &::after {
    //     opacity: 1;
    //   }
    //   .content {
    //     a,
    //     .icon {
    //       i {
    //         color: #fff;
    //       }
    //     }
    //     p,
    //     h3 {
    //       color: #fff;
    //     }
    //   }
    // }
  }
}
</style>