module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Patternworks – Digital design & development",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Patternworks – Digital design & development by Callum Flack – Cairns, Australia"
      },
      { hid: "twitter:card", name: "twitter:card", content: "summary" },
      { hid: "twitter:site", name: "twitter:site", content: "@callumflack" },
      { hid: "twitter:creator", name: "twitter:creator", content: "@callumflack" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress-bar color
  ** loading: { color: "#1f1f1f" },
  ** loading: "~/components/PageLoading.vue",
  */
  loading: { color: "#0a0a0a" },
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
    /*
      cssnext is available by default in Nuxt,
      but there's TWO different methods shown in the docs:
      https://nuxtjs.org/api/configuration-build#postcss
      https://nuxtjs.org/faq/postcss-plugins
      …and both FAIL to load postcss-mixins:

    postcss: {
      plugins: {
        "postcss-mixins": {}
      }
    }
    */
  },
  css: ["~/assets/styles/application.css"],
  plugins: [
    { src: "~/plugins/vue-slick", ssr: false },
    { src: "~plugins/ga.js", ssr: false }
  ],
  modules: [
    "nuxtent",
    ["@nuxtjs/google-tag-manager", { id: "GTM-TZ36J9" }]
  ],
  axios: {
    credentials: false
  },
  generate: {
    routes: [
      "/",
      "/about",
      "/work",
      "/work/oceanblue-living",
      "/work/oceanblue-boats",
      "/work/primary-healthcare-network",
      "/work/the-substation",
      "/work/raatsicc",
      "/work/album-registry",
      "/work/vj-ray",
      "/work/ward6",
      "/work/ward6-edetailers",
      "/journal",
      "/journal/designers-should-code"
    ]
  },
  router: {
    middleware: "currentPage",
    // FYI: async scrolling docs look diff now:
    // https://router.vuejs.org/en/advanced/scroll-behavior.html
    async scrollBehavior(to, from, savedPosition) {
      setTimeout(() => {
        // Pages using the _page.vue file share a savedPosition as they
        // are all the same page to nuxt
        // This is undesired so to scoll to top instead
        if (to.matched[0] && to.matched[0].name === "page") {
          return window.scrollTo(0, 0);
        }
        const scrollTo = Object.assign(
          {
            x: 0,
            y: 0
          },
          savedPosition
        );
        window.scrollTo(scrollTo.x, scrollTo.y);
      }, 100);
    }
  }
};
