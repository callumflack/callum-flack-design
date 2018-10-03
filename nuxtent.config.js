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
      "posts",
      {
        page: "/_slug",
        permalink: "/blog/:slug",
        isPost: true,
        generate: ["get", "getAll"]
      }
    ],
    [
      "newsletter",
      {
        page: "/_slug",
        permalink: "/the-littoral-line/:slug",
        isPost: false,
        generate: ["get", "getAll"]
      }
    ]
  ],

  api: function(isStatic) {
    return { browserBaseURL: isStatic ? "https://callumflack.design" : "" };
  }
};
