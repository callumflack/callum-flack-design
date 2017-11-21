<template>
  <slick ref="slick">
    <img v-for="image in images.split(',')" :key="image" :src="image" />
  </slick>
</template>

<script>
import Slick from "vue-slick";

export default {
  name: "markdown-slick",
  components: {
    Slick
  },
  props: {
    images: String,
  },
};
</script>

<style>
@import "node_modules/slick-carousel/slick/slick.css";
</style>
