<template lang="pug">
  //- div(v-if="byBg", :class="classes")
  img(:class="classes")
</template>


<script scoped>
export default {
  name: 'cover-image',
  computed: {
    classes () {
      return ['CoverImage', {
        'byWidth': this.byWidth,
        'byHeight': this.byHeight,
        'byBg': this.byBg
      }]
    }
  },
  props: {
    byWidth: Boolean,
    byHeight: Boolean,
    byBg: Boolean
  }
}
</script>


<style >
@import "../assets/styles/vars.css";

.CoverImage {
  background-color: var(--color-hilight);
  max-width: initial;

  /* sticky */
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.byWidth {
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.byHeight {
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}

.byBg {
  background-color: initial;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  height: 100%;
  margin: 0 auto;
  width: 100%;
}
</style>
