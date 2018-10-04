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
    /* [
      "newsletter",
      {
        page: "/newsletter/_slug",
        permalink: "/the-littoral-line/:slug",
        isPost: false, // if true, `Error: Post in "/" does not have a date!`
        generate: ["get", "getAll"]
      }
    ] */
  ],

  api: function(isStatic) {
    return { browserBaseURL: isStatic ? "https://callumflack.design" : "" };
  }
};
