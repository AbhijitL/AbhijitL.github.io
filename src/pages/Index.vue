<template>
  <Layout>
    <div class="main-body">
      <header></header>
      <body>
        <main>
          <div class="columns">
            <div class="column">
              <aside-info></aside-info>
            </div>
            <div class="column">
              <div class="nes-container is-rounded is-dark">
                <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
              </div>
            </div>
          </div>
        </main>
      </body>
      <footer>
        <p>Made by Abhijit Leihaorambam(me;)</p>
      </footer>
    </div>
  </Layout>
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
