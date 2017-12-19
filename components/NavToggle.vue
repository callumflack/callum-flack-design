<template lang="pug">
  .Toggle
    .Block--quarterTop
      a.icon-wrapper(href="#", @click.prevent="handleNavToggle")
        span.icon.icon-toggle
          svg.u-colorWhite(
            xmlns="http://www.w3.org/2000/svg", 
            viewbox="0 0 32 32", 
            v-if="isVisible"
          )
            <rect x="-1" y="15" width="34" height="2" transform="translate(16 -6.63) rotate(45)"/>
            <rect x="-1" y="15" width="34" height="2" transform="translate(38.63 16) rotate(135)"/>
          svg(
            xmlns="http://www.w3.org/2000/svg", 
            viewbox="0 0 32 32", 
            v-if="!isVisible"
          )
            <rect y="10" width="32" height="2"/>
            <rect y="20" width="32" height="2"/>
</template>


<script scoped>
import Logo from "~/components/Logo.vue";

export default {
  name: "toggle",
  components: {
    "c-logo": Logo
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

.Toggle {
  position: fixed;
  right: 2rem;
  z-index: 999;

  @media (--medium-viewport) {
    right: var(--s4);
  }

  @media (--large-viewport) {
    right: var(--s5);
  }
}

.Toggle .Title {
  width: auto;
}

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
