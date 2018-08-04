<template lang="pug">
.Toggle
  // .Container(:class="{ 'Container--noRule': isVisible }")
  .Container
    .Extract-large.Toggle-align.b-py2
      a.Toggle-anchor.Logo.u-fixed.z-top(
        href="#"
        @click.prevent="handleNavToggle"
        :class="{ 'is-active': isVisible }"
      ) 
        span CFD
      // span.w-100.u-textCenter.Meta.fw-bold {{ currentPageName }}
      // span.Extract-large-inset.Meta.fw-medium {{ currentPageName }}

</template>

<script scoped>
export default {
  components: {},
  computed: {
    isVisible() {
      return this.$store.state.isMobileNavVisible;
    },
    currentPageName() {
      if (this.$store.state.currentPage !== "index") {
        return this.$store.state.currentPage;
      }
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

<style lang="postcss" scoped>
@import "../assets/styles/variables.css";

.Toggle {
  display: block;

  /* &:hover {
    background-color: var(--c-highlight);
    color: var(--c-text);
  } */
}

.Toggle-align {
  align-items: center;
  display: flex;
  height: 36px;
  height: calc(2 * var(--responsive-space) + 36px);
}

.Toggle-anchor {
}

.Toggle-anchor span {
  align-items: center;
  border: 2px solid var(--c-text);
  background-color: var(--c-bg);
  display: flex;
  height: 36px;
  justify-content: center;
  padding: 2px 0.55rem 0 0.85rem;
  position: relative;

  /* theme */
  /* border-color: var(--c-highlight);
  color: var(--c-highlight); */

  @media (--lg) {
    left: -1rem;
  }
}

.Toggle-anchor:hover {
  background-image: initial;
}

.Toggle-anchor:hover span,
.Toggle-anchor.is-active span {
  background-color: var(--c-text);
  /* border-color: var(--c-highlight); */
  color: var(--c-bg);
}

.Toggle-anchor.is-active span {
  color: var(--c-border);
}

.icon-tap {
  display: block;
  margin: calc(-0.5 * var(--grid-gutter));
}

.icon {
  padding: calc(0.5 * var(--grid-gutter));
}
</style>
