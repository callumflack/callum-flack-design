<template>
  <!-- <component :is="type" :to="to" :href="href" :target="renderTarget" :rel="renderRel">
    <slot />
  </component> -->
  <a v-if="externalLink" :href="href" target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
  <saber-link v-else :to="to">
    <slot />
  </saber-link>
</template>

<script>
// Define a link type using Vue dynamic component `is` attribute
// See:
// * https://thoughts.codegram.com/create-a-reusable-button-with-vue-dynamic-components/
// * https://alligator.io/vuejs/dynamic-components/
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
    externalLink: {
      type: Boolean,
      default: null,
    },
  },
  /* computed: {
    type() {
      if (this.externalLink === true) {
        return "a";
      }
      return "saber-link";
    },
    renderTarget() {
      return this.href && "_blank";
    },
    renderRel() {
      return this.href && "noopener noreferrer";
    },
  }, */
};
</script>
