module.exports = {
  content: [
    [
      "pages",
      {
        page: "/pages/_slug",
        permalink: "/:slug",
        isPost: false,
        generate: ["get"]
      }
    ],
    [
      "projects",
      {
        page: "/projects/_slug",
        permalink: "/work/:slug",
        isPost: true,
        generate: ["get", "getAll"]
      }
    ],
    [
      "posts",
      {
        page: "/posts/_slug",
        permalink: "/blog/:slug",
        isPost: true,
        generate: ["get", "getAll"]
      }
    ],
    [
      "newsletter",
      {
        page: "/newsletter/_slug",
        permalink: "/interesting/:slug",
        isPost: true,
        generate: ["get", "getAll"]
      }
    ]
  ],

  api: function(isStatic) {
    return { browserBaseURL: isStatic ? "https://callumflack.design" : "" };
  }
};
