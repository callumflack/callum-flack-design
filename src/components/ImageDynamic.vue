<template>
  <figure
    ref="image"
    :ratio="ratio"
    :style="aspectRatio"
    :class="[useAspectRatio, containBlurIn, backgroundColor]"
  >
    <client-only>
      <v-lazy-image :src="url" :src-placeholder="urlPlaceholder" :alt="alt" />
    </client-only>
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

// const imgixDomain = "https://www.callumflack.design/images/";
/* no end slash */
const imgixDomain =
  process.env.NODE_ENV === "production" ? "https://cfd.imgix.net" : "";
const optimizeParams = "auto=format&q=33";

export default {
  components: {
    VLazyImage,
  },
  props: {
    src: {
      type: String,
      default: "",
    },
    alt: String,
    transparent: Boolean,
    cover: {
      type: Boolean,
      default: false,
    },
    ratio: {
      type: [String, Number],
      default: "9/16",
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
  computed: {
    useAspectRatio() {
      return this.cover ? "cover" : "aspect";
    },
    aspectRatio() {
      return this.ratio && `--aspect-ratio: ${this.ratio}`;
    },
    containBlurIn() {
      return !this.caption && "overflow-hidden";
    },
    backgroundColor() {
      return this.transparent ? "bg-transparent" : "bg-cleared-peach";
    },
  },
  mounted() {
    const url = `${imgixDomain}${this.src}?${optimizeParams}`;

    // Placeholder
    this.urlPlaceholder = `${url}&blur=20&w=50`;

    // Full size
    const scaledWidth = this.$refs.image.clientWidth * 2;
    const width = Math.min(scaledWidth, this.maxWidth);
    this.url = `${url}&w=${width}`;

    // console.log(scaledWidth);
  },
};
</script>

<style lang="postcss" scoped>
/*
  Figure parent that wraps a lazy-loaded image
  1. contain the blur-in
  2. if figure, no margin
  3. flash of layout before any images render.
      * this project to be like: https://www.additionelle.com/en
*/
figure {
  @apply relative;
  /* @apply overflow-hidden; */ /* 1 */
  @apply m-0 !important; /* 2 */
  /* @apply bg-black; */ /* 3 */
}

/*
  Figure parent provides an aspect-ratio exact area for the image to cover.
  - The parent must be relative
  - Uses Boolean prop "!cover"
 */
figure.aspect {
  @apply h-0;
  /* @apply overflow-hidden; */
  padding-bottom: calc(100% * (var(--aspect-ratio)));
}

/*
  Figure parent provides an exact area for the image to cover.
  - An alternate for to the figure parent using an aspect ratio for providing an area
  - The parent must be relative
  - Uses Boolean prop "cover"
 */
figure.cover {
  @apply absolute inset-0;
}

/*
  Image within an aspect ratio.
  1. Absolutely occupy the .Aspect area
  2. Make the image cover the .Aspect area
*/
img {
  @apply absolute inset-0; /* 1 */
  @apply object-cover h-full w-full; /* 2 */
}

/*
  Dynamic image within an figure.
  …for flexible use, no absolute positoning is applied.
  1. cover the figure parent area
*/
/* img {
  @apply object-cover h-full w-full;
} */

/*
  Image lazy-loading style
  1. enable Safari to keep sharp edges (if parent is pos-abs)
*/
.v-lazy-image {
  min-height: 100%;
  min-width: 100%;
  /* filter: blur(50px); */
  /* transition: filter 500ms ease-in; */
  @apply opacity-0;
  transition: opacity 500ms ease-in;
  transform: scale(1); /* 1 */
}
.v-lazy-image-loaded {
  /* filter: blur(0); */
  @apply opacity-100;
}

/*
  Figure caption
 */
figcaption {
  @apply absolute left-0 pt-2;
  top: 100%;
}
</style>
