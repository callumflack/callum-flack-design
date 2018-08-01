/* eslint-disable */
module.exports = {
  map: true,
  plugins: {
    "postcss-easy-import": {},
    "postcss-preset-env": {
      stage: 0,
      features: ["css-nesting"]
    },
    "postcss-mixins": {}
  }
};
