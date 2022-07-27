<template>
  <v-app>
    <!-- Must have the app property -->
    <v-app-bar app></v-app-bar>

    <v-main> Hello World </v-main>
  </v-app>
</template>



<script>
import Skills from "../components/Skills.vue";
import AsideInfo from "../components/Content-R.vue";
export default {
  components: { Skills, AsideInfo },
  metaInfo: {
    title: "Home",
  },
};
</script>

<style lang="scss" >
@import "~/assets/img/Sass/colors.scss";

footer {
  text-align: center;
  margin-top: auto;
}
body {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
}
</style>
