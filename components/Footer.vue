<template lang="pug">
  footer.footer(role="contentinfo")
    c-nav
</template>

<script>
import NavToggle from "~/components/NavToggle.vue";
import Nav from "~/components/Nav.vue";

export default {
  components: {
    "c-toggle": NavToggle,
    "c-nav": Nav
  },
  computed: {
    currentPageClass: function() {
      return `page-${this.$store.state.currentPage}`;
    }
  }
};
</script>

<style lang="postcss">
@import "../assets/styles/variables.css";

.footer {
  /* align-items: flex-end; */
  /* display: flex; */
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
</style>
