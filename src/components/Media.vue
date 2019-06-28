<template>
  <div class="AspectMedia Grid-extract--post">
    <Aspect
      :ratio="ratio"
      :class="{ 'Frame' : this.frame }"
    >
      <figure>
        <img
          :src="image"
          :alt="title"
        >
      </figure>
      <figcaption v-if="caption">
        {{ caption }}
      </figcaption>
    </Aspect>
  </div>
</template>

<script>
import Aspect from "./Aspect";

export default {
  props: {
    image: String,
    title: String,
    caption: String,
    ratio: String,
    frame: Boolean
  },
  components: {
    Aspect
  }
}
</script>

<style lang="postcss" scoped>
/* Frame without stuffing up the aspect ratio */
.Frame:after {
  @apply absolute inset-0 border border-gray-400;
  content: "";
}
</style>
