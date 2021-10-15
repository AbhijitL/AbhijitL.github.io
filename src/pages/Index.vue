<template>
  <Layout>
    <div class="main-body">
      <vs-row justify="space-between" align="center" direction="row">
        <vs-col w="2">
          <h1>
            Hi, I'm <br />
            Abhijit Leihaorambam
          </h1>
          <ul>
            <li>_3DModeler</li>
            <li>_Programmer</li>
          </ul>
          <vs-button
            href="https://www.instagram.com/labhijits/"
            blank
            icon
            color="twitter"
          >
            <i class="bx bxl-facebook-square"></i> Instagram
          </vs-button>
        </vs-col>
        <g-image src="~/assets/img/pro.png" class="intro-img" width="300" />
      </vs-row>
    </div>
  </Layout>
</template>



<script>
export default {
  metaInfo: {
    title: "Home",
  },
};
</script>

<style>
.home-links a {
  margin: 0;
}
h1 {
  font-size: 50px;
  line-height: 130%;
}
.H1 h1 {
  text-size-adjust: 40px;
}

h2 {
  font-size: 30px;
  line-height: 130%;
}
p {
  line-height: 150%;
}

h1 h2 {
  font-weight: normal;
}

.intro-img {
  box-shadow: 1px 2px 30px rgba(0, 0, 0, 0.3);
  /* margin-right: 20%; */
}
.main-body {
  padding-right: 15%;
  padding-left: 15%;
}
</style>
