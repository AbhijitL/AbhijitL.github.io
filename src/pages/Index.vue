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
              </div>
              <div class="col">
                <figure>
                  <g-image
                    class="my_img"
                    src="~/assets/images/pro.png"
                    width="200"
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
                text="Gamedev was the reason I started learning programing."
                :img_src="require('@/assets/images/games/ue4.jpg')"
                >></card
              >
              <card
                title="3D Modelling"
                text="I have Been doing 3d Modelliing since age 14."
                :img_src="require('@/assets/images/models/ruins.jpg')"
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

          <h3>Development Notes</h3>

          <h4 class="mt-4">Bootstrap v5</h4>
          <p>
            I wanted to test out
            <a target="_blank" href="https://v5.getbootstrap.com"
              >v5 of Bootstrap</a
            >, so I used it on this site. This is using
            <code>Bootstrap v5.0.0-beta1</code> so you should likely update it
            whenever there are new versions available. There are likely to be
            bugs I don't know about.
          </p>

          <h4 class="mt-4">Search</h4>
          <p>
            I added search to the site using
            <a target="_blank" href="https://www.npmjs.com/package/vue-fuse"
              ><code>vue-fuse</code></a
            >
            based on this
            <a href="https://www.youtube.com/watch?v=6i8D8j5Gkk8"
              >wonderful tutorial</a
            >. I added code into the <code>gridsome.server.js</code> file that
            on build creates a JSON file of the current blog posts. To update
            that JSON file with new posts you run <code>gridsome build</code>.
          </p>

          <h4 class="mt-4">Skinny Responsive Containers</h4>
          <p>
            I made 2 custom containers for the site. The containers have an
            extra 32px gutter on the outside to match my custom grid spacing.
            They have media queries to make them responsive on all screen sizes.
          </p>

          <ul>
            <li>
              <strong>skinny-contain</strong> has a max width of
              <code>672px wide</code> (640px of content space)
            </li>
            <li>
              <strong>slim-contain</strong> has a max width of
              <code>992px wide</code> (960px of content space)
            </li>
          </ul>

          <h4 class="mt-4">Dark Mode</h4>
          <p>
            I've added css classes that properly style the site for devices that
            use dark mode.
          </p>
          <hr class="my-4" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  components: {
    Card,
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
.my_img {
  box-shadow: 1px 2px 30px rgba(0, 0, 0, 0.3);
}
</style>
