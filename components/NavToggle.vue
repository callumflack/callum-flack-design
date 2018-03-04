<template lang="pug">
.toggle
  .toggle-logo
    nuxt-link.icon-tap(to="/")
      .icon.title P.W.
</template>

<script scoped>
export default {
  name: "toggle",
  components: {},
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

.toggle {
  position: fixed;
  right: calc(0.5 * var(--grid-gutter));
  top: calc(0.5 * var(--grid-gutter));
  z-index: 100;

  /* y */
  @media (--small-viewport) {
    top: calc(1 * var(--grid-gutter));
  }
  @media (min-width: 1281px) {
    top: var(--s-7);
  }

  /* x */
  @media (--small-viewport) {
    right: calc(1 * var(--grid-gutter));
  }
  @media (min-width: 1136px) {
    left: calc((100 - 90) * 0.5vw);
    right: auto;
  }
  @media (min-width: 1840px) {
    left: calc((100 - 66) * 0.5vw);
  }
}

.toggle-logo {
  display: inline-block;
  position: relative;
  transform: translateX(-0.0125em);
  transform: translate(0, 0.29em);
}

.icon-tap {
  display: block;
  margin: calc(-0.5 * var(--grid-gutter));
}

.icon {
  padding: calc(0.5 * var(--grid-gutter));
}

/* .icon-logo, */
.icon-logo svg {
  height: calc(0.75 * 19px);
  width: calc(0.75 * 50px);

  @media (--small-viewport) {
    height: 19px;
    width: 50px;
  }
}
</style>
