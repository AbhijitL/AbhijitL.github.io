<template>
  <Layout>
    <div class="container skinny-contain">
      <div class="row">
        <div class="col">
          <div class="breadcrumb">
            <div class="breadcrumb-item">
              <a title="Link back to home" href="/">Home</a>
            </div>
            <div class="breadcrumb-item">{{ $metaInfo.title }}</div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <g-image
            class="img-fluid mb-3"
            width="320"
            src="~/assets/images/404.gif"
          />
          <h2>Page not found</h2>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "404 Error",
    };
  },
};
</script>

<style>
.col {
  text-align: center;
}
</style>
