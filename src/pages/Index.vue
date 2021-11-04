<template>
  <Layout>
    <div class="main-body">
      <header>
        <vs-row justify="space-around" align="center" direction="row">
          <vs-col w="6">
            <h1>
              Hi, I'm <br />
              Abhijit Leihaorambam
            </h1>
            <ul>
              <li>_3DModeler</li>
              <li>_Programmer</li>
            </ul>
            <a
              href="https://www.instagram.com/labhijits/"
              target="_blank"
              class="button"
              >Instagram</a
            >
          </vs-col>
          <figure>
            <g-image src="~/assets/img/pro.png" class="intro-img" width="300" />
            <figcaption>Pixel version of me</figcaption>
          </figure>
        </vs-row>
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
  text-align: center;
  margin-top: 10px;
}
footer {
  text-align: center;
}

.button {
  border: 2px solid black;
  text-decoration: none;
  color: black;
  padding: 5px 5px;
  // margin-top: 40px;
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
    font-size: 40px;
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
}
</style>
