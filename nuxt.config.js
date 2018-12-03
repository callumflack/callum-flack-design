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
        content: "Callum Flack Design & Development—Cairns, Australia"
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

  /* 
    You cannot use path aliases here (~ and @), you need to use relative or absolute paths. So it must be a dot!
    https://github.com/nuxt-community/style-resources-module
  */
  styleResources: {
    css: ["./assets/styles/variables.css", "./assets/styles/variables-dynamic.css"]
  },

  router: {
    middleware: "currentPage"
  },

  plugins: [
    "~/plugins/vue-moment"
    /*{ src: "~/plugins/vue-slick", ssr: false },*/
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

  build: {
    /* vendor: ["intersection-observer"], */
    /* https://www.evernote.com/l/ACw94CODEoJCEbgqo-RVrNisxAfsQdTW9Ck */
    /* postcss: {
      plugins: {},
      preset: { stage: 0 }
    }, */
    /* 
      Get postcss syntax in single page component styles
      Requires <style lang="postcss"
      https://github.com/nuxt/nuxt.js/issues/3231
    */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.postcss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "postcss-loader"
          }
        ]
      });
    }
  }
};
