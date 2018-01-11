<template lang="pug">
  header.Navbar
    .Container
      .Space
        h3.Title(v-if="title")
          nuxt-link(:to="link", v-html="title")
        h1.Text(v-if="massive", v-html="massive")
        //- p.Text(v-if="lede", v-html="lede")
</template>

<script>
export default {
  name: "page-title",
  props: {
    section: String,
    massive: String,
    title: String,
    lede: String,
    link: String
  }
};
</script>

<style scoped>
@import "../assets/styles/vars.css";

.Navbar .Space {
  @media (--small-viewport) {
    width: 50%;
  }
}

.nuxt-link-active {
}

.nuxt-link-exact-active {
}
</style>

