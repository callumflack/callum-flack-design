<template lang="pug">
.Toggle
  //- .Container(:class="{ 'Container--noRule': isVisible }")
  .Container
    .Extract-large.Toggle-align.b-pt2
      .u-fixed.z-top
        //- a.Toggle-button.Button.Button--transparent.Meta.fw-600(
        a.Toggle-button.Button.Button--sm.Meta.fw-600(
          href="#"
          @click.prevent="handleNavToggle"
          style="letter-spacing: 0.125em !important;"
          :class="{ 'is-active': isVisible }"
        ) 
          //- span(style="text-transform:initial") ☰CFd
          span(style="text-transform:initial") CFd
        //- span CFD
        //- span.w-100.u-textCenter.Meta.fw-700 {{ currentPageName }}
        //- span.Extract-large-inset.Meta.fw-500 {{ currentPageName }}

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
  position: absolute;
  width: 100%;

  /* &:hover {
    background-color: var(--c-highlight);
    color: var(--c-text);
  } */
}

.Toggle-align {
  height: var(--button-height);
}

.Toggle-width {
  max-width: var(--container-lg);
  width: var(--container-lg);
}

.Toggle-button {
  /* box-shadow: var(--c-bg) 0 0 0 3px; */
}

.Toggle-anchor span {
  align-items: center;
  border: 1px solid var(--c-text);
  background-color: var(--c-bg);
  display: flex;
  justify-content: center;
  padding: 2px 1rem 0;
  position: relative;

  /* theme */
  /* transform: translateY(-12px); */
  /* border-color: var(--c-highlight);
  color: var(--c-highlight); */

  /* border-radius: 999px;
  border-width: 6px;
  height: 44px;
  width: 44px; */

  /* @media (--lg) {
    left: var(--toggle-x-align);
  } */
}

.Toggle-anchor:hover {
  background-image: initial;
}

.Toggle-anchor:hover span,
.Toggle-anchor.is-active span {
  background-color: var(--c-highlight);
  border-color: var(--c-highlight);
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
