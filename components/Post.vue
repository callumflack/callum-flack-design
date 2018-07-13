<template lang="pug">
  article.block--matchFixedMenuTop
    header.figure--bottomSpace.u-lg-size10of12.m-xAuto(role="banner")
      h1.Title.u-textCenter
        nuxt-link(:to="link") {{ title }}
      .u-block.Text--sm.c-textLight.u-textCenter
        time(:date-time="date") {{ date | moment("MMMM Do, YYYY") }}
        span.MetaSeparator • 
        span {{ readingtime }} minutes
      
    c-image(v-if="heroImage" src="heroImage" post)

    main(role="main")
      .MarkdownScope
        no-ssr
          nuxtent-body(:body="body")

    .HeadingSpace(v-if="updated || note")
      hr
      p.Text.c-textLight(v-if="updated") Updated: {{ updated }}
      p.Text.c-textLight(v-if="note", v-html="note")
    .block--py7
      .u-textCenter.Lede *&nbsp;&nbsp;*&nbsp;&nbsp;*

    //- .block--mt6(v-if="tweet")
      p.Heading.m-b0.u-textCenter Comments?
      p.Text.u-textCenter
        a.visualLink.c-text.icon-targetblank(:href="tweet", target="_blank") Twitter
</template>

<script>
import moment from "vue-moment";
import LazyImage from "~/components/LazyImage.vue";

export default {
  name: "post",
  components: {
    moment,
    "c-image": LazyImage
  },
  props: {
    published: Boolean,
    link: String,
    title: String,
    date: String,
    readingtime: Number,
    heroImage: String,
    body: Object,
    updated: Boolean,
    note: String,
    tweet: String
  }
};
</script>


<style scoped>
@import "../assets/styles/variables.css";
</style>
