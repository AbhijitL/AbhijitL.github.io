<template>
  <header>
    <h2 v-html="$static.metadata.siteName" />
    <nav>
      <g-link to="/">Home</g-link>
      <g-link to="/">Art</g-link>
      <g-link to="/blog">Blog</g-link>
      <g-link to="/about">About</g-link>
    </nav>
  </header>
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

header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 12rem);
  padding: 0.5rem 6rem;
  background: $champangepink;
  color: $oldlavender;
}
h2 {
  font-size: 1.4rem;
  font-weight: 500;
}
nav a {
  color: inherit;
  text-decoration: none;
  padding: 1rem;
  font-size: 1.2rem;
}
</style>