<template>
  <!-- banner -->
  <div class="Banner">
    <ul >
      <li>
        <button @click="backward" class="Back">
          <i class="fa-regular fa-angle-right"></i>
        </button>
      </li>
      <li>
        <button @click="redirect" class="redirect">
          <i class="fa-solid fa-house-chimney"></i>
        </button>
      </li>
      <li>
        <router-link :to="{ name: 'Portfolio' }">
          <h4>اعمالنا</h4>
        </router-link>
      </li>
    </ul>
  </div>

  <div v-if="Project">
    <img :src="Project.image" />
    <h3>{{ Project.title }}</h3>
    <span v-for="item in Project.type" :key="item">
      {{ item }}
    </span>
    <p>{{ Project.description }}</p>
  </div>
  <div v-else>................. loading >>>>>>>>>>></div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      Project: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/Projects/" + this.id)
      .then((response) => response.json())
      .then((data) => (this.Project = data))
      .catch((error) => console.log(error.massage));
  },
  methods: {
    backward() {
      this.$router.go(-1);
    },
    redirect() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.Banner {
  display: flex;
  padding: 200px 30px 50px;
  background: #f2f3f8;
  ul {
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    li {
      display: flex;
      align-items: center;
      padding: 0px 10px;
      padding-left: 35px;
      position: relative;
      .Back {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #fff;
        color: #000;
        font-size: 20px;
        border: none;
        box-shadow: 0px 4px 12px #00000030;
        cursor: pointer;
        i {
          font-size: 20px;
        }
      }
      .redirect{
          background: none;
          color: #ed2729;
          border: none;
      }
      a{
          color: #000;
      }

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        width: 2px;
        border-radius: 100px;
        height: 50%;
        background: #999;
        margin: 0 10px;
        transform: skewX(-20deg) translateY(-50%);
      }
      &:last-child {
        &::after {
          display: none;
        }
      }
    }
  }
}
</style> >

