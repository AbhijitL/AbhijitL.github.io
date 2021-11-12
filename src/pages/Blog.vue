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
                <g-link
                  v-for="post in $page.allPost.edges"
                  v-bind:key="post.node.id"
                  :to="post.node.path"
                >
                  <g-image :src="post.node.thumbnail" style="width: 10rem" />
                  {{ post.node.title }}
                  on {{ post.node.date }}
                </g-link>
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
</style>