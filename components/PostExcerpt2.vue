<template lang="pug">
.Excerpt
  //- article.Excerpt.b-mt2
  nuxt-link.b-mt2.u-block(:to="permalink")
    //- hr.b-my1
    .Excerpt-container
      .Meta.c-textLight.rm-b2
        time(:date-time="date") {{ date | moment("YYYY.MM.DD") }}
        span.MetaSeparator •
        span.u-textCapitalise(v-if="category") {{ category }}
        //- span.MetaSeparator(v-if="readingTime" ) •
        //- span(v-if="readingTime" ) {{ readingTime }} minutes
      h2.Subtitle.fw-500.p-t1.m-b0
          | {{ title }}
          span.fs-scale-reset
            span.Meta.c-textLight.Excerpt-category(v-if="category") {{ category }}

    //- Old shit…
    //- .p-t3
      .Scope-post
        nuxtent-body(v-if="showFullArticle", :body="body")
        p(v-else)
          | {{ lede }}
          nuxt-link.fs-italic(:to="permalink") Continue reading

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
        nuxt-link.fs-italic(to="/blog") Continue reading
</template>


<script>
import ImageCld from "~/components/ImageLazy.vue";
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
  /* margin-top: calc(2.25 * var(--rs-block-space)); */

  @media (--mo) {
    /* matches .Project on mobile-only */
    /* margin-top: calc(1.5 * var(--rs-block-space)); */
  }
}

.Excerpt:first-of-type {
  margin: 0;
  padding: 0;
}

.Excerpt-container {
  border: 1px solid var(--c-text);
  padding: var(--s-4);
}

.Excerpt-category {
  display: inline-block;
  margin-left: var(--s-2);
  text-transform: capitalize;
  transform: translateY(-0.9em);
}
</style>
