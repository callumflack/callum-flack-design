<template lang="pug">
  div(:class="currentPageClass")
    c-toggle
    c-nav-toggled(role="navigation")
    .Page
      nuxt
    //- .PageSpacer
    .FooterSpacer
    footer.Footer(role="contentinfo")
      c-nav

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

.Page {
  background-color: var(--color-bg);
  padding-bottom: 50vh;
  position: relative;
  z-index: 3;
}

.PageSpacer {
  background: linear-gradient(to bottom, #fdfdfd 0%, transparent 100%);
  height: 25vh;
  position: relative;
  z-index: 3;
}

.FooterSpacer {
  height: 75vh;
  height: 100vh;
}

.Footer {
  /* background: linear-gradient(180deg, #fdfdfd 0%, #f3f3f3 100%); */
  /* background: linear-gradient(180deg, #fdfdfd 0%, #eee 100%); */
  /* background-color: #00b4ff;
  background-color: #47bbff;*/
  /* background: linear-gradient(180deg, #fdfdfd 0%, rgba(71, 187, 255, 0.25) 100%); */
  /* background: linear-gradient(180deg, #fdfdfd 0%, #d5d5d5 90%); */
  background-color: var(--color-metal);
  /* background-color: transparent; */

  align-items: flex-end;
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

.Footer > * {
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
