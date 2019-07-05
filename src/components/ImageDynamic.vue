<template>
  <figure
    ref="image"
    :class="{ 'cover': cover }"
  >
    <v-lazy-image
      :src="url"
      :src-placeholder="urlPlaceholder"
      :alt="alt"
    />
  </figure>
</template>

<script>
/*
 * ImageDynamic
 *
 * Built to work with Dato CMS images.
 * Dato provides built in support for imgix parameters.
 *
 * Component features:
 * - Optimize quality for speed
 * - Responsively sizes images to size of the container element
 * - Lazy loads offscreen image
 */
import VLazyImage from "v-lazy-image";

const optimizeParams = "auto=format&q=33";

export default {
  components: {
    VLazyImage
  },
  props: {
    src: String,
    alt: String,
    cover: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: Number,
      default: 2000,
    },
  },
  data() {
    return {
      url: null,
      urlPlaceholder: null,
    };
  },
  mounted() {
    // Placeholder
    const url = `${this.src}?${optimizeParams}`;
    this.urlPlaceholder = `${url}&blur=20&w=50`;

    // Full size
    const scaledWidth = this.$refs.image.clientWidth * 2;
    const width = Math.min(scaledWidth, this.maxWidth);
    this.url = `${url}&w=${width}`;
  },
};
</script>

<style lang="postcss" scoped>
/*
  1. enable Safari to keep sharp edges (if parent is pos-abs)
*/
.v-lazy-image {
  min-height: 100%;
  min-width: 100%;
  filter: blur(10px);
  transition: filter 0.5s ease-in;
  transform: scale(1); /*1 */
}
.v-lazy-image-loaded {
  filter: blur(0);
}

/*
  Flash of layout before any images render.
 */
figure {
  @apply bg-gray-200;
}

/*
  Figure parent containing a dynamic image that provides
  an exact area to cover when the image doesn't use an aspect ratio.
  The parent must be relative.
 */
figure.cover {
  @apply absolute inset-0;
}

/*
  Dynamic image within an figure.
  …for flexible use, no absolute positoning is applied.
  1. cover the figure parent area
*/
img {
  @apply object-cover h-full w-full; /* 1 */
}
</style>
