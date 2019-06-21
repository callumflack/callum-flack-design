<template>
  <div class="Aspect" :ratio="ratio" :style="aspectRatio">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    ratio: {
      type: String,
      default: "9/16",
    },
  },
  computed: {
    aspectRatio() {
      return this.ratio && `--aspect-ratio: ${this.ratio}`;
    },
  },
};
</script>

<style lang="postcss" scoped>
/* :root {
  --aspect-ratio: 9 / 16;
} */

.Aspect {
  /* --aspect-ratio: 9 / 16; */
  /* requires adding a padding-bottom style, see: https://github.com/callumflack/iremono/blob/master/lib/components/aspect-ratio.css */
  @apply relative overflow-hidden h-0 m-0 w-full;
  padding-bottom: calc(100% * (var(--aspect-ratio)));
}

/*
  Image within an aspect ratio.
  1. Absolutely occupy the .Aspect area
  2. Cover the .Aspect area
*/
.Aspect >>> img {
  @apply absolute inset-0; /* 1 */
  @apply object-cover h-full w-full; /* 2 */
}
</style>
