<template>
  <div class="nes-container">
    <!-- <h2 class="logo" v-html="$static.metadata.siteName" /> -->
    <a href="/" class="nes-btn" v-html="$static.metadata.siteName" />
    <div class="nes-container-right">
      <!-- <g-link to="/">Home</g-link> -->
      <g-link class="nes-btn" to="/art">Art</g-link>
      <g-link class="nes-btn" to="/apps">Apps</g-link>
      <g-link class="nes-btn" to="/games">Games</g-link>
      <g-link class="nes-btn" to="/blog">Blog</g-link>
      <g-link class="nes-btn" to="/about">Contact</g-link>
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

.nes-container {
  overflow: hidden;
  background-color: $champangepink;
  padding: 20px 10px;
}
.nes-container a.logo {
  font-size: 25px;
  font-weight: bold;
}

.nes-container a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 20px;

  border-radius: 10px;
}

/* Change the background color on mouse-over */
.nes-container a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the active/current link*/
.nes-container a.active {
  background-color: $oldlavender;
  color: white;
}

/* Float the link section to the right */
.nes-container-right {
  float: right;
}

/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
@media screen and (max-width: 500px) {
  .nes-container a {
    float: none;
    display: block;
    text-align: left;
  }
  .nes-container-right {
    float: none;
  }
}
</style>