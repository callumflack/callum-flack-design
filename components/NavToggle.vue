<template lang="pug">
.toggle
  .u-posRelative
    .toggle-logo
      .title
        a(href="#", @click.prevent="handleNavToggle")
          span.pb Patter–
          span.pb.align nworks
        
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

.pb {
  display: block;
  font-size: 1.05em;
  line-height: 1.3;
  /* transform: translateX(500px); */
}

.align {
  padding-left: 0.95em;
  padding-left: 1.333em;
  padding-left: 1.75em;
  padding-left: 1.2em;
  padding-left: 1.175em;
  padding-left: 0.8em;
  padding-left: 0.7em;
  /* transform: translateY(-0.333em); */
  /* transform: translateY(-11px); */
  /* transform: translateY(-24px); */

  @media (max-width: 512px) {
    padding-left: 0.66em;
    transform: translateY(-7px);
  }
}

.toggle {
  left: calc(0.5 * var(--grid-gutter));
  position: fixed;
  top: calc(0.9 * var(--grid-gutter));
  z-index: 100;

  @media (--small-viewport) {
    left: calc(1 * var(--grid-gutter));
  }

  @media (--large-viewport) {
    top: calc(1.8 * var(--grid-gutter));
  }

  @media (min-width: 1488px) {
    left: 5vw;
  }

  @media (min-width: 1648px) {
    top: var(--s7);
  }

  @media (min-width: 1840px) {
    left: 12.5vw;
  }
}

.toggle-logo {
  position: relative;
  display: inline-block;
}

.nuxt-link-active {
}

.nuxt-link-exact-active {
}
</style>
