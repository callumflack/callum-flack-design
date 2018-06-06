<template lang="pug">
  nuxt-link.project(:to="link")
    .FlexGrid--sm
      .u-sm-size1of2
        figure
          c-lazyimage(v-if="thumbInCloudinary", :src="image", project)
          img(v-else, :src="image")
      .u-sm-size1of2
        .u-flex.u-flexAlignContentStretch.h-100
          .u-flex.u-flexAlignItemsCenter
            div
              h2.Title.Title--project {{ title }}
              .u-block.Meta.c-textLight
                span(v-if="year") {{ year }}
                span.m-x2 •
                span(v-if="tags") {{ tags }}
                //- span(v-html="lede")
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
    title: String,
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
