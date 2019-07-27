<template>
  <div class="SliderSlides">
    <slot />
  </div>
</template>

<script>
/* https://markus.oberlehner.net/blog/building-a-simple-content-slider-with-vue/ */
export default {
  name: "SliderSlides"
};
</script>

<style lang="css">
.SliderSlides {
  position: relative;
}
</style>
