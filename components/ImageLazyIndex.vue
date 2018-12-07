<template lang="pug">
  //- figure.image(ref="placeholder", :class="{'Blue': largeUrl}")
  figure.image.Blue(ref="placeholder")
    img(
      :class="['low-rez Index', {'is-loaded': largeUrl}]"
      :src="smallUrl"
      :alt="alt"
    )
    img(
      :class="['high-rez Index', {'is-loaded': largeUrl}]"
      :src="largeUrl"
      :alt="alt"
    )
</template>

<script>
const baseUrl = "https://res.cloudinary.com/pw-img-cdn/image/fetch";
const blurUrl = `${baseUrl}/w_50,e_blur:300`;

function calcImageDimension(length, pixelRatio) {
  return 100 * Math.round((length * pixelRatio) / 100);
}

export default {
  name: "lazy-image",
  props: {
    alt: String,
    src: {
      type: String,
      required: true
    },
    square: Boolean,
    face: Boolean
  },
  computed: {},

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

    // Load large image
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
/* @import "../assets/styles/variables.css"; */

.Blue {
  background-color: #2242dc;
  transition: background-color 750ms cubic-bezier(0.15, 0.71, 0.45, 1.06);
  transition: background-color 900ms cubic-bezier(0.19, 1, 0.22, 1);
  /* animation: bgblue 3000ms cubic-bezier(0.19, 1, 0.22, 1); */
}

@keyframes bgblue {
  from {
    background-color: black;
  }
  to {
    background-color: #2242dc;
  }
}

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

.Index {
  filter: invert(1);
  mix-blend-mode: multiply;
}
</style>
