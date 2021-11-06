// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vue from 'vue'
import VueDisqus from 'vue-disqus'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '../src/styles.scss'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
  })

  Vue.component('Layout', DefaultLayout)
  Vue.use(Buefy, {
    defaultIconPack: 'fas' // Font Awesome Solid
  })
  Vue.use(VueDisqus)
}
