<template>
  <figure
    ref="placeholder"
    :class="figureClass"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      class="u-hidden"
    >
      <defs>
        <filter id="blur">
          <feGaussianBlur
            :stdDeviation="deviation"
            in="SourceGraphic"
          />
        </filter>
      </defs>
    </svg>
    <v-lazy-image
      v-if="cloudinarySrc"
      :src-placeholder="cloudinaryPlaceholderSrc"
      :src="cloudinarySrc"
      :alt="alt"
      @load="animate"
    />
  </figure>
</template>

<script>
/* https://github.com/alexjoverm/v-lazy-image */
import VLazyImage from "v-lazy-image";

/* cloudinary utils */
const cldBaseUrl = "https://res.cloudinary.com/pw-img-cdn/image/fetch";
const cldBlurUrl = `${cldBaseUrl}/w_50,e_blur:300`;

function calcImageDimension(length, pixelRatio) {
  return 100 * Math.round((length * pixelRatio) / 100);
}

export default {
  components: {
    VLazyImage
  },
  props: {
    src: String,
    srcPlaceholder: String,
    alt: {
      type: String,
      default: ""
    },
    nomask: {
      type: Boolean,
      default: false
    },
    blurLevel: {
      type: Number,
      default: 30
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      cloudinarySrc: "",
      rate: 1
    };
  },
  computed: {
    deviation() {
      return this.blurLevel * this.rate;
    },
    cloudinaryPlaceholderSrc() {
      return this.src && `${cldBlurUrl}/${this.src}`;
    },
    figureClass() {
      if (this.$route.name === "index") {
        return "Blue";
      }
      if (this.nomask) {
        return "no-mask";
      }
    },
  },
  mounted() {
    /* Fetch a responsive image from cloudinary */
    const image = this.$refs.placeholder;
    const { clientWidth } = image;
    const pixelRatio = window.devicePixelRatio || 1.0;
    const imageWidth = calcImageDimension(clientWidth, pixelRatio);
    const imageParams = `w_${imageWidth},c_fill,g_center,f_auto,q_auto`;
    this.cloudinarySrc = `${cldBaseUrl}/${imageParams}/${this.src}`;

    // console.log(`pixel ratio: ${pixelRatio}`);
    // console.log(`img width: ${imageWidth}`);
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
  }
};
</script>

<style scoped>
.v-lazy-image {
  width: 100%;
  filter: url("#blur");
}

/* .v-lazy-image-loaded {
  filter: none !important;
} */

figure {
  overflow: hidden;
}

.no-mask {
  overflow: initial;
}

.Blue {
  background-color: var(--c-blue);
  position: relative;
  transition: background-color 750ms cubic-bezier(0.15, 0.71, 0.45, 1.06);
  transition: background-color 900ms cubic-bezier(0.19, 1, 0.22, 1);
  /* animation: bgblue 3000ms cubic-bezier(0.19, 1, 0.22, 1); */
}

@keyframes bgblue {
  from {
    background-color: black;
  }
  to {
    background-color: var(--c-blue);
  }
}

.Blue img {
  filter: invert(1);
  mix-blend-mode: multiply;
  min-height: 100%;
  min-width: 100%;
  transition: opacity 1s linear;
  width: 100%;
}
</style>
