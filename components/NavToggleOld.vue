<template lang="pug">
.toggle.promote
  .toggle-logo
    //- a.icon-tap(href="#", @click.prevent="handleNavToggle")
    nuxt-link.icon-tap(to="/")
      .icon.Heading
        span.u-lg-hidden Menu
        //- span.u-hidden.u-lg-block.tracking ☰ CF/d
        //- span.u-hidden.u-lg-block.tracking CF/d
        span.u-hidden.u-lg-block.tracking 
          span.caps CF
          span.italic d
</template>

<script scoped>
export default {
  name: "toggle",
  components: {},
  computed: {
    isVisible: function() {
      return this.$store.state.isModalVisible;
    }
  },

  methods: {
    handleNavToggle() {
      this.$store.commit("SET_MODAL_VISIBILITY", !this.$store.state.isModalVisible);
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
  bottom: calc(0.75 * var(--grid-gutter));
  transform: translate(0, -0.1em);
  z-index: 100;

  /* y */
  @media (--sm) {
    bottom: var(--grid-gutter);
  }
  @media (--md) {
    /* top: var(--grid-gutter); */
  }
  @media (min-width: 769px) {
    bottom: auto;
    top: var(--grid-gutter);
  }
  @media (min-width: 1460px) {
    top: var(--s-7);
  }

  /* x */
  @media (--sm) {
    right: var(--grid-gutter);
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

  @media (--lg) {
    box-shadow: initial;
    transition: box-shadow 1s ease;

    &:hover {
      box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15), 0px 9px 50px 0px rgba(0, 0, 0, 0.1);
      transition: box-shadow 1s ease;
    }
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
  position: relative;
  background-color: var(--c-bg);
  /* border: 1px solid currentColor; */
  border-radius: 999px;
  padding: 9px 14px 8px 15px;

  &:before {
    /* content: "\2630"; */
    font-size: 112%;
    margin-right: 3px;
  }

  @media (--lg) {
    background-color: transparent;
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
