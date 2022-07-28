<template>
  <Layout id="app">
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
                      title="Instagram"
                    >
                      <a class="fa-brands fa-instagram fa-2x"></a>
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="https://www.artstation.com/labhijits"
                      target="_blank"
                      title="Artstation"
                    >
                      <a class="fa-brands fa-artstation fa-2x"></a>
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="https://twitter.com/leihaorambam"
                      target="_blank"
                      title="Twitter"
                    >
                      <a class="fa-brands fa-twitter fa-2x"></a>
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="https://github.com/AbhijitL"
                      target="_blank"
                      title="Github"
                    >
                      <a class="fa-brands fa-github fa-2x"></a>
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="https://www.youtube.com/channel/UC3MOEDdCSSyfCvmUrtln0Cg"
                      target="_blank"
                      title="Youtube"
                    >
                      <a class="fa-brands fa-youtube fa-2x"></a>
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="https://myanimelist.net/profile/ggloll"
                      target="_blank"
                      title="MyAnimeList"
                    >
                      <a class="fa-brands fa-maxcdn fa-2x"></a>
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
                  <figcaption class="figcaption">It's me!!</figcaption>
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
          <h2 class="mt-4">My Project Repository</h2>
          <div class="container" v-if="initialLoaded">
            <repocard
              v-for="repo in repoInfo"
              v-bind:key="repo.name"
              :repoName="repo.name"
              :repoDescription="repo.description"
              @selected="openRep"
            />
          </div>
          <hr class="my-4" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import axios from "axios";
import Repocard from "@/components/RepoCard";
import Card from "@/components/Card.vue";
import Skills from "@/components/SkillsCard.vue";
const baseGithubApi = "https://api.github.com/users";
const githubApiParams = "repos?sort=created&direction=desc&per_page=30";

export default {
  name: "App",
  data() {
    return {
      user: "AbhijitL", // github username
      initialLoaded: false,
      repoInfo: [],
      page: 1,
    };
  },
  components: {
    Card,
    Skills,
    Repocard,
  },
  metaInfo() {
    return {
      title: "Home",
    };
  },
  methods: {
    getRepos: async function (user) {
      if (user.trim() === "") return;
      this.initialLoaded = false;
      this.repoInfo = [];
      this.page = 1;
      await axios
        .get(`${baseGithubApi}/${user}/${githubApiParams}`)
        .then((res) =>
          res.data.forEach((repo) => {
            this.repoInfo.push({
              name: repo.name,
              language: repo.language,
              description: repo.description,
              starCount: repo.stargazers_count,
              forkCount: repo.forks_count,
              dateCreated: repo.created_at,
            });
          })
        );
      this.user = "AbhijitL";
      this.initialLoaded = true;
    },
    openRep: function (repoName) {
      let route = `https://github.com/${this.user}/${repoName}`;
      console.log(route);
      window.open(route);
    },
  },
  mounted: function () {
    this.getRepos("AbhijitL");
  },
};
</script>


<style>
.col {
  align-self: center;
  padding: 5px;
}

.figcaption {
  padding-top: 5px;
}

.card {
  padding: 10px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
}

.my_img {
  box-shadow: 1px 2px 30px rgba(0, 0, 0, 0.3);
  padding: 5px;
}

ul li {
  list-style: none;
}
</style>
