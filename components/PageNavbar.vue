<template lang="pug">
.Navbar
  .Container
    .Block--halfSandwich
      h1.Title.u-textCenter
        a.Button.Button--transparent(href="#", @click.prevent="handleNavToggle")
          span.icon.icon-logo
            c-logo
          span(v-html="title")
</template>


<script scoped>
import Logo from "~/components/Logo.vue";

export default {
  name: "page-navbar",
  components: {
    "c-logo": Logo
  },
  props: {
    title: String
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
