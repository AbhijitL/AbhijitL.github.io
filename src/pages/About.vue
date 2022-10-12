<template>
  <Layout>
    <div class="container slim-contain">
      <div class="row">
        <div class="col-lg-12 gx-3">
          <h1>Bio</h1>
        </div>
        <div class="col-lg-8 gx-3">
          <article class="lead">
            <p>
              Hiii, I'm
              <strong> <font color="#db3d42">Abhijit Leihaorambam</font></strong
              >. I'm a Uni student. I'm from a small town in Manipur, India
              called Jiribam.
            </p>
            <p>
              I'm passionate about creating creative projects and wanted to
              implement and make cool ideas.I self taught myself programming and
              3d modelling when i was in middle school.
            </p>
            <p>
              Been thinking to make games since middle-school with my friends
              and continue as our carrier and still trying to not let the
              passion down.
            </p>
          </article>
          <h2>Software</h2>
          <div>
            <div class="col">
              <i
                class="devicon-godot-plain colored"
                style="font-size: 3rem"
              ></i>
              <i
                class="devicon-blender-original colored"
                style="font-size: 3rem"
              ></i>
              <i
                class="devicon-unrealengine-original colored"
                style="font-size: 3rem"
              ></i>
              <i
                class="devicon-unity-original colored"
                style="font-size: 3rem"
              ></i>
              <i
                class="devicon-flutter-plain colored"
                style="font-size: 3rem"
              ></i>
            </div>
          </div>
          <h2>Skills</h2>
          <p class="skill">
            Gameplay programming | game design | embedded programming | mobile
            app development | 3D modelling | Texturing | Making music(still
            learning)
          </p>
          <h3>Other</h3>
          <p>
            I love to play games especially indie games and love animation
            medium such as anime, which is one of the reasons i wanted to make
            things.
          </p>
          <p>
            My top one favourite game is
            <strong>
              <font color="#db3d42">Ori and the will of wisps</font></strong
            >
          </p>
          <p>
            My top one anime is
            <strong> <font color="#db3d42">Violet Evergarden</font></strong>
            and check out my top 10 favourite anime on my myanimelist
            <a
              href="https://myanimelist.net/profile/ggloll/favorites"
              target="_blank"
              title="MAL"
              >link here</a
            >
          </p>
        </div>

        <div class="col-lg-4">
          <figure>
            <g-image class="img-fluid" src="https://i.imgur.com/QCrmFvZ.jpg" />
            <figcaption>It's me with my cats!</figcaption>
            <g-image
              class="img-fluid"
              src="../assets/images/gifs/ocback6.gif"
            />
            <g-image class="img-fluid" src="../assets/images/gifs/layer0.gif" />
          </figure>
        </div>
        <div class="col-lg-4"></div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "About",
    };
  },
};
</script>

<style scoped>
.skill {
  text-align: center;
}

.img-fluid {
  padding: 4px;
  box-shadow: 1px 2px 30px rgba(0, 0, 0, 0.3);
  /* transform: rotate(90deg); */
}
i {
  padding: 10px;
}
.col {
  display: flex;
  justify-content: center;
}

.list {
  list-style: none;
}
.lead {
  text-align: left;
  padding: 10px;
}
</style>