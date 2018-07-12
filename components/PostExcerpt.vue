<template lang="pug">
  .Excerpt
    .u-lg-size10of12.m-xAuto
      h1.Title.u-textCenter
        nuxt-link(:to="link") {{ title }}
      .u-block.Text--sm.c-textLight.u-textCenter
        time(:date-time="date") {{ date | moment("MMMM Do, YYYY") }}
        span.MetaSeparator(v-if="readingtime") • 
          span {{ readingtime }} minutes
    
    nuxt-link.u-block.figure(v-if="heroImage", :to="link")
      c-image(:src="heroImage" post wrappedInLink)
    
    p.Text.p-t2(v-if="lede")
      | {{ lede }} 
      nuxt-link(:to="link") Read

    p.Text.c-textLight.u-textCenter.p-t3(v-if="summary")
      em {{ summary }} 

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
    lede: String,
    summary: String
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
