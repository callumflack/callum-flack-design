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
    ],
    [
      "posts",
      {
        page: "/_slug",
        permalink: "/journal/:slug",
        isPost: true,
        generate: ["get", "getAll"]
      }
    ]
  ],

  api: function(isStatic) {
    return { browserBaseURL: isStatic ? "https://callumflack.design" : "" };
  }
};
