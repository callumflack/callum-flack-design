<template lang="pug">
  header.Navbar
    .container
      .block--navbar
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

.Navbar .block--navbar {
  @media (--small-viewport) {
    width: 50%;
  }
}

.title,
.text {
  margin: 0;
}

.nuxt-link-active {
}

.nuxt-link-exact-active {
}
</style>

