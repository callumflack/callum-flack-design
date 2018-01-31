<template lang="pug">
.toggle
  .toggle-logo
    a.icon-tap(href="#", @click.prevent="handleNavToggle")
      .icon.icon-logo
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 19"><path d="M47.61,14.66a2.15,2.15,0,1,0,2.13,2.13A2.14,2.14,0,0,0,47.61,14.66ZM9.29,0H0V.05a3.47,3.47,0,0,1,2,3.2V15.38a3.45,3.45,0,0,1-2,3.19v.06H8.14v-.06a3.42,3.42,0,0,1-2-3.19V9.93a16.46,16.46,0,0,0,2.16.13c4.58,0,6.63-2.08,6.63-5C15,1.7,12.13,0,9.29,0Zm-2,9.05A8.65,8.65,0,0,1,6.17,9V.88h.19a4.22,4.22,0,0,1,4.26,4.44C10.62,8.06,9.21,9.05,7.32,9.05ZM46,0H41.29V.05c1.41.54,2.12,1.63,1.43,3.44l-3.38,8.94L35.91,3.51c-.72-1.83-.08-2.9,1.41-3.46V0H28.91V.05c.91.54,1.73,1.68,2.74,4.1l.61,1.46-2.79,7L25.93,3.51C25.21,1.7,25.85.61,27.31.05V0H19V.05c.9.54,1.73,1.68,2.74,4.1L27.82,19h.11L32.8,7l4.92,12h.11l5.9-15.25A8.43,8.43,0,0,1,46,.05ZM18.08,14.66a2.15,2.15,0,1,0,2.13,2.13A2.14,2.14,0,0,0,18.08,14.66Z"/></svg>
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
    top: var(--s7);
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
