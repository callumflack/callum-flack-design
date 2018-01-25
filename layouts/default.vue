<template lang="pug">
  div(:class="currentPageClass")
    c-toggle
    .page
      nuxt
    .footer-spacer
    footer.footer(role="contentinfo")
      c-nav
    c-nav-toggled(role="navigation")
</template>

<script>
import NavToggle from "~/components/NavToggle.vue";
import NavToggled from "~/components/NavToggled.vue";
import Nav from "~/components/Nav.vue";

export default {
  components: {
    "c-toggle": NavToggle,
    "c-nav-toggled": NavToggled,
    "c-nav": Nav
  },
  computed: {
    currentPageClass: function() {
      return `page-${this.$store.state.currentPage}`;
    }
  }
};
</script>

<style>
@import "../assets/styles/vars.css";

.page {
  background-color: var(--color-bg);
  min-height: 100vh;
  position: relative;
  z-index: 3;
}

.footer-spacer {
  height: 100vh;
}

.footer {
  align-items: flex-end;
  background-color: var(--color-metal);
  display: flex;
  height: 100vh;
  opacity: 1;
  left: 0;
  position: fixed;
  top: 0;
  transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  width: 100vw;
  z-index: 1;
  -webkit-backface-visibility: hidden;
}

.footer > * {
  width: 100%;
}

.page-enter-active {
  /* background-color: var(--color-bg); */
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
