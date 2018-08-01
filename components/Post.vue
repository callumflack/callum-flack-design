<template lang="pug">
  article.Container
    .Extract-hero.m-a0(v-if="heroImage")
      .AspectRatio(:class="heroAspectClasses")
        .AspectRatio-object
          ImageSVGFilter(:src="heroImage")

    header.b-my2.w-lg-5x6.m-xAuto(role="banner")
      h1.Title.u-textCenter.p-t1 {{ title }}
      .Meta2.u-textCenter.u-block
        time(:date-time="date") {{ date | moment("MMMM Do, YYYY") }}
        span.MetaSeparator • 
        span {{ readingtime }} minutes
      

    main(role="main")
      .MarkdownScope
        no-ssr
          nuxtent-body(:body="body")

    .HeadingSpace(v-if="updated || note")
      hr
      p.fs-text-sm.c-textLight(v-if="updated") Updated: {{ updated }}
      p.fs-text-sm.c-textLight(v-if="note", v-html="note")
    
    .block--py7
      .u-textCenter.Title--lede *&nbsp;&nbsp;*&nbsp;&nbsp;*

</template>

<script>
import moment from "vue-moment";
import ImageSVGFilter from "~/components/ImageSVGFilter.vue";

export default {
  name: "post",
  components: {
    moment,
    ImageSVGFilter
  },
  props: {
    published: Boolean,
    link: String,
    title: String,
    date: String,
    readingtime: Number,
    heroImage: String,
    heroRatio: {
      type: String,
      default: "16x9"
    },
    src: String,
    body: Object,
    updated: Boolean,
    note: String,
    tweet: String
  },
  computed: {
    heroAspectClasses() {
      return this.heroRatio && `AspectRatio--${this.heroRatio}`;
    }
  }
};
</script>


<style scoped>
@import "../assets/styles/variables.css";
</style>
