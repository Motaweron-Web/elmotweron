<template>
  <MainBanner />
  <HomeAbout />
  <HomeServices />
  <Languages />
  <HomePortfolio />
  <HomeContact />
</template>

<script>
import MainBanner from "@/components/MainBanner.vue";
import HomeAbout from "@/components/HomeAbout.vue";
import HomeServices from "@/components/HomeServices.vue";
import HomePortfolio from "@/components/HomePortfolio.vue";
import Languages from "@/components/Languages.vue";
import HomeContact from "@/components/HomeContact.vue";
export default {
  components: {
    MainBanner,
    HomeAbout,
    HomeServices,
    HomePortfolio,
    Languages,
    HomeContact,
  },
};
</script>

<style>
</style>