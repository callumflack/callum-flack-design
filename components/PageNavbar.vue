<template lang="pug">
header.Navbar
  .Column
    .Container
      .Inner
        .Space
          h1.Title.u-marginT0(v-html="title")
          p.Massive(v-if="massive", v-html="massive")
          p.Subtitle.u-marginT3(v-if="lede") {{ lede }}
</template>


<script scoped>
import Logo from "~/components/Logo.vue";

export default {
  name: "page-navbar",
  components: {
    "c-logo": Logo
  },
  props: {
    massive: String,
    title: String,
    lede: String
  },
  computed: {
    isVisible: function() {
      return this.$store.state.isMobileNavVisible;
    }
  },

  methods: {
    handleNavToggle() {
      this.$store.commit("SET_MODAL_VISIBILITY", !this.$store.state.isMobileNavVisible);
    },

    hideNav() {
      this.$store.commit("SET_MODAL_VISIBILITY", false);
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/vars.css";

.Navbar {
  background-color: transparent;
  opacity: 1;
  position: relative;
  transform: translateY(0);
  transition: opacity var(--transition-duration),
    transform 250ms var(--transition-duration);
  width: 100%;
  z-index: 1;

  &.hidden {
    opacity: 0;
    transform: translateY(-100%);
    transition: opacity var(--transition-duration),
      transform 250ms var(--transition-duration);
  }
}

.Navbar a {
  white-space: initial !important;
  z-index: 99;
}

.nuxt-link-active {
}

.nuxt-link-exact-active {
}
</style>
