import "./styles/application.css";

/* https://saber.land/docs/manipulating-head.html#set-default-values */
export default ({ setHead }) => {
  setHead({
    htmlAttrs: { lang: "en" },
    meta: [
      {
        name: "google-site-verification",
        content: "HN9v-wB-PoQjHk1CGpr5YVG9VUNrcOaOjHACfG3SSSI",
      },
      {
        // pinterest
        name: "p:domain_verify",
        content: "8280c00ce54aef1d74f05dc38cd9fb91",
      },
      // Twitter card
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@callumflack" },
      {
        name: "twitter:image",
        content: "https://avatars2.githubusercontent.com/u/749885?s=460&v=4",
      },
      { name: "twitter:image:alt", content: "Callum Flack" },
    ],
    // favicon
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    // polyfill
    script: [
      { src: "https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver" },
    ],
  });
};
