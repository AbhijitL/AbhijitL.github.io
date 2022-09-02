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
              Hiii, I'm <strong>Abhijit Leihaorambam</strong>. I'm a Uni
              student. I'm from a small town in Manipur, India called Jiribam. I
              self taught myself programming and 3d modelling when i was in
              middle school from internet and tech megazine. I love animation
              which is the reason I started to learn 3d modelling. I am very
              passionate about programming when I am passionate about something
              I completely focus on it which is one of my downside as I don't
              focus out of my passion.
            </p>

            <p>Just a few things about me:</p>
            <li class="list">
              <ul>
                1. I'm a 3D Generalist
              </ul>
              <ul>
                2. I'm a Programmer
              </ul>
              <ul>
                3. I make Games!
              </ul>
              <ul>
                4. I love to play indie games
              </ul>
              <ul>
                5. I am a huge fan of anime.
              </ul>
            </li>
          </article>
        </div>

        <div class="col-lg-4">
          <g-image
            class="img-fluid"
            src="~/assets/images/pro.png"
            alt="Pixel art of me"
          />
        </div>
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
.img-fluid {
  padding: 10px;
  box-shadow: 1px 2px 30px rgba(0, 0, 0, 0.3);
}

.list {
  list-style: none;
}
.lead {
  text-align: justify;
  padding: 10px;
}
</style>