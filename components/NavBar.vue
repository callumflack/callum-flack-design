<template lang="pug">
  .Navbar
    .Navbar-inner.Meta.u-flexJustifyBetween.u-flexAlignItemsBaseline
      div
        nuxt-link(to='/' @click.native="hideNav") 
      div
        a(href="#", @click.prevent="handleNavToggle")
          span.icon.u-marginR2
            svg(xmlns="http://www.w3.org/2000/svg", viewbox="0 0 16 16", height="16", width="16", v-if="isVisible")
              rect(y="7.5", width="16", height="2", transform="translate(-3.31 8) rotate(-45)")
              rect(y="7.5", width="16", height="2", transform="translate(8 -3.31) rotate(45)")
            svg(xmlns="http://www.w3.org/2000/svg", viewbox="0 0 16 16", height="16", width="16", v-else)
              rect(y="4.5", width="16", height="2")
              rect(y="10.5", width="16", height="2")
          | Menu
</template>


<script scoped>
export default {
  name: "nav-top-alt",
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
  z-index: 99;

  @media (--small-viewport) {
    /*padding-top: 2.25rem;*/
  }

  &.hidden {
    opacity: 0;
    transform: translateY(-100%);
    transition: opacity var(--transition-duration),
      transform 250ms var(--transition-duration);
  }
}

.Navbar-inner {
  display: flex;
  padding-bottom: 12px;
  padding: 1.2rem 1.5rem 1.25rem;
  padding: 2rem 2.5rem 2.1rem;
}

.Navbar-inner ~ hr {
  /* height: 2px; */
  transform: translateY(1px);
  transform: initial;
}

.-btn {
  background: 0 0;
  border: none;
  cursor: pointer;
  -webkit-appearance: none;
  transition: color 400ms ease, background-color 400ms ease, border-color 400ms ease;

  &:focus {
    outline: none;
  }
}

.icon-wrap {
  cursor: pointer;
  display: inline-block;
  margin: -20px;
  padding: 20px;
}

.icon {
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  position: relative;
  text-align: center;
  /* theme */
  /* height: 9.5px;
  width: 16px; */
  transform: translateY(3px);

  @media (--viewport-small) {
    transform: translateY(1px);
  }
}

.icon svg {
  fill: currentColor;
  transition: fill 400ms ease;
}

.nuxt-link-active {
}

.nuxt-link-exact-active {
}
</style>
