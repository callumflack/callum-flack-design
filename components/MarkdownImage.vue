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
        "Block--halfSandwich",
        {
          "Figure--medium": this.medium,
          "Figure--large": this.large
        }
      ];
    }
  },
  props: {
    medium: Boolean,
    large: Boolean,
    frame: Boolean,
    src: String
  }
};
</script>

<style scoped>
@import "../assets/styles/vars.css";
</style>
