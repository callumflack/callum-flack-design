module.exports = {
  mode: "universal",

  head: {
    title: "Callum Flack digital design & development",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        name: "google-site-verification",
        content: "HN9v-wB-PoQjHk1CGpr5YVG9VUNrcOaOjHACfG3SSSI"
      },
      {
        /* pinterest */
        name: "p:domain_verify",
        content: "8280c00ce54aef1d74f05dc38cd9fb91"
      },
      {
        hid: "description",
        name: "description",
        content: "Callum Flack Design & Development—Cairns, Australia"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary"
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@callumflack"
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "@callumflack"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
    /* script: [{ src: "./javascript/intersection-observer.js" }] */
  },

  /* loading: { color: "#151515" }, */
  /* loading: "~/components/loading.vue", */
  loading: false,

  css: ["~/assets/styles/application.css"],

  /*
    You cannot use path aliases here (~ and @), you need to use relative or absolute paths. So it must be a dot!
    https://github.com/nuxt-community/style-resources-module
    UPDATE: unsure this works at all with CSS…
  */
  /* styleResources: {
    css: ["./assets/styles/variables-dynamic.css", "./assets/styles/variables.css"]
  }, */

  plugins: [
    "~/plugins/vue-headroom",
    "~/plugins/vue-moment",
    "@/plugins/v-lazy-image",
    { src: "~/plugins/intersection-observer", ssr: false}
    /* { src: "@/plugins/v-lazy-image", ssr: true }, */
    /*{ src: "~/plugins/vue-slick", ssr: false },*/
  ],

  /* "@nuxtjs/style-resources" */
  /* "nuxt-purgecss", */
  modules: [
    "nuxtent",
    ["@nuxtjs/google-tag-manager", { id: "GTM-KT9HZJ8" }]
  ],

  /* purgeCSS: {
    mode: "postcss"
  }, */

  /* axios: {
    credentials: false
  }, */

  generate: {
    routes: [
      // You shouldn't need to include any content routes inside generate.routes
      // as nuxtent handles this for you:
      // https://github.com/nuxt-community/nuxtent-module/issues/104
      "/",
      "/about",
      "/blog",
      "/projects",
      "/the-littoral-line"
    ]
  },

  router: {
    middleware: "currentPage",
    /* https://github.com/nuxt/nuxt.js/issues/2738#issuecomment-372007743 */
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        let position = {};
        if (to.matched.length < 2) {
          position = { x: 0, y: 0 };
        } else if (
          to.matched.some(
            r => r.components.default.options.scrollToTop
          )
        ) {
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
    /* vendor: ["intersection-observer"], */
    /* https://www.evernote.com/l/ACw94CODEoJCEbgqo-RVrNisxAfsQdTW9Ck */
    /* postcss: {
      plugins: {},
      preset: { stage: 0 }
    }, */
    /*
      Get postcss syntax in single page component styles
      Requires <style lang="postcss">
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
