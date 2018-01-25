<template lang="pug">
  .Grid-cell.u-sm-size1of2
    nuxt-link.project.block--half(:to="link")
      figure.project-image
        c-lazyimage(project, :src="image", v-if="thumbInCloudinary")
        img(:src="image", v-else)
      .project-text
        h2.title
          span.project-visualLink {{ heading }}
        p.project-subtext.text.text--meta
          span(v-if="year") {{ year }}
          span.project-divider &nbsp;——&nbsp;
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
@import "../assets/styles/vars.css";

/* .Grid-cell:nth-child(7), */
/* .Grid-cell:nth-child(8), */
.Grid-cell:nth-child(9) {
  & .project {
    margin-bottom: 0 !important;
  }
}
</style>
