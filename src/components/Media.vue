<template>
  <Aspect :ratio="ratio" class="Grid-extract--post bg-black">
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
</template>

<script>
import Aspect from "./Aspect";

export default {
  props: {
    image: String,
    title: String,
    caption: String,
    ratio: String,
  },
  components: {
    Aspect
  }
}
</script>

<style lang="postcss" scoped>
figure {
  margin: 0;
}
</style>
