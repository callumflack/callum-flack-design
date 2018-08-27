/* eslint-disable */

module.exports = {
  map: true,
  plugins: {
    "postcss-easy-import": {},
    "postcss-mixins": {},
    /* "postcss-custom-selectors": {},
    "postcss-nesting": {},
    autoprefixer: {},
    "postcss-custom-media": {}, */
    "postcss-discard-comments": {},
    "postcss-preset-env": {
      stage: 0,
      features: {
        /* "custom-properties": {
          variables: require("./assets/styles/variables.css")
        } */
        "custom-properties": false
      }
    }
  }
};
