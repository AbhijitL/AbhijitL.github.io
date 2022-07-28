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
      <div>
        <CoolLightBox :items="items" :index="index" @close="index = null">
        </CoolLightBox>

        <div>
          <div
            v-for="(image, imageIndex) in items"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image.src + ')' }"
          ></div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
export default {
  metaInfo() {
    return {
      title: "Art",
    };
  },
  components: {
    CoolLightBox,
  },
  data: function () {
    return {
      items: [
        {
          title: "In nature, nothing is perfect and everything is perfect",
          description: "Photo by Lucas",
          src: "https://upload.wikimedia.org/wikipedia/commons/4/42/Shaqi_jrvej.jpg",
        },
        {
          title: "a beautiful mountain view",
          description: "Photo by Facundo",
          src: "https://upload.wikimedia.org/wikipedia/commons/4/42/Shaqi_jrvej.jpg",
        },
      ],
      index: null,
    };
  },
};
</script>

<style>
.image {
  background-size: cover;
  background-position: center;
  height: 40%;
  width: 40%;
  cursor: pointer;
  padding: 20px;
  align-self: center;
}
</style>
