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
      <p>A Work in progress gallery</p>
      <div class="fefd">
        <CoolLightBox
          :items="items"
          :index="index"
          :useZoomBar="true"
          @close="index = null"
        ></CoolLightBox>
        <div class="conta">
          <div
            class="image"
            v-for="(image, imageIndex) in items"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{
              backgroundImage: 'url(' + image.thumb + ')',
              width: '300px',
              height: '200px',
            }"
          ></div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
// import VueGallery from "vue-gallery";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
export default {
  metaInfo() {
    return {
      title: "Art",
    };
  },
  data: function () {
    return {
      items: [
        {
          title: "A tribute to Violet Evergarden",
          description:
            "Made using blender more https://www.artstation.com/artwork/r9B43m",
          src: "https://i.imgur.com/8VMtwWE.jpg",
          thumb: "https://i.imgur.com/8VMtwWEh.jpg",
        },
        {
          title: "Medieval buildings",
          description: "Made using blender",
          src: "https://i.imgur.com/X5GNa4b.png",
          thumb: "https://i.imgur.com/X5GNa4bh.png",
        },
        {
          title: "A ancient ritual site",
          description:
            "Made using blender more https://www.artstation.com/artwork/R3gBgX",
          src: "https://i.imgur.com/rw6h68U.jpg",
          thumb: "https://i.imgur.com/rw6h68Uh.jpg",
        },
        {
          title: "Studio Ghibli's Laputa castle in the sky fan art video",
          description:
            "Made using blender more https://www.artstation.com/artwork/d00d6x",
          src: "https://youtu.be/uu-qyHXNBig",
          thumb: "https://i.imgur.com/WUWoTOjh.jpg",
        },
        {
          title: "Studio Ghibli's Laputa castle in the sky fan art stil",
          description:
            "Made using blender more https://www.artstation.com/artwork/d00d6x",
          src: "https://i.imgur.com/WUWoTOj.jpg",
          thumb: "https://i.imgur.com/WUWoTOjh.jpg",
        },
        {
          title: "The cart video",
          description:
            "Made using blender for a competetion check out on Clint's channel Pwnisher",
          src: "https://youtu.be/cl8RKBtH1G4",
          thumb: "https://i.imgur.com/oIlnwabh.png",
        },
        {
          title: "The cart still",
          description:
            "Made using blender for a competetion check out on Clint's channel Pwnisher",
          src: "https://i.imgur.com/oIlnwab.png",
          thumb: "https://i.imgur.com/oIlnwab.png",
        },
        {
          title: "A cavern in ue 5 video",
          description:
            "Made using Unreal engine 5 more on https://www.artstation.com/artwork/xYxlER",
          src: "https://youtu.be/kG3Noa-8nd4",
          thumb: "https://i.imgur.com/ZSjSrkth.jpg",
        },
        {
          title: "A cavern in ue 5 still",
          description:
            "Made using Unreal engine 5 more on https://www.artstation.com/artwork/xYxlER",
          src: "https://i.imgur.com/ZSjSrkt.jpg",
          thumb: "https://i.imgur.com/ZSjSrkth.jpg",
        },
        {
          title: "A Cool Robot",
          description:
            "Made using blender more https://www.artstation.com/artwork/r99RE2",
          src: "https://i.imgur.com/4tS8pid.png",
          thumb: "https://i.imgur.com/nSxn7ivh.png",
        },
        {
          title: "Whisker's away inspired hatsune mask",
          description: "Made using blender",
          src: "https://i.imgur.com/JcU2itv.jpg",
          thumb: "https://i.imgur.com/JcU2itvh.jpg",
        },
        {
          title: "Ancient Creature",
          description:
            "Made using blender more https://www.artstation.com/artwork/Xn00Jy",
          src: "https://i.imgur.com/XJZgZm1.png",
          thumb: "https://i.imgur.com/XJZgZm1h.png",
        },
        {
          title: "A scifi bike",
          description:
            "Made using blender https://www.artstation.com/artwork/5XnXoW",
          src: "https://i.imgur.com/OnHX0NZ.jpg",
          thumb: "https://i.imgur.com/OnHX0NZh.jpg",
        },
        {
          title: "A rusty robot",
          description: "Made using blender",
          src: "https://i.imgur.com/mKZGT9L.png",
          thumb: "https://i.imgur.com/mKZGT9Lh.png",
        },
        {
          title: "Godot intro logo",
          description: "Made using blender",
          src: "https://youtu.be/gFkBc19Dr44",
          thumb: "https://i.imgur.com/fkZ6T3Kh.png",
        },
        {
          title: "A fish school",
          description: "Made using blender",
          src: "https://youtu.be/AJ2EyIJ6kSc",
          thumb: "https://i.imgur.com/YgUbx7fh.png",
        },
        {
          title: "The mist short film",
          description: "Made using Unreal engine 4",
          src: "https://youtu.be/DXX44y55vI8",
          thumb: "https://i.imgur.com/X0BJsQ1.jpg",
        },
        {
          title: "Generative art",
          description: "Made using blender",
          src: "https://i.imgur.com/bER6uny.jpg",
          thumb: "https://i.imgur.com/bER6uny.jpg",
        },
        {
          title: "Pixar ball",
          description: "Made using blender",
          src: "https://i.imgur.com/rm4SjfI.jpg",
          thumb: "https://i.imgur.com/rm4SjfIh.jpg",
        },
        {
          title: "Pixar's Soul movie fanart",
          description: "Made using blender",
          src: "https://i.imgur.com/XmBrhOO.png",
          thumb: "https://i.imgur.com/XmBrhOOh.png",
        },
        {
          title: "A fallen girl",
          description: "Made using blender",
          src: "https://i.imgur.com/pElgM1E.jpg",
          thumb: "https://i.imgur.com/pElgM1Eh.jpg",
        },
        {
          title: "a robot",
          description: "Made using blender",
          src: "https://i.imgur.com/MPS5azL.png",
          thumb: "https://i.imgur.com/MPS5azLh.png",
        },
        {
          title: "Slime san",
          description: "Made using blender",
          src: "https://i.imgur.com/jcyfKZY.png",
          thumb: "https://i.imgur.com/jcyfKZYh.png",
        },
      ],
      index: null,
    };
  },

  components: {
    // gallery: VueGallery,
    CoolLightBox,
  },
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
