<template lang="pug">
  nuxt-link.project.ruled(:to="link")
    .u-flex.u-flexJustifyStart
      figure.project-image
        c-lazyimage(project, :src="image", v-if="thumbInCloudinary")
        img(:src="image", v-else)
      .project-text
        h2.heading.m-t0.msm-m-b1
          span.project-visualLink {{ heading }}
        p.text.text--meta.c-textLight
          span(v-if="year") {{ year }}
          span.project-divider &nbsp;&nbsp;——&nbsp;
          | {{ lede }}
</template>


<script>
import LazyImage from "~/components/LazyImage.vue";

export default {
  name: "post",
  components: {
    "c-lazyimage": LazyImage
  },
  props: {
    link: String,
    thumbInCloudinary: Boolean,
    image: String,
    heading: String,
    lede: String,
    tags: String,
    year: Number
  }
};
</script>


<style scoped>
@import "../assets/styles/variables.css";
</style>
