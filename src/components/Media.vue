<template>
  <div class="AspectMedia Grid-extract--post">
    <Aspect :ratio="ratio" :class="{ Frame: frame || caption }">
      <ImageDynamic :src="image" :alt="title" />
    </Aspect>
    <figcaption
      v-if="caption"
      class="Text-base text-gray st-h"
      v-html="caption"
    ></figcaption>
  </div>
</template>

<script>
import Aspect from "./Aspect";
import ImageDynamic from "./ImageDynamic";

export default {
  components: {
    Aspect,
    ImageDynamic,
  },
  props: {
    image: String,
    title: String,
    caption: String,
    ratio: String,
    frame: Boolean,
  },
};
</script>

<style lang="postcss" scoped>
/* Frame without stuffing up the aspect ratio */
.Frame:after {
  @apply absolute inset-0 border border-gray-400;
  content: "";
}
</style>
