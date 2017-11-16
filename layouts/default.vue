<template lang="pug">
  div
    c-navbar
    c-navbar-fixed
    c-nav-toggled
    nuxt
    footer
      c-nav
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import NavBarFixed from "~/components/NavBarFixed.vue";
import NavToggled from "~/components/NavToggled.vue";
import Nav from "~/components/Nav.vue";

export default {
  components: {
    "c-navbar": NavBar,
    "c-navbar-fixed": NavBarFixed,
    "c-nav-toggled": NavToggled,
    "c-nav": Nav
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
