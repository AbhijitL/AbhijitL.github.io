<template>
  <Layout>
    <div class="main-body">
      <header>
        <div
          class="
            columns
            is-variable
            is-1-mobile
            is-0-tablet
            is-3-desktop
            is-8-widescreen
            is-2-fullhd
            is-vcentered
          "
        >
          <div class="column" style="padding-left: 100px">
            <h1>
              Hi, I'm <br />
              Abhijit Leihaorambam
            </h1>
            <ul>
              <li>_3DModeler</li>
              <li>_Programmer</li>
            </ul>
            <div columns>
              <a
                href="https://www.instagram.com/labhijits/"
                target="_blank"
                class="button"
                >Instagram</a
              >
              <a
                href="https://twitter.com/leihaorambam"
                target="_blank"
                class="button"
                >Twitter</a
              >
              <a
                href="https://www.artstation.com/labhijits"
                target="_blank"
                class="button"
                >Artstation</a
              >
            </div>
          </div>
          <div
            class="column"
            style="display: flex; justify-content: center; align-items: center"
          >
            <figure>
              <g-image
                src="~/assets/img/pro.png"
                class="intro-img"
                width="300"
              />
              <figcaption>Pixel version of me</figcaption>
            </figure>
          </div>
        </div>
      </header>
      <footer>
        <p>Made by Abhijit Leihaorambam(me;)</p>
      </footer>
    </div>
  </Layout>
</template>



<script>
import Header from "../components/Header.vue";
export default {
  components: { Header },
  metaInfo: {
    title: "Home",
  },
};
</script>

<style lang="scss" >
@import "~/assets/img/Sass/colors.scss";

figcaption {
  font-size: 15px;
  text-align: start;
  margin-top: 10px;
}
footer {
  text-align: center;
}

.button {
  border: 2px solid black;
  text-decoration: none;
  color: black;
  background-color: inherit;
  padding: 5px 5px;
  margin-top: 10px;
  margin-right: 6px;
  display: inline-block;
  border-radius: 5px;
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
}
.button:hover {
  background-color: $oldlavender;
  color: white;
}

.home-links {
  a {
    margin: 0;
    color: $darkliver;
  }
}
h1 {
  font-size: 50px;
  line-height: 130%;
}

p {
  line-height: 150%;
}

h1 h2 {
  font-weight: normal;
}

img {
  max-width: 100%;
}
.intro-img {
  box-shadow: 1px 2px 30px rgba(0, 0, 0, 0.3);
  // margin-top: 30%;
}
.main-body {
  // padding-right: 5%;
  // padding-left: 5%;
  padding-top: 2%;
  width: 100%;
  margin: 0;
}

@media only screen and (min-width: 601px) {
  h1 {
    font-size: 60px;
    line-height: 130%;
  }
}

/* If the screen size is 600px or less, set the font-size of <div> to 30px */
@media only screen and (max-width: 600px) {
  h1 {
    font-size: 35px;
    line-height: 130%;
  }
}

header {
  top: -32px;
  position: relative;
  margin-bottom: 100px;
  background-color: $champangepink;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -45px;
  // padding-left: 50px;
  padding-top: 10px;
}
</style>
