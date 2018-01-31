<template lang="pug">
  figure(:class="figureClasses")
    img(
      ref="placeholder"
      alt="src"
      :src="`${baseUrl}w_300${src}` 300w"
      :srcset="
        `${baseUrl}w_2080${src}` 2080w,
        `${baseUrl}w_1040${src}` 1040w,
        `${baseUrl}w_600${src}` 600w"
    )
</template>

<script scoped>
const baseUrl =
  "https://res.cloudinary.com/pw-img-cdn/image/fetch/c_fill,g_center,f_auto,";

export default {
  name: "markdown-image",
  computed: {
    figureClasses() {
      return [
        "figure",
        {
          "figure--portrait": this.portrait,
          "figure--large": this.large,
          "figure--frame": this.frame
        }
      ];
    }
  },
  props: {
    src: {
      type: String,
      required: true
    },
    square: Boolean,
    face: Boolean,
    portrait: Boolean,
    large: Boolean,
    frame: Boolean
  }
};
</script>

<style scoped>
@import "../assets/styles/vars.css";
</style>
