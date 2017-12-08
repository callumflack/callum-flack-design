<template lang="pug">
  .Navbar
    .Navbar-inner.Meta.u-flexJustifyBetween.u-flexAlignItemsBaseline
      div
        nuxt-link(to='/' @click.native="hideNav") 
          span.icon.u-marginR2
            svg(xmlns="http://www.w3.org/2000/svg", viewbox="0 0 32 32", height="32", width="32")
              <rect y="15" width="32" height="2"/>
              <rect y="15" width="32" height="2" transform="translate(32 0) rotate(90)"/>
              <rect x="-1" y="15" width="34" height="2" transform="translate(16 -6.63) rotate(45)"/>
              <rect x="-1" y="15" width="34" height="2" transform="translate(38.63 16) rotate(135)"/>
      div
        a(href="#", @click.prevent="handleNavToggle")
          span.icon.u-marginR2
            svg(xmlns="http://www.w3.org/2000/svg", viewbox="0 0 32 32", height="32", width="32", v-if="isVisible")
              <rect x="-1" y="15" width="34" height="2" transform="translate(16 -6.63) rotate(45)"/>
              <rect x="-1" y="15" width="34" height="2" transform="translate(38.63 16) rotate(135)"/>
            svg(xmlns="http://www.w3.org/2000/svg", viewbox="0 0 32 32", height="32", width="32", v-else)
              <rect y="10" width="32" height="2"/>
              <rect y="20" width="32" height="2"/>
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
  position: fixed;
  transform: translateY(0);
  transition: opacity var(--transition-duration),
    transform 250ms var(--transition-duration);
  width: 100%;
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
  padding: 2rem 2.5rem 2.1rem;
  padding: 1.4rem 2rem 1.5rem;
  padding: 5rem;
  padding-bottom: 0;
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
  padding: 6px;
  position: relative;
  text-align: center;
  /* theme */
  /* height: 9.5px;
  width: 16px; */
  transform: translateY(0);

  /*background-color: var(--color-bg);
  height: 44px;
  width: 44px;*/

  @media (--viewport-small) {
    transform: translateY(0);
  }
}

.circle {
  border-radius: 999px;
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
