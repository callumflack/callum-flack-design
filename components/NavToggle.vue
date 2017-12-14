<template lang="pug">
  .Toggle
    .Block--quarterTop
      h1.Title
        a.Button.Button--transparent.LineHeight(href="#", @click.prevent="handleNavToggle")
          span.icon.icon-logo
            c-logo
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
  right: var(--s4);
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
