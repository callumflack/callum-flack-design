<template lang="pug">
  article.Excerpt.b-pt3
    .Extract-edge
      .FlexGrid.FlexGrid--sm
        .w-3x12(v-if="heroImage")
          nuxt-link.u-block(:to="permalink")
            //- .AspectRatio(:style="heroAspectStyle")
            .AspectRatio
              .AspectRatio-object.bg-text
                ImageCld(:src="thumbImage || heroImage")
        .w-9x12
          .Meta.rm-b2
            time(:date-time="date") {{ date | moment("YYYY.MM.DD") }}
            span.MetaSeparator • 
            span(v-if="category") {{ category }}
            //- span.MetaSeparator(v-if="readingTime" ) • 
            //- span(v-if="readingTime" ) {{ readingTime }} minutes
          h2.Subtitle.fw-500.rm-b2.p-t1
            nuxt-link(:to="permalink") {{ title }}
          .p-t3
            .Scope-post
              nuxtent-body(v-if="showFullArticle", :body="body")
              p(v-else)
                | {{ lede }} 
                nuxt-link.Text--italic(:to="permalink") Continue reading

  //- .Extract-hero.m-a0
    .AspectRatio.AspectRatio--16x9
      .AspectRatio-object.bg-text
        ImageCld(
          src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1527842531/okok/aesthetics-nembrotha-aurea.jpg"
        )
    .Excerpt
      header.b-my2.w-lg-5x6.m-xA(role="banner")
        h1.Title.u-textCenter.p-t3 
          nuxt-link(to="/blog") The brief, the scope and the dance
        .Meta.u-textCenter.u-block
          time July 2nd, 2018
          span.MetaSeparator • 
            span 8 minutes
      p.Text
        | Frustrating, ugly websites that don't live up to their promise are the result of a misunderstood brief and a lack of real scope. How can makers and clients work together to ensure better solutions? By reframing brief and scope as communication tools for collaboratively dealing with project realities as they unfold. 
        nuxt-link.Text--italic(to="/blog") Continue reading
</template>


<script>
import ImageCld from "~/components/ImageLazyCldOrig.vue";
import moment from "vue-moment";

export default {
  components: {
    ImageCld,
    moment
  },
  /* 
    Can refactor to accept a single post prop: 
    https://vuejs.org/v2/guide/components.html
    
    props: ["post"]

    …but it fails here. Prob due Nuxtent?
  */
  props: {
    body: {
      type: Object,
      default: null
    },
    category: {
      type: String,
      default: "blog"
    },
    date: String,
    heroImage: String,
    heroImageNoShadow: {
      type: Boolean,
      default: false
    },
    heroRatio: {
      type: Number,
      default: 56.25
    },
    lede: String,
    permalink: String,
    published: Boolean,
    readingTime: Number,
    showOnHomePage: {
      type: Boolean,
      default: false
    },
    showFullArticle: {
      type: Boolean,
      default: false
    },
    summary: String,
    tags: String,
    thumbImage: String,
    title: String
  },
  computed: {
    /* heroObjectBgClasses() {
      return this.heroImageNoShadow ? "bg-text" : "bg-border";
    }, */
    heroAspectStyle() {
      return this.heroRatio && `padding-bottom: ${this.heroRatio}%`;
    }
  }
};
</script>


<style>
@import "../assets/styles/variables.css";

.Excerpt {
  /* slight increase on .b-mt3 */
  /* margin-top: calc(2.25 * var(--responsive-space)); */

  @media (--mo) {
    /* matches .Project on mobile-only */
    /* margin-top: calc(1.5 * var(--responsive-space)); */
  }
}

.Excerpt:first-of-type {
  margin: 0;
  padding: 0;
}
</style>
