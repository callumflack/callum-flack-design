<template lang="pug">
.Toggle
  .Container
    .Extract-large.Toggle-align.b-py2
      a.Toggle-anchor.Logo.u-fixed.z-top(href="#", @click.prevent="handleNavToggle") 
        span CFD
      // span.w-100.u-textCenter.Meta2.fw-bold {{ currentPageName }}
      // span.Extract-large-inset.Meta2.fw-medium {{ currentPageName }}

</template>

<script scoped>
export default {
  components: {},
  computed: {
    isVisible: function() {
      return this.$store.state.isMobileNavVisible;
    },
    currentPageName: function() {
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

<style scoped>
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
  align-items: center;
  align-content: center;
  display: flex;
  height: 100%;
  height: inherit;
  width: inherit;
  width: 80px;

  &:hover span {
    background-color: var(--c-highlight);
    border-color: var(--c-highlight);
    color: var(--c-bg);
  }
}

.Toggle-anchor span {
  align-items: center;
  border: 2px solid var(--c-text);
  /* border-radius: 999px; */
  background-color: var(--c-bg);
  display: flex;
  height: 36px;
  justify-content: center;
  /* padding: 0.8rem 1rem 0.75rem 1.25rem; */
  padding: 0 0.75rem 0 1.25rem;
  padding: 2px 0.55rem 0 0.85rem;
  position: relative;
  left: -1rem;
}

.icon-tap {
  display: block;
  margin: calc(-0.5 * var(--grid-gutter));
}

.icon {
  padding: calc(0.5 * var(--grid-gutter));
}
</style>
