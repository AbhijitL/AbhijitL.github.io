<template>
  <Layout>
    <div class="main-body">
      <header></header>
      <body></body>
      <footer>
        <p>Made by Abhijit Leihaorambam(me;)</p>
      </footer>
    </div>
  </Layout>
</template>



<script>
import Skills from "../components/Skills.vue";
import Bruh from "../components/Content-R.vue";
export default {
  components: { Skills, Bruh },
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
