const c1 = () => import(/* webpackChunkName: "page--src-templates-blog-post-vue" */ "D:\\Web\\MySite_abhijitl.github.io\\AbhijitL.github.io\\src\\templates\\BlogPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-success-vue" */ "D:\\Web\\MySite_abhijitl.github.io\\AbhijitL.github.io\\src\\pages\\Success.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "D:\\Web\\MySite_abhijitl.github.io\\AbhijitL.github.io\\src\\pages\\Contact.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-blog-vue" */ "D:\\Web\\MySite_abhijitl.github.io\\AbhijitL.github.io\\src\\pages\\Blog.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\Web\\MySite_abhijitl.github.io\\AbhijitL.github.io\\src\\pages\\About.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "D:\\Web\\MySite_abhijitl.github.io\\AbhijitL.github.io\\src\\pages\\404.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\Web\\MySite_abhijitl.github.io\\AbhijitL.github.io\\src\\pages\\Index.vue")

export default [
  {
    path: "/blog/:title/",
    component: c1
  },
  {
    path: "/success/",
    component: c2
  },
  {
    path: "/contact/",
    component: c3
  },
  {
    path: "/blog/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
