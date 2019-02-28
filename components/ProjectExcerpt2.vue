<template lang="pug">
.w-md-1x3.w-lg-1x3.w-su-1x4
  //- nuxt-link.Project(:to="link")
    .AspectRatio.AspectRatio--4x3.bg-text
      .AspectRatio-object
        ImageLazy(:src="image")
    .m-t3
      .Meta.Project-tags.c-textLight(v-if="tags")
        // span(v-if="year") {{ year }}
        // span.m-x2 •
        span {{ tags }}
      h2.Heading.Project-headline.p-y2 {{ title }}
      p.fs-text-sm.m-t3.w-lg-5x6(v-html="lede")

  article.b-pb1
    nuxt-link.Project(:to="link")
      //- .AspectRatio(:style="heroAspectStyle")
      //- .AspectRatio.AspectRatio--4x3.bg-text
      .AspectRatio.AspectRatio--16x9.bg-text
        .AspectRatio-object.bg-text
          ImageLazy(:src="image")

    .Project-detail.b-py05.p-x5.bg-white
      .Project-tags.Meta.c-text-light
        time(:date-time="date") {{ date | moment("YYYY") }}
        span.MetaSeparator(v-if="tags" ) •
        span(v-if="tags" ) {{ tags }}
      h2.Subtitle.Project-headline.m-t3.m-b3.w-xl-5x6
        nuxt-link(:to="link") {{ title }}
      p.fs-text-sm.w-lg-5x6(v-html="lede")
        //- nuxt-link.fs-italic(:to="link") Continue reading
</template>


<script>
import ImageLazy from "~/components/ImageLazy.vue";
import ImageSVGFilter from "~/components/ImageSVGFilter.vue";
import moment from "vue-moment";

export default {
  name: "post",
  components: {
    ImageLazy,
    ImageSVGFilter,
    moment
  },
  props: {
    date: String,
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
