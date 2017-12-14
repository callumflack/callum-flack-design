<template>
  <div class="placeholder" ref="placeholder">
    <img
      :class="[
        'low-rez',
        {
          loaded: smallUrl
        }
      ]"
      :src="smallUrl"
    />
    <img
      :class="[
        'full-rez',
        {
          loaded: largeUrl
        }
      ]"
      :src="largeUrl"
    />
  </div>
</template>

<script>
const baseUrl = "https://res.cloudinary.com/pw-img-cdn/image/fetch";
const blurUrl = `${baseUrl}/w_100,e_blur:300`;

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
    face: Boolean
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

    // Load large image
    const image = this.$refs.placeholder;

    const { clientWidth, clientHeight } = image;
    const pixelRatio = window.devicePixelRatio || 1.0;
    const isSquare = this.square;

    const imageWidth = calcImageDimension(clientWidth, pixelRatio);
    const imageHeight = isSquare
      ? imageWidth
      : calcImageDimension(clientHeight, pixelRatio);

    const gPosition = this.face ? "g_face" : "g_center";
    const imageParams = `w_${imageWidth},h_${imageHeight},c_fill,${gPosition},f_auto`;

    const largeUrl = `${baseUrl}/${imageParams}/${this.src}`;

    const largeImage = new Image();
    largeImage.src = largeUrl;

    largeImage.onload = () => {
      this.largeUrl = largeUrl;
    };
  }
};
</script>

<style scoped>
@import "../assets/styles/vars.css";

.placeholder {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  min-height: 200px;
}

.placeholder img {
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  transition: opacity 1s linear;
}

.placeholder img.loaded {
  opacity: 1;
}

.img-small {
  filter: blur(50px);
  /* this is needed so Safari keeps sharp edges */
  transform: scale(1);
}
</style>
