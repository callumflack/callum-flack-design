<template lang="pug">
  .Excerpt.b-mt3
    nuxt-link.u-block.Extract-edge(v-if="heroImage", :to="link")
      .AspectRatio.AspectRatio--16x9
        .AspectRatio-object(:class="{ 'bg-border': !heroImageNoShadow }")
          //- ImageCld(:src="heroImage")
          ImageCld(:src="thumbImage || heroImage")
    
    .b-my0.w-lg-8x12.m-xA
      h2.Heading.u-textCenter.p-t2.m-b2
        nuxt-link(:to="link") {{ title }}
      .Meta.u-textCenter.u-block
        time(:date-time="date") {{ date | moment("MMMM Do, YYYY") }}
        span.MetaSeparator(v-if="readingtime") • 
          span {{ readingtime }} minutes

    p.Text(v-if="lede")
      | {{ lede }} 
      nuxt-link.Text--italic(:to="link") Continue reading

    p.Text.c-textLight.u-textCenter.p-t3(v-if="summary")
      em {{ summary }} 

</template>


<script>
import ImageCld from "~/components/ImageLazyCldOrig.vue";

export default {
  components: {
    ImageCld
  },
  /* 
    Can refactor to accept a single post prop: 
    https://vuejs.org/v2/guide/components.html
    
    props: ["post"]

    …but it fails here. Prob due Nuxtent?
  */
  props: {
    published: Boolean,
    category: {
      type: String,
      default: "blog"
    },
    link: String,
    title: String,
    date: String,
    readingtime: Number,
    thumbImage: String,
    heroImage: String,
    heroImageNoShadow: {
      type: Boolean,
      default: false
    },
    lede: String,
    summary: String
  }
};
</script>


<style>
@import "../assets/styles/variables.css";

.Excerpt:first-of-type {
  margin: 0;
}
</style>
