<template>
  <Layout>
    <div class="container skinny-contain">
      <div class="row">
        <div class="col-lg-12">
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <h1 class="display-1 mt-32">
                  Hi,👋I'm Abhijit Leihaorambam<br /><br />
                </h1>
                <ul>
                  <li>_3DModeler</li>
                  <li>_Programmer</li>
                </ul>
                <div class="row">
                  <div class="col">
                    <a
                      href="https://www.instagram.com/labhijits/"
                      target="_blank"
                    >
                      <i class="fa-brands fa-instagram fa-2x"></i>
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="https://www.instagram.com/labhijits/"
                      target="_blank"
                    >
                      <i class="fa-brands fa-artstation fa-2x"></i>
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="https://www.instagram.com/labhijits/"
                      target="_blank"
                    >
                      <i class="fa-brands fa-twitter fa-2x"></i>
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="https://www.instagram.com/labhijits/"
                      target="_blank"
                    >
                      <i class="fa-brands fa-github fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <figure>
                  <g-image
                    class="my_img"
                    src="~/assets/images/pro.png"
                    width="250"
                  ></g-image>
                  <figcaption>It's me!!</figcaption>
                </figure>
              </div>
            </div>
          </div>
          <hr class="my-5" />

          <h2>What I Do</h2>
          <div class="container text-center">
            <div class="row">
              <card
                title="Game Dev"
                text="Gamedev was the reason I started learning programming.And I do occasionally participate in game jams"
                :img_src="require('@/assets/images/games/ue4.jpg')"
                >></card
              >
              <card
                title="3D Modelling"
                text="I have Been doing 3d Modelliing since age 14."
                :img_src="require('@/assets/images/models/13_c.png')"
              ></card>
              <card
                title="Mobile Dev"
                text="I have been doing mobile dev since flutter beta release."
                :img_src="require('@/assets/images/apps/LMM2.png')"
              ></card>
            </div>
            <card
              title="Embedded Systems"
              text="Arduino uno was my first micro controller i owned at age 15"
              :img_src="require('@/assets/images/embedded/1.jpg')"
            ></card>
          </div>

          <hr class="my-4" />

          <h2>Technology I use:</h2>
          <skills></skills>
          <h4 class="mt-4">Bootstrap v5</h4>
          <hr class="my-4" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Card from "@/components/Card.vue";
import Skills from "@/components/SkillsCard.vue";

export default {
  components: {
    Card,
    Skills,
  },
  metaInfo() {
    return {
      title: "Home",
    };
  },
};
</script>


<style>
.col {
  align-self: center;
}

.card {
  padding: 10px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
}

.my_img {
  box-shadow: 1px 2px 30px rgba(0, 0, 0, 0.3);
}

ul li {
  list-style: none;
}
</style>
