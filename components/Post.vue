<template lang="pug">
  article.Container
    .Extract-hero.m-a0(v-if="heroImage")
      .AspectRatio(:style="heroAspectStyle")
        .AspectRatio-object.bg-highlight
          ImageCld(:src="heroImage")

    header.b-my2.w-md-5x6.m-xA(role="banner")
      h1.Title.u-textCenter.p-t1 {{ title }}
      .Meta.u-textCenter.u-block
        time(:date-time="date") {{ date | moment("MMMM Do, YYYY") }}
        span.MetaSeparator • 
        span {{ readingtime }} minutes

    main(role="main")
      .Scope-post.Scope-post-figure
        // no-ssr
        nuxtent-body(:body="body")

    .HeadingSpace(v-if="updated || note")
      hr.ParagraphSpace
      p.fs-text-sm.c-textLight(v-if="updated") Updated: {{ updated }}
      p.fs-text-sm.c-textLight(v-if="note", v-html="note")
    
</template>

<script>
import moment from "vue-moment";
import ImageCld from "~/components/ImageLazyCldOrig.vue";

export default {
  name: "post",
  components: {
    moment,
    ImageCld
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
      default: "56.25"
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
    },
    heroAspectStyle() {
      return this.heroRatio && `padding-bottom: ${this.heroRatio}%`;
    }
  }
};
</script>


<style scoped>
@import "../assets/styles/variables.css";
</style>
