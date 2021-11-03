<template>
  <header>
    <h2 v-html="$static.metadata.siteName" />
    <nav>
      <g-link to="/">Home</g-link>
      <g-link to="/about">About</g-link>
      <g-link to="/">Blog</g-link>
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

<style   scoped>
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 12rem);
  padding: 0.5rem 6rem;
  background: #f7ddcd;
  color: black;
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