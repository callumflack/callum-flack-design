module.exports = {
  head: {
    title: "Callum Flack digital design & development",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "google-site-verification",
        content: "HN9v-wB-PoQjHk1CGpr5YVG9VUNrcOaOjHACfG3SSSI"
      },
      {
        /* failing pinterest bullshit */
        name: "p: domain_verify",
        content: "8280c00ce54aef1d74f05dc38cd9fb91"
      },
      {
        hid: "description",
        name: "description",
        content: "Callum Flack digital design & development – Cairns, Australia"
      },
      { hid: "twitter:card", name: "twitter:card", content: "summary" },
      { hid: "twitter:site", name: "twitter:site", content: "@callumflack" },
      { hid: "twitter:creator", name: "twitter:creator", content: "@callumflack" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    /* script: [{ src: "./javascript/intersection-observer.js" }] */
  },

  /* loading: { color: "#151515" }, */
  /* loading: "~/components/loading.vue", */
  loading: false,

  css: ["~/assets/styles/application.css"],

  plugins: [
    "~/plugins/vue-moment"
    /*{ src: "~/plugins/vue-slick", ssr: false },
    "~/plugins/vue-fixed-header"*/
    /* {
      src: "~/plugins/v-lazy-image",
      ssr: false
    },
    {
      src: "~/plugins/intersection-observer",
      ssr: false
    } */
  ],

  modules: ["nuxtent", ["@nuxtjs/google-tag-manager", { id: "GTM-KT9HZJ8" }]],

  axios: {
    credentials: false
  },

  generate: {
    routes: [
      // You shouldn't need to include any content routes inside generate.routes
      // as nuxtent handles this for you:
      // https://github.com/nuxt-community/nuxtent-module/issues/104
      "/",
      "/about",
      "/blog",
      "/essays",
      "/projects",
      "/the-littoral-line",
      "404"
    ]
  },

  router: {
    middleware: "currentPage",
    // FYI: async scrolling docs look diff now:
    // https://router.vuejs.org/en/advanced/scroll-behavior.html
    // async scrollBehavior(to, from, savedPosition) {
    //   setTimeout(() => {
    //     if (to.matched[0] && to.matched[0].name === "page") {
    //       return window.scrollTo(0, 0);
    //     }
    //     const scrollTo = Object.assign(
    //       {
    //         x: 0,
    //         y: 0
    //       },
    //       savedPosition
    //     );
    //     window.scrollTo(scrollTo.x, scrollTo.y);
    //   }, 20);
    // },
    // https://github.com/nuxt/nuxt.js/issues/2738#issuecomment-372007743
    async scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        let position = {};
        if (to.matched.length < 2) {
          position = { x: 0, y: 0 };
        } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
          position = { x: 0, y: 0 };
        }
        if (to.hash) {
          position = { selector: to.hash };
        }
        return position;
      }
    }
  },

  build: {
    /*
      cssnext is available by default in Nuxt,
      but there's TWO different methods shown in the docs:
      https://nuxtjs.org/api/configuration-build#postcss
      https://nuxtjs.org/faq/postcss-plugins
      …and both FAIL to load, for e.g., postcss-mixins:
    
      postcss: [require("postcss-mixins")()]
    */
    /* postcss: {
      plugins: {
        "postcss-cssnext": {
          features: {
            customProperties: false
          }
        }
      }
    }, */
    /* styleResources FAILS: doesn't render custom props wrapped in custom media queries */
    /* styleResources: {
      scss: "./assets/styles/variables.css",
      options: {
        // See https://github.com/yenshih/style-resources-loader#options
        // Except `patterns` property
      }
    }, */
    /* vendor: ["intersection-observer"], */
    extend(config, ctx) {
      /* Run ESLINT on save */
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
