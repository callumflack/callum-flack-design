<template lang="pug">
  div(:class="currentPageClass")
    c-toggle
    .page
      nuxt
    .footer-spacer
    c-footer
</template>

<script>
import NavToggle from "~/components/NavToggle.vue";
import Nav from "~/components/Nav.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    "c-toggle": NavToggle,
    "c-nav": Nav,
    "c-footer": Footer
  },
  computed: {
    currentPageClass: function() {
      return `page-${this.$store.state.currentPage}`;
    }
  }
};
</script>

<style>
@import "../assets/styles/variables.css";

.footer-spacer {
  height: 100vh;
}

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
