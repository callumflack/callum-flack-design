<template lang="pug">
  .Article
    .u-lg-size7of12.m-xAuto(role="banner")
      h1.Title.u-textCenter
        nuxt-link(:to="link") {{ title }}
      .u-block.u-textCenter
        time.Text.Text--sm(:date-time="date") {{ date | moment("MMMM Do, YYYY") }}
        span(v-if="readingtime")
          span.MetaSeparator • 
          span.Text.Text--sm {{ readingtime }} minutes
    
    //- nuxt-link(:to="link")
    c-image(v-if="heroImage" :src="heroImage" post)
    
    p.Text.p-t2
      | {{ lede }} 
      nuxt-link(:to="link") Read

</template>


<script>
import LazyImage from "~/components/LazyImage.vue";

export default {
  name: "post-excerpt",
  components: {
    "c-image": LazyImage
  },
  props: {
    post: Boolean,
    published: String,
    link: String,
    title: String,
    date: String,
    readingtime: Number,
    heroImage: String,
    lede: String
  }
};
</script>


<style scoped>
@import "../assets/styles/variables.css";

.RuleMargin {
  margin-bottom: calc(1.25 * var(--s-3a));
}

.TimeMargin {
  margin-bottom: var(--s-3);
}
</style>
