<template lang="pug">
  figure(:class="figureClasses", ref="placeholder")
    img(:src="src", alt="src", v-if="local")
    img(:src="url", alt="src", v-else)
</template>

<script scoped>
const baseUrl = "https://res.cloudinary.com/pw-img-cdn/image/fetch";

function calcImageDimension(length, pixelRatio) {
  return 100 * Math.round(length * pixelRatio / 100);
}

export default {
  name: "markdown-image",
  computed: {
    figureClasses() {
      return [
        "figure",
        {
          "figure--portrait": this.portrait,
          "figure--project": this.project,
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
    project: Boolean,
    large: Boolean,
    frame: Boolean,
    local: Boolean
  },
  data() {
    return {
      // Set to undefined as defaulting to an empty string shows
      // the invalid image icon until a correct src is set
      url: undefined
    };
  },
  mounted() {
    // Load a resized cloudinary image
    // fontend.center ep5: https://codepen.io/geelen/full/RGvQyJ
    const image = this.$refs.placeholder;
    const { clientWidth } = image;
    const pixelRatio = window.devicePixelRatio || 1.0;
    const imageWidth = calcImageDimension(clientWidth, pixelRatio);

    const imageParams = `w_${imageWidth},c_fill,g_auto,f_auto`;

    const url = `${baseUrl}/${imageParams}/${this.src}`;

    const cdnImage = new Image();
    cdnImage.src = url;

    cdnImage.onload = () => {
      this.url = url;
    };
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";
</style>
