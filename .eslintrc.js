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
    "vue/no-unused-vars": ["warn"],
    "vue/require-prop-types": 0,
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // https://github.com/prettier/eslint-plugin-prettier/issues/94
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 20,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
};
