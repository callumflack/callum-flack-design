<template lang="pug">
  div(:class="currentPageClass")
    NavToggle
    nuxt.Page
    .Container(:class="contentNavSpace")
    footer
      NavList
    NavToggled
</template>

<script>
import NavToggle from "~/components/NavToggle2.vue";
import NavToggled from "~/components/NavToggled.vue";
import NavList from "~/components/NavList.vue";

export default {
  components: {
    NavToggle,
    NavToggled,
    NavList
  },
  computed: {
    currentPageClass() {
      return `fs-scale-reset page-${this.$store.state.currentPage}`;
    },
    contentNavSpace() {
      return this.$route.name !== "interesting" && `b-pt4`;
    }
  }
};
</script>

<style lang="postcss">
@import "../assets/styles/variables.css";

/* .Page {
  background-color: var(--c-bg);
  min-height: 100vh;
  padding-top: var(--fixed-menu-height);
  position: relative;
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: 3;
} */

/* .footer-spacer {
  display: none;
  height: 100vh;

  @media (--md) {
    display: block;
  }
} */
</style>
