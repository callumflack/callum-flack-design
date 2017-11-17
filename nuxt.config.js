module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Patternworks",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "C.F." }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#1f1f1f" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  // https://nuxtjs.org/api/configuration-build#postcss
  // nb: cssnext already available by default.
  postcss: [],
  css: [
    "~/assets/styles/application.css"
    // '~assets/styles2/hiq.css'
  ],
  plugins: [],
  modules: ["nuxtent"],
  axios: {
    credentials: false
  },
  generate: {
    routes: [
      "/",
      "/about",
      "/work",
      "/oceanblue-living",
      "/primary-healthcare-network",
      "/the-substation",
      "/ward6"
    ]
  },
  router: {
    // this errors, WTF.
    // async scrolling docs look diff now:
    // https://router.vuejs.org/en/advanced/scroll-behavior.html
    // async scrollBehavior (to, from, savedPosition) {
    //   setTimeout(() => {
    //     // Pages using the _page.vue file share a savedPosition as they
    //     // are all the same page to nuxt
    //     // This is undesired so to scoll to top instead
    //     if (to.matched[0] && to.matched[0].name === 'page') {
    //       return window.scrollTo(0, 0)
    //     }
    //     const scrollTo = Object.assign({
    //       x: 0,
    //       y: 0
    //     }, savedPosition)
    //     window.scrollTo(scrollTo.x, scrollTo.y)
    //   }, 400)
    // }
  }
};
