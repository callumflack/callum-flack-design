<template>
  <div class="AspectMedia Grid-extract--post">
    <span :class="['relative', { Frame: frame }]">
      <ImageDynamic
        :alt="title"
        :class="klass"
        :src="image"
        :ratio="ratio"
        :transparent="transparent"
      />
    </span>
    <figcaption
      v-if="caption"
      class="Text-base text-gray Space-t"
      v-html="caption"
    ></figcaption>
  </div>
</template>

<script>
// import Aspect from "./Aspect";
import ImageDynamic from "./ImageDynamic";

export default {
  components: {
    // Aspect,
    ImageDynamic,
  },
  props: {
    image: String,
    title: String,
    caption: String,
    klass: {
      type: String,
      default: "",
    },
    ratio: String,
    frame: Boolean,
    transparent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
/* Frame without stuffing up the aspect ratio */
.Frame >>> figure:after {
  @apply absolute inset-0 border border-gray-300;
  content: "";
  z-index: 11;
}
</style>
