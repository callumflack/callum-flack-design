<template lang="pug">
  nuxt-link.project.project3.ruled(:to="link")
    .u-flex.u-flexJustifyStart
    .FlexGrid--sm
      .u-sm-size1of2
        figure
          c-lazyimage(project, :src="image", v-if="thumbInCloudinary")
          img(:src="image", v-else)
      
      .u-sm-size1of2
        .u-flex.u-flexAlignContentStretch.h-100
          .u-flex.u-flexAlignItemsCenter
            div
              h2.super.super--project {{ heading }}
              //- span.project-visualLink {{ heading }}
              //- p.text.c-textLight.m-b2(v-html="lede")
              p.text.c-textLight.m-b0
                span(v-if="year") {{ year }}
                span.m-x2 •
                span(v-if="tags") {{ tags }}
                br
                span {{ lede }}
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

.m-r3plus {
  margin-right: var(--s-3a) !important;
}
.m-x3plus {
  margin-right: var(--s-3a) !important;
  margin-left: var(--s-3a) !important;
}
</style>
