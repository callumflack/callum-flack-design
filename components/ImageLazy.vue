<template lang="pug">
  figure
    v-lazy-image(
      :src="src"
      :src-placeholder="srcPlaceholder"
      @load="animate"
    )
</template>

<script>
import VLazyImage from "v-lazy-image";

/* 

  https://github.com/alexjoverm/v-lazy-image 

*/

export default {
  components: {
    VLazyImage
  },
  props: {
    src: String,
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
  }
};
</script>

<style scoped>
</style>
