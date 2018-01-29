<template lang="pug">
  .masthead
    .container
      .block--masthead
        h1.title(v-if="heading")
          nuxt-link(:to="link", v-html="heading")
        h2.text(v-if="lede", v-html="lede")
</template>

<script>
export default {
  name: "page-heading",
  props: {
    heading: String,
    lede: String,
    link: String
  }
};
</script>

<style scoped>
@import "../assets/styles/vars.css";

.masthead .block--masthead {
  @media (--small-viewport) {
    width: 50%;
  }
}

.title + .text {
  margin: 0;
  width: auto;
}

.nuxt-link-active {
}

.nuxt-link-exact-active {
}
</style>
