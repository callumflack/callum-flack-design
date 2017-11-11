// https://github.com/vuejs/eslint-plugin-vue
module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:vue/recommended"],
  rules: {
    "no-unused-vars": ["warn"]
  },
  globals: {}
};
