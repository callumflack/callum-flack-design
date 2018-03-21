<template lang="pug">
  div(:class="currentPageClass")
    //- c-toggle
    c-menu
    //- .page
    nuxt
    //- .footer-spacer
      //- c-footer
    //- c-nav-toggled(role="navigation")
</template>

<script>
import NavToggle from "~/components/NavToggle.vue";
import NavToggled from "~/components/NavToggled.vue";
import Footer from "~/components/Footer.vue";
import Menu from "~/components/Menu.vue";

export default {
  components: {
    "c-toggle": NavToggle,
    "c-nav-toggled": NavToggled,
    "c-footer": Footer,
    "c-menu": Menu
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
  display: none;
  height: 100vh;

  @media (--md) {
    display: block;
  }
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
