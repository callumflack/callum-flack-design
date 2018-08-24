<template lang="pug">
.w-sm-1x3
  nuxt-link.Project(:to="link")
    .FlexGrid--sm
      .u-sm-size1of2
        figure.BW
          ImageSVGFilter(:src="image", project)
      .u-sm-size1of2
        .u-flex.u-flexAlignContentStretch.h-100
          .u-flex.u-flexAlignItemsCenter
            .b-my0
              h2.Subheading.fw-bold.p-t1.m-b2 {{ title }}
              .u-block.Meta
                span(v-if="year") {{ year }}
                span.m-x2 •
                span(v-if="tags") {{ tags }}
                //- span(v-html="lede")
</template>


<script>
import ImageLazy from "~/components/ImageLazy.vue";
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

.project:hover {
  color: var(--c-text);
}

.m-r3plus {
  margin-right: var(--s-3a) !important;
}
.m-x3plus {
  margin-right: var(--s-3a) !important;
  margin-left: var(--s-3a) !important;
}

.BW img {
  filter: grayscale(100);
}
</style>
