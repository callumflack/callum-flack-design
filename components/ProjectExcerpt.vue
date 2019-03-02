<template lang="pug">
.w-md-1x3
  nuxt-link.Project(:to="link")
    .AspectRatio.AspectRatio--4x3.bg-text
      .AspectRatio-object
        LazyImage(:src="image")
    .m-t3
      .Meta.Project-tags.c-textLight(v-if="tags")
        // span(v-if="year") {{ year }}
        // span.m-x2 •
        span {{ tags }}
      h2.Heading.Project-headline.p-y2 {{ title }}
      p.fs-text-sm.m-t3.w-lg-5x6(v-html="lede")
</template>


<script>
import LazyImage from "~/components/LazyImage.vue";
import ImageSVGFilter from "~/components/ImageSVGFilter.vue";

export default {
  name: "post",
  components: {
    LazyImage,
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
