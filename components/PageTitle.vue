<template lang="pug">
header.Navbar
  .Column
    .Container
      .Inner
        .Space
          h3.Title(v-if="title", v-html="title")
          h1.Massive.SubSpace(v-if="massive", v-html="massive")
          p.Subtitle.SubSpace(v-if="lede", v-html="lede")
</template>

<script>
export default {
  name: "page-title",
  components: {},
  props: {
    section: String,
    massive: String,
    title: String,
    lede: String
  }
};
</script>

<style scoped>
@import "../assets/styles/vars.css";

.Space {
  margin-bottom: 0;

  @media (--small-viewport) {
    margin-bottom: var(--s2);
  }
}

.SubSpace {
  margin-top: var(--s3);

  @media (--small-viewport) {
    margin-top: var(--s4);
  }
}

.Navbar {
  background-color: transparent;
  opacity: 1;
  position: relative;
  transform: translateY(0);
  transition: opacity var(--transition-duration),
    transform 250ms var(--transition-duration);
  width: 100%;
  z-index: 1;

  &.hidden {
    opacity: 0;
    transform: translateY(-100%);
    transition: opacity var(--transition-duration),
      transform 250ms var(--transition-duration);
  }
}

.Navbar a {
  white-space: initial !important;
  z-index: 99;
}

.nuxt-link-active {
}

.nuxt-link-exact-active {
}
</style>

