<template>
  <Layout>
    <div class="container slim-contain">
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
      <p>Work in progress gallery</p>
      <div class="fefd">
        <gallery
          :images="images"
          :index="index"
          @close="index = null"
        ></gallery>
        <div
          class="image"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{
            backgroundImage: 'url(' + image + ')',
            width: '300px',
            height: '200px',
          }"
        ></div>
      </div>
    </div>
  </Layout>
</template>

<script>
// import VueGallery from "vue-gallery";
export default {
  metaInfo() {
    return {
      title: "Art",
    };
  },
  data: function () {
    return {
      images: [
        "https://i.imgur.com/8VMtwWE.jpg",
        "https://i.imgur.com/X5GNa4b.png",
        "https://i.imgur.com/rw6h68U.jpg",
        "https://i.imgur.com/OnHX0NZ.jpg",
        "https://i.imgur.com/mKZGT9L.png",
        "https://i.imgur.com/wkTrYxM.png",
        "https://i.imgur.com/bER6uny.jpg",
        "https://i.imgur.com/rm4SjfI.jpg",
        "https://i.imgur.com/XmBrhOO.png",
        "https://i.imgur.com/MPS5azL.png",
      ],
      index: null,
    };
  },

  // components: {
  //   gallery: VueGallery,
  // },
};
</script>
<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>
