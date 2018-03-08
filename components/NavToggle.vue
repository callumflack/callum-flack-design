<template lang="pug">
.toggle
  .toggle-logo
    nuxt-link.icon-tap(to="/")
      .icon.title
        span.u-md-hidden Menu
        span.u-hidden.u-md-block.tracking C.F.
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
@import "../assets/styles/variables.css";

.toggle {
  position: fixed;
  right: calc(0.75 * var(--grid-gutter));
  /* top: calc(0.5 * var(--grid-gutter)); */
  bottom: calc(0.75 * var(--grid-gutter));
  transform: translate(0, -0.1em);
  z-index: 100;

  /* y */
  @media (--sm) {
    /* top: calc(1 * var(--grid-gutter)); */
    bottom: calc(1 * var(--grid-gutter));
  }
  @media (min-width: 1460px) {
    bottom: auto;
    top: var(--s-7);
  }

  /* x */
  @media (--sm) {
    right: calc(1 * var(--grid-gutter));
  }
  /*@media (min-width: 1136px) {*/
  @media (min-width: 1460px) {
    left: calc((100 - 90) * 0.5vw);
    right: auto;
  }
  @media (min-width: 1840px) {
    left: calc((100 - 66) * 0.5vw);
  }

  /* box-shadow on mobile */
  border-radius: 999px;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15), 0px 9px 50px 0px rgba(0, 0, 0, 0.1);

  @media (--md) {
    box-shadow: initial;
  }
}

/* don't display on mobile home page */
.page-index .toggle {
  display: none;

  @media (--md) {
    display: block;
  }
}

.toggle-logo {
  display: inline-block;
  position: relative;
  /* transform: translateX(-0.0125em); */
  /* transform: translate(0, 0.29em); */

  background-color: var(--c-bg);
  border: 1px solid currentColor;
  border-radius: 999px;
  padding: 9px 14px 7px 15px;

  @media (--md) {
    background-color: transparent;
    display: block;
    padding: 6px 11px 4px 12px;
  }
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

  @media (--sm) {
    height: 19px;
    width: 50px;
  }
}

.tracking {
  letter-spacing: 0.07em;
}
</style>
