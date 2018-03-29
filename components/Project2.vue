<template lang="pug">
  nuxt-link.project.ruled(:to="link")
    .u-flex.u-flexJustifyStart
      figure.project-image.project-item-left.u-size5of12
        c-lazyimage(project, :src="image", v-if="thumbInCloudinary")
        img(:src="image", v-else)
      .project-text.project-item-right.u-size7of12
        //- h2.Heading.m-t0.m-b1
          span.project-visualLink {{ heading }}
        p.Text
          span(v-if="year") {{ year }}
          //- span.project-divider &nbsp;&nbsp;——&nbsp;
          span.project-divider &nbsp;—&nbsp;
          span(v-html="lede")
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
