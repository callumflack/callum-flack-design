<template lang="pug">
  article.Article.block--pb7.block--matchFixedMenu
    header.block--pb5.u-lg-size8of12.m-xAuto(role="banner")
      h1.Title.u-textCenter
        nuxt-link(:to="link") {{ title }}
      .u-block.u-textCenter
        time.Text.Text--sm(:date-time="date") {{ date | moment("MMMM Do, YYYY") }}
        span(v-if="readingtime")
          span.MetaSeparator • 
          span.Text.Text--sm {{ readingtime }} minutes
      
    c-image(v-if="heroImage" src="heroImage" post)

    main(role="main")
      .MarkdownScope
        no-ssr
          nuxtent-body(:body="body")
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
    body: Object
  }
};
</script>


<style scoped>
@import "../assets/styles/variables.css";
</style>
