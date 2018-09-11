<template lang="pug">
.w-md-1x3.w-lg-1x4
  nuxt-link.Project(:to="link")
    .AspectRatio.AspectRatio--4x3.bg-text
      .AspectRatio-object
        ImageLazy(:src="image")
    .b-my0
      h2.Heading.Project-headline.p-t1.m-b2 {{ title }}
      .Meta.Project-tags
        // span(v-if="year") {{ year }}
        // span.m-x2 •
        span(v-if="tags") {{ tags }}
      p.m-t3(v-html="lede")
</template>


<script>
import ImageLazy from "~/components/ImageLazyCldOrig.vue";
import ImageSVGFilter from "~/components/ImageSVGFilter.vue";

export default {
  name: "post",
  components: {
    ImageLazy,
    ImageSVGFilter
  },
  props: {
    link: String,
    thumbInCloudinary: Boolean,
    image: String,
    title: String,
    lede: String,
    tags: String,
    year: Number
  }
};
</script>


<style scoped>
@import "../assets/styles/variables.css";
</style>
