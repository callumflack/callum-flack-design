<template lang="pug">
  article(:class="containerClasses")
    header(role="header")
      //- nuxt-link.u-block(v-if="heroImage", :class="heroExtractClasses", :to="permalink")
      nuxt-link.u-block.Extract-edge(v-if="heroImage", :to="permalink")
        .AspectRatio(:style="heroAspectStyle")
          .AspectRatio-object.bg-text
            ImageCld(:src="thumbImage || heroImage")
      //- hr(v-else)

      .b-py05.w-lg-5x6
        h2.Subtitle.p-t2.m-b2
          nuxt-link(:to="permalink") {{ title }}

        .Meta.c-text-light
          //- time(:date-time="date") {{ date | moment("MMMM Do, YYYY") }}
          time(:date-time="date") {{ date | moment("YYYY.MM.DD") }}
          span.MetaSeparator •
          span.u-textCapitalise(v-if="category") {{ category }}
          span.MetaSeparator(v-if="readingTime" ) •
          span(v-if="readingTime" ) {{ readingTime }} minutes

    main(role="main")
      //- .Scope-post(v-if="showFullArticle")
        nuxtent-body(:body="body")
      p.Text
        | {{ lede }}
        nuxt-link.fs-italic(:to="permalink") Continue reading

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
    containerClasses() {
      if (this.$route.name === "index") {
        return "Container";
      }
      return "Excerpt b-pt2";
    },
    heroExtractClasses() {
      if (this.showOnHomePage === true) {
        return "Extract-hero";
      }
      return "Extract-edge";
    },
    /* heroObjectBgClasses() {
      return this.heroImageNoShadow ? "bg-text" : "bg-border";
    }, */
    heroAspectStyle() {
      return this.heroRatio && `padding-bottom: ${this.heroRatio}%`;
    },
    titleBlockClasses() {
      if (this.showOnHomePage === true) {
        return "b-py2 w-lg-5x6";
        // return "b-py2";
      }
      return "b-py05 w-lg-5x6";
      // return "b-py0";
    },
    mainAlignClasses() {
      return !this.showOnHomePage === true && "p-t1";
    }
  }
};
</script>


<style>
@import "../assets/styles/variables.css";

.Excerpt:first-of-type {
  margin: 0;
  padding: 0;
}
</style>
