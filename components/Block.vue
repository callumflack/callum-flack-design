<template lang="pug">
  div(:class="classes")
    slot
</template>

<script scoped>
export default {
  name: 'block',
  computed: {
    classes () {
      return ['Block', {
        'banner': this.banner,
        'sandwich': this.sandwich,
        'article': this.article,
        'gutter': this.gutter
      }]
    }
  },
  props: {
    banner: Boolean,
    sandwich: Boolean,
    article: Boolean,
    gutter: Boolean
  }
}
</script>

<style scoped>
@import "../assets/styles/vars.css";

.Block {
  padding-top: var(--s6);
  position: relative;
  @media (--medium-viewport) { padding-top: var(--s7); }
  @media (--large-viewport) { padding-top: var(--s8); }

  &.banner {
    padding: var(--s5) 0;
    @media (--medium-viewport) { padding: var(--s6) 0; }
  }
  
  &.sandwich {
    padding-bottom: var(--s6);
    @media (--medium-viewport) { padding-bottom: var(--s7); }
    @media (--large-viewport) { padding-bottom: var(--s8); }
  }

  &.gutter {
    padding-left: var(--grid-gutter);
    padding-right: var(--grid-gutter);
  }

  &.article {
    padding: var(--s-p1) 0 var(--s-p2);
  }
}
</style>
