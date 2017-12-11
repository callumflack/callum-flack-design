const config = require("./config/config.js");

module.exports = {
  content: [
    [
      "pages",
      {
        page: "/_slug",
        permalink: "/:slug",
        isPost: false,
        generate: ["get"]
      }
    ],
    [
      "projects",
      {
        page: "/_slug",
        permalink: "/work/:slug",
        isPost: true,
        generate: ["get", "getAll"]
      }
    ]
  ],

  loading: "~/components/PageLoading.vue",

  api: {
    baseURL:
      process.env.NODE_ENV === "production" ? config.productionUrl : config.developmentUrl
  }
};
