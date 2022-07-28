// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'AbhijitL',
  siteUrl: 'https://abhijitl.me',
  icon: 'src/favicon.png',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/blog/**/*.md',
      }
    }
  ],
  templates: {
    Blog: [{
      path: '/blog/:title',
      component: './src/templates/BlogPost.vue'
    }]
  }
}
