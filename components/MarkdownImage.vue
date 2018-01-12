<template lang="pug">
  figure(:class="figureClasses")
    img(:src="src", alt="src")
</template>

<script scoped>
export default {
  name: "markdown-image",
  computed: {
    figureClasses() {
      return [
        "Figure",
        {
          "Figure--portrait": this.portrait,
          "Figure--large": this.large,
          "Figure--frame": this.frame
        }
      ];
    }
  },
  props: {
    portrait: Boolean,
    large: Boolean,
    frame: Boolean,
    src: String
  }
};
</script>

<style scoped>
@import "../assets/styles/vars.css";
</style>
