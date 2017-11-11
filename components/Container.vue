<template lang="pug">
  div(:class="classes")
    slot
</template>

<script scoped>
export default {
  name: 'container',
  computed: {
    classes () {
      return ['Container', {
        'large': this.large,
        'hero': this.hero
      }]
    }
  },
  props: {
    large: Boolean,
    hero: Boolean
  }
}
</script>

<style scoped>
@import "../assets/styles/vars.css";

.Container {
  margin-left: auto;
  margin-right: auto;
  max-width: var(--container-rg);
  padding-left: var(--grid-gutter);
  padding-right: var(--grid-gutter);
  width: 100%;

  &.large {
    max-width: var(--container-lg);
  }

  &.hero {
    max-width: var(--container-xl);
    padding: 0;
  }
}

</style>
