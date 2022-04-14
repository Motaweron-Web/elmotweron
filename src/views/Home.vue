<template>
    <MainBanner />
    <HomeAbout/>
    <HomeServices/>
    <HomePortfolio/>
</template>

<script>
import MainBanner from "@/components/MainBanner.vue";
import HomeAbout from "@/components/HomeAbout.vue";
import HomeServices from "@/components/HomeServices.vue";
import HomePortfolio from "@/components/HomePortfolio.vue";
export default {
  components: {
    MainBanner,
    HomeAbout,
    HomeServices,
    HomePortfolio,
  },
};
</script>

<style>

</style>