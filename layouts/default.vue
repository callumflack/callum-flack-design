<template lang="pug">
  div(:class="currentPageClass")
    //- c-navbar
    //- c-navbar-fixed
    c-nav-toggled(role="navigation")
    nuxt
    footer(role="contentinfo")
      c-nav

</template>

<script>
import NavBar from "~/components/NavBar.vue";
import NavBarFixed from "~/components/NavBarFixed.vue";
import NavToggled from "~/components/NavToggled.vue";
import Nav from "~/components/NavAlt.vue";

export default {
  components: {
    "c-navbar": NavBar,
    "c-navbar-fixed": NavBarFixed,
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
/*.page-enter-active,
.page-leave-active {
  background-color: black;
  height: 100vh;
  transition: opacity 4s;
  width: 100vw;
  z-index: 999;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}*/
</style>
