<template>
  <div class="card mb-3" style="max-width: 540px">
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
          <h4 class="card-title">{{ title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    img_src: String,
  },
};
</script>

<style scoped>
.col-md-8 {
  align-self: center;
}
</style>