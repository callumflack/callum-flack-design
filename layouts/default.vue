<template lang="pug">
  div(:class="currentPageClass")
    NavToggle
    nuxt
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
  z-index: 3;
} */

/* .footer-spacer {
  display: none;
  height: 100vh;

  @media (--md) {
    display: block;
  }
} */

.page-enter-active {
  /* background-color: var(--c-bg); */
  /* height: 100vh; */
  /* opacity: 1; */
  transition: opacity 0.15s;
  /* width: 100vw; */
  /* z-index: 999; */
}
.page-leave-active {
  transition: opacity 0.15s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
