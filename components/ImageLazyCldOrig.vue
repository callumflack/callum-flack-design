<template lang="pug">
  figure(:class="figureClasses" ref="placeholder")
    img(
      :class="['low-rez', {'is-loaded': largeUrl}]"
      :src="smallUrl"
    )
    img(
      :class="['high-rez', {'is-loaded': largeUrl}]"
      :src="largeUrl"
    )
</template>

<script>
const baseUrl = "https://res.cloudinary.com/pw-img-cdn/image/fetch";
const blurUrl = `${baseUrl}/w_50,e_blur:300`;

function calcImageDimension(length, pixelRatio) {
  return 100 * Math.round(length * pixelRatio / 100);
}

export default {
  name: "lazy-image",
  props: {
    src: {
      type: String,
      required: true
    },
    square: Boolean,
    face: Boolean,
    aspect: Boolean,
    ratio: Number,
    frame: Boolean,
    large: Boolean,
    project: Boolean,
    portrait: Boolean,
    post: Boolean,
    figure: Boolean,
    wrappedInLink: Boolean
  },
  computed: {
    figureClasses() {
      return [
        "image",
        {
          figure: this.figure,
          "figure--frame": this.frame,
          "figure--large": this.large,
          "figure--project": this.project,
          "figure--portrait": this.portrait,
          "figure--post": this.post,
          "p-a0": this.wrappedInLink
        }
      ];
    },
    // attempt at retaining image aspect ratio space
    // unfortunately, cloudinary size computations are just out
    // if we use Math.round to save data space…
    // DO NOT USE
    ratioClasses() {
      return [
        "image-aspectRatio",
        {
          "figure--frame": this.frame,
          "image-aspectRatio--4by3": this.aspect
        }
      ];
    },
    ratioStyle() {
      // (v-if="page.projectColor", :style = 'projectColor')
      return this.ratio ? `height: calc(66vw * ${this.ratio})` : "";
    }
  },

  data() {
    return {
      // Set to undefined as defaulting to an empty string shows
      // the invalid image icon until a correct src is set
      smallUrl: undefined,
      largeUrl: undefined
    };
  },

  mounted() {
    // Load small image
    const smallUrl = `${blurUrl}/${this.src}`;

    var smallImage = new Image();
    smallImage.src = smallUrl;

    smallImage.onload = () => {
      this.smallUrl = smallUrl;
    };

    /*

      Load large image

     */
    const image = this.$refs.placeholder;

    const { clientWidth } = image;
    const pixelRatio = window.devicePixelRatio || 1.0;
    // eslint-disable-next-line
    const isSquare = this.square;

    const imageWidth = calcImageDimension(clientWidth, pixelRatio);
    // const imageHeight = isSquare
    //   ? imageWidth
    //   : calcImageDimension(clientHeight, pixelRatio);

    const gPosition = this.face ? "g_face" : "g_center";
    const imageParams = `w_${imageWidth},c_fill,${gPosition},f_auto`;

    const largeUrl = `${baseUrl}/${imageParams}/${this.src}`;

    // The Image() constructor creates a new HTMLImageElement instance: https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image
    const largeImage = new Image();
    largeImage.src = largeUrl;

    largeImage.onload = () => {
      this.largeUrl = largeUrl;
    };
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";

.image {
  position: relative;
}

.image img {
  min-height: 100%;
  min-width: 100%;
  transition: opacity 1s linear;
  width: 100%;
}

/* 
  1. enable Safari to keep sharp edges 
  …but only works if pos-abs within an aspect-ratio div.
*/
.low-rez {
  /* filter: blur(50px); */
  opacity: 1;
  transform: scale(1); /*1*/
}

.high-rez {
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
}

/* on full-res image load */

.low-rez.is-loaded {
  opacity: 0;
}

.high-rez.is-loaded {
  opacity: 1;
}

/* attempts at retaining aspect-ratio on load */

.image-aspectRatio {
  height: 0;
  overflow: hidden;
  padding-bottom: 100%;
  position: relative;
  width: 100%;
}

.image-aspectRatio--4by3 {
  padding-bottom: 75%;
}

/* use the SVG filter that's secreted on work/index */

.project:hover img {
  filter: url("#blur");
}
</style>
