<template>
  <figure ref="placeholder">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="filter hidden">
      <defs>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" :stdDeviation="deviation" />
        </filter>
      </defs>
    </svg>
     <v-lazy-image
      :src="srcCld"
      :src-placeholder="srcPlaceholderCld"
      @load="animate"
    ></v-lazy-image>
  </figure>
</template>

<script>
/* import IntersectionObserver from "intersection-observer"; */

/* https://github.com/alexjoverm/v-lazy-image */
import VLazyImage from "v-lazy-image";

/* cloudinary utils */
const cldBaseUrl = "https://res.cloudinary.com/pw-img-cdn/image/fetch";
const cldBlurUrl = `${cldBaseUrl}/w_50,e_blur:300`;

function calcImageDimension(length, pixelRatio) {
  return 100 * Math.round(length * pixelRatio / 100);
}

export default {
  components: {
    VLazyImage
  },
  props: {
    src: String,
    srcCld: String,
    srcPlaceholder: String,
    blurLevel: {
      type: Number,
      default: 30
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data: () => ({ rate: 1 }),
  computed: {
    deviation() {
      return this.blurLevel * this.rate;
    },
    srcPlaceholderCld() {
      return this.src && `${cldBlurUrl}/${this.src}`;
    }
  },
  methods: {
    animate() {
      const start = Date.now() + this.duration;

      const step = () => {
        const remaining = start - Date.now();

        if (remaining < 0) {
          this.rate = 0;
        } else {
          this.rate = remaining / this.duration;
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  },
  mounted() {
    /* Load a full-res responsive image from cloudinary */
    const image = this.$refs.placeholder;
    const { clientWidth } = image;
    const pixelRatio = window.devicePixelRatio || 1.0;
    const imageWidth = calcImageDimension(clientWidth, pixelRatio);
    const imageParams = `w_${imageWidth},c_fill,g_center,f_auto`;
    const srcCld = `${cldBaseUrl}/${imageParams}/${this.src}`;

    // The Image() constructor creates a new HTMLImageElement instance: https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image
    const srcCldImage = new Image();
    srcCldImage.src = srcCld;

    srcCldImage.onload = () => {
      this.srcCld = srcCld;
    };

    /* data: {
      return {
        srcCld: src
      };
    } */
  }
};
</script>

<style scoped>
.filter {
  display: none;
}

.v-lazy-image {
  width: 100%;
  filter: url("#blur");
}
</style>
