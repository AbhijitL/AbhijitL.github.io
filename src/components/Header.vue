<template>
  <div>
    <!-- <h2 class="logo" v-html="$static.metadata.siteName" /> -->
    <a href="/" v-html="$static.metadata.siteName" />
    <div class="nes-container-right">
      <!-- <g-link to="/">Home</g-link> -->
      <g-link to="/art">Art</g-link>
      <g-link to="/apps">Apps</g-link>
      <g-link to="/games">Games</g-link>
      <g-link to="/blog">Blog</g-link>
      <g-link to="/about">Contact</g-link>
    </div>
  </div>
</template>



<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style  lang = "scss" scoped>
@import "~/assets/img/Sass/colors.scss";
</style>