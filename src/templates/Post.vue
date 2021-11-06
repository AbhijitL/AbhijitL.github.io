<template>
  <Layout>
    <main>
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="column">
              <h1 class="blog-title" v-html="$page.post.title" />
            </div>
            <div class="column">
              <h3 class="blog-author">
                By {{ $page.post.author }} on {{ $page.post.date }}
              </h3>
            </div>
            <div class="columns is-vcentered">
              <div class="column">
                <g-image
                  :src="$page.post.thumbnail"
                  quality="70"
                  class="center"
                  style="width: auto; margin-left: auto; margin-right: auto"
                />
              </div>
            </div>
            <div class="box">
              <div class="text-style">
                <div class="content" v-html="$page.post.content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Disqus
      shortname="abhijitl"
      :identifier="$page.post.title"
      style="width: 80%; margin: 0 auto"
    />
  </Layout>
</template>

<page-query>
query Post ($path: String!){
  post: post (path: $path){
    id
    title
    author
    thumbnail
    date (format: "D MMMM, YYYY")
    content
    timeToRead
  }
}
</page-query>

<style lang = "scss">
h1.blog-title {
  text-align: center;
  font-weight: bold;
}

h3.blog-author {
  text-align: center;
}

.text-style {
  text-align: justify;
}

main {
  width: 90%;
  margin: 0 auto;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>