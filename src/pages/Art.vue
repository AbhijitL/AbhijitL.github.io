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
      <div class="container-fluid"></div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Art",
    };
  },
  components: {},
};
</script>

<style>
</style>
