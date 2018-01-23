<template lang="pug">
  .masthead
    .container
      .block--masthead
        h3.title(v-if="title")
          nuxt-link(:to="link", v-html="title")
        h1.text(v-if="lede", v-html="lede")
</template>

<script>
export default {
  name: "page-title",
  props: {
    title: String,
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
}

.nuxt-link-active {
}

.nuxt-link-exact-active {
}
</style>
