<template lang="pug">
  div(:class="currentPageClass")
    c-toggle
    c-nav-toggled(role="navigation")
    nuxt.Page.SpaceBottom
    .FooterSpacer
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

.Page {
  background-color: #fdfdfd;
  position: relative;
  z-index: 3;
}

.FooterSpacer {
  background: linear-gradient(to bottom, #fdfdfd 0%, transparent 50%);
  height: 100vh;
  position: relative;
  z-index: 2;
}

.Footer {
  /* background: linear-gradient(180deg, #fdfdfd 0%, #f3f3f3 100%); */
  /* background: linear-gradient(180deg, #fdfdfd 0%, #eee 100%); */
  background-color: #00b4ff;
  background-color: #47bbff;
  background-color: var(--color-bg);
  /* border-top: 1px solid #e5e5e5; */
  /* margin-top: var(--s7); */

  display: flex;
  align-items: flex-end;

  /* background-image: url(/img/home/over-square.jpg); */
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* color: #fff; */
  opacity: 1;
  -webkit-backface-visibility: hidden;
  transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.Footer > * {
  width: 100%;
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
