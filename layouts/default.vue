<template>
  <div>
    <c-navbar />
    <c-navbarfixed />
    <nuxt/>
    <c-nav />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import NavBarFixed from "~/components/NavBarFixed.vue";
import Nav from "~/components/Nav.vue";

export default {
  components: {
    "c-navbar": NavBar,
    "c-navbarfixed": NavBarFixed,
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
