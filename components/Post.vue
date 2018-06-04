<template lang="pug">
  article.Article.block--pb7.block--matchFixedMenu
    header.block--pb5.u-lg-size5of6.m-xAuto(role="banner")
      h1.Title.u-textCenter
        nuxt-link(:to="link") {{ title }}
      .u-block.u-textCenter
        span(v-if="readingtime")
          span.MetaSeparator.c-textLight • 
          span.Meta.c-textLight {{ readingtime }} minutes
    
    main(role="main")
      .container
        .TypeScope
          no-ssr
            nuxtent-body(:body="body")
</template>


<script>
export default {
  name: "post",
  components: {},
  props: {
    published: Boolean,
    link: String,
    title: String,
    date: String,
    readingtime: Number,
    body: Object
  }
};
</script>


<style scoped>
@import "../assets/styles/variables.css";

.MetaSeparator {
  margin-left: var(--s-2);
  margin-right: var(--s-2);
}
</style>
