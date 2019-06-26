<template>
  <component
    :is="isType"
    :ratio="ratio"
    :style="aspectRatio"
    class="Aspect"
  >
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
    figure: Boolean
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
  @apply m-0; /* if figure, no margin */
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

/* IRE */

.RsAspectRatio--16x9 {
  height: calc(100vw * 9 / 16);
  width: 100vw;
}

.AspectRatio {
  height: 0;
  padding-bottom: 100%;
  position: relative;
}

.AspectRatio-object {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* z-index: 100; */
}

.AspectRatio-object {
  & figure,
  & img,
  & iframe {
    bottom: 0;
    height: 100%;
    left: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
  }

  & img {
    object-fit: cover;
  }
}
</style>
