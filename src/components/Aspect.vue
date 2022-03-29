<template>
  <component :is="isType" :ratio="ratio" :style="aspectRatio" class="Aspect">
    <slot />
  </component>
</template>

<script>
/*

  `Aspect` provides a a space for an image to fill.

  * Dynamic component via the computed isType b/c <figure> is the appropriate HTML element but sometimes it clashes w/ the ImageDynamic component.
  * Must have a padding-bottom style.
  * A default padding-bottom is set via props.
  * For styling, see: https://github.com/callumflack/iremono/blob/master/lib/components/aspect-ratio.css

*/
export default {
  props: {
    ratio: {
      type: String,
      default: "9/16",
    },
    figure: Boolean,
  },
  computed: {
    isType() {
      return this.figure ? "figure" : "div";
    },
    aspectRatio() {
      return this.ratio && `--aspect-ratio: ${this.ratio}`;
    },
  },
};
</script>

<style lang="postcss" scoped>
.Aspect {
  @apply relative overflow-hidden h-0;
  padding-bottom: calc(100% * (var(--aspect-ratio)));
}

/* if any figure, no margin */
figure .Aspect >>> figure {
  @apply m-0;
}

/*
  Image within an aspect ratio.
  1. Absolutely occupy the .Aspect area
  2. Cover the .Aspect area
*/
.Aspect >>> img,
.Aspect >>> iframe {
  @apply absolute inset-0 h-full w-full z-10; /* 1 */
}
.Aspect >>> img {
  @apply object-cover; /* 2 */
}

/* Alt? */
/* .RsAspectRatio--16x9 {
  height: calc(100vw * 9 / 16);
  width: 100vw;
} */
</style>
