<template>
  <div class="image">
    <div :class="ratioClasses" :style="ratioStyle" ref="placeholder">
    <img
      :class="[
        'low-rez',
        {
          'is-loaded': smallUrl
        }
      ]"
      :src="smallUrl"
    />
    <img
      :class="[
        'full-rez',
        {
          'is-loaded': largeUrl
        }
      ]"
      :src="largeUrl"
    />
  </div>
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
    frame: Boolean,
    square: Boolean,
    face: Boolean,
    project: Boolean,
    ratio: String
  },

  computed: {
    ratioClasses() {
      return [
        "image-aspectRatio",
        {
          "figure--frame": this.frame,
          "image-aspectRatio--4by3": this.project
        }
      ];
    },
    ratioStyle() {
      // (v-if="page.projectColor", :style = 'projectColor')
      return this.ratio ? `padding-bottom: ${this.ratio}` : "";
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

.image {
  background-color: var(--color-neutral);
}

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

.image img {
  opacity: 0;
  min-height: 100%;
  min-width: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: opacity 1s linear;
  width: 100%;
}

.image img.is-loaded {
  opacity: 1;
}

.low-rez,
.img-small {
  filter: blur(50px);
  /* this is needed so Safari keeps sharp edges */
  transform: scale(1);
}

/* use the SVG filter that's secreted on work/index */
.project:hover img {
  filter: url("#gray");
}
</style>
