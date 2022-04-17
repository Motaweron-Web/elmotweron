<template>
  <!-- banner -->
  <div class="Banner">
    <ul>
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

  <div v-if="Project" class="Project container">
    <div class="row justify-content-center">
      <div class="col-md-9 p-2">
        <img :src="Project.image" />
        <h2>{{ Project.title }}</h2>
        <div class="tags">
          <span class="tag" v-for="item in Project.type" :key="item">
            <a
              href="https://play.google.com/store/apps/dev?id=7401350121448606845"
              target="_blank"
            >
              {{ item }}
            </a>
          </span>
        </div>
        <p>{{ Project.description }}</p>
      </div>
    </div>
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
.Project {
  padding: 30px 0px 30px;
  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 16px;
    margin-bottom: 30px;
  }
  h2 {
    font-weight: bold;
    margin-bottom: 16px;
  }
  .tags {
    display: block;
    margin-bottom: 16px;
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
  }
  p{
    color: #777;
  }
}
</style> >

