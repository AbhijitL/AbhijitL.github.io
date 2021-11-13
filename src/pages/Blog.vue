<template>
  <Layout>
    <Main class="blog" style="text-align: center">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="column">
              <div class="column">
                <h1>Blog Posts</h1>
              </div>
            </div>
            <div class="column">
              <nav>
                <div
                  class="box"
                  v-for="post in $page.allPost.edges"
                  v-bind:key="post.node.id"
                  :to="post.node.path"
                >
                  <div class="columns is-vcentered">
                    <div class="column is-one-third">
                      <g-image
                        :src="post.node.thumbnail"
                        style="width: 10rem"
                      />
                    </div>
                    <div class="column">
                      <g-link v-bind:key="post.node.id" :to="post.node.path">
                        <h2>
                          {{ post.node.title }} on {{ post.node.date }}
                        </h2></g-link
                      >
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Main>
  </Layout>
</template>

<page-query>
query{
    allPost{
        totalCount
        edges{
            node{
                id
                title
                author
                thumbnail
                date (format: "D, MMMM, YYYY")
                content
                timeToRead
                path
            }
        }
    }
}
</page-query>

<style lang = "scss">
.blog {
  nav a {
    display: block;
    color: $darkliver;
    text-decoration: none;
  }
}

h1 {
  font-size: 44px;
  font-weight: bold;
}

h2 {
  font-size: 20px;
  font-weight: bold;
}
</style>