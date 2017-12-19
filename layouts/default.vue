<template lang="pug">
  div(:class="currentPageClass")
    c-toggle
    c-nav-toggled(role="navigation")
    nuxt
    footer.Footer(role="contentinfo")
      c-nav

</template>

<script>
import NavToggle from "~/components/NavToggle.vue";
import NavBar from "~/components/NavBar.vue";
import NavBarFixed from "~/components/NavBarFixed.vue";
import NavToggled from "~/components/NavToggled.vue";
import Nav from "~/components/NavAlt.vue";

export default {
  components: {
    "c-toggle": NavToggle,
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
@import "../assets/styles/vars.css";

.Footer {
  /* background-color: var(--color-bg); */
  /* border-top: 1px solid #e5e5e5; */
  /* margin-top: var(--s7); */
}

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
