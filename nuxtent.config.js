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
      "posts",
      {
        page: "/posts/_slug",
        permalink: "/blog/:slug",
        isPost: true,
        generate: ["get", "getAll"]
      }
    ]
  ],

  api: function(isStatic) {
    return { browserBaseURL: isStatic ? "https://v6.callumflack.design" : "" };
  }
};
