module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
    // parser: "vue-eslint-parser"
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    // "prettier/vue",
    // "plugin:prettier/recommended"
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    "vue/no-unused-vars": ["warn"],
    "vue/require-prop-types": 0,
    "vue/require-default-prop": 0,
    "vue/no-v-html": 0,
    "vue/no-unused-components": ["warn"], // for vue-moment!
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // conflicts with prettier
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off",
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
