<template>
  <div class="card mb-3" style="max-width: 1000px">
    <div class="row g-0">
      <div class="col-md-4">
        <g-image
          v-bind:src="img_src"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h3 class="card-title">{{ title }}</h3>
          <p class="card-text">{{ text }}</p>
          <g-link class="nav-link" rel="noopener" to="/art">See more</g-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    img_src: String,
  },
};
</script>

<style scoped>
.col-md-8 {
  align-self: center;
}

.card-text {
  text-align: justify;
}

.col-md-4 {
  align-self: center;
}
</style>