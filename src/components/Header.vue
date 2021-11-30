<template>
  <div class="header">
    <!-- <h2 class="logo" v-html="$static.metadata.siteName" /> -->
    <a href="/" class="logo" v-html="$static.metadata.siteName" />
    <div class="header-right">
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

.header {
  overflow: hidden;
  background-color: $champangepink;
  padding: 20px 10px;
}
.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a {
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
.header a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the active/current link*/
.header a.active {
  background-color: $oldlavender;
  color: white;
}

/* Float the link section to the right */
.header-right {
  float: right;
}

/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
}
</style>