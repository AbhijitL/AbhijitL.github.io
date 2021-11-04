<template>
  <Layout>
    <vs-row justify="center">
      <Main class="blog">
        <vs-row justify="center">
          <h1>Blog Posts</h1>
        </vs-row>
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
      </Main>
    </vs-row>
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
</style>