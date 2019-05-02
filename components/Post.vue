<template lang="pug">
  //- article(:style="postExcerptBlockColor")
  article
    header(role="banner", v-if="heroImage", :style="heroBlockColor")
      .Container
        .m-a0(:class="heroExtractClasses")
          .AspectRatio(:style="heroAspectStyle")
            //- .AspectRatio-object(:class="{ 'bg-text': !heroImageNoShadow }")
            //- .AspectRatio-object(:class="heroObjectBgClasses")
            .AspectRatio-object(:style="heroBlockColor")
              LazyImage(
                :src="heroImage"
                :alt="title"
              )

    main(role="main", v-if="body", :class="spaceWithoutHeroClass")
      .Container
        .b-pb05
          h1.Supertitle.m-b3.w-sm-10x12
            | {{ title }}
          .Meta.c-text-light.p-t1(v-if="category !== 'projects'")
            time(:date-time="date") {{ date | moment("YYYY.MM.DD") }}
            span.MetaSeparator •
            span.u-textCapitalise {{ category }}
            span.MetaSeparator(v-if="readingTime" ) •
            span(v-if="readingTime" ) {{ readingTime }} minutes
          .Meta.c-text-light.p-t1(v-else)
            time(:date-time="date") {{ date | moment("YYYY") }}
            span.MetaSeparator •
            span.u-textCapitalise {{ category }}
            //- span.MetaSeparator •
            //- span {{ tags }}

        nuxtent-body.Scope-post(:body="body", :class="scopeClasses")

</template>

<script>
import moment from "vue-moment";
import LazyImage from "~/components/LazyImage.vue";

export default {
  name: "Post",
  components: {
    moment,
    LazyImage
  },
  props: {
    body: Object,
    blockColor: {
      type: String,
      default: "transparent"
    },
    category: {
      type: String,
      required: true
    },
    date: String,
    heroImage: String,
    heroImageNoShadow: {
      type: Boolean,
      default: false
    },
    heroRatio: {
      type: Number,
      default: 62.5
    },
    lede: String,
    link: String,
    mostRecentPost: {
      type: Boolean,
      default: false
    },
    note: String,
    permalink: String,
    published: Boolean,
    readingTime: Number,
    tags: {
      type: String,
      default: null
    },
    title: String,
    updated: Boolean
  },
  computed: {
    postExcerptLede() {
      return this.$route.name === "blog-page" && this.mostRecentPost;
    },
    heroBlockColor() {
      return this.blockColor && `background-color: ${this.blockColor}`;
    },
    heroExtractClasses() {
      if (this.category === "projects") {
        return "Extract-super";
      }
      return "Extract-hero";
    },
    spaceWithoutHeroClass() {
      if (this.heroImage) {
        return "b-pt075";
      }
      return "b-ptTitle";
    },
    heroAspectClasses() {
      return this.heroRatio && `AspectRatio--${this.heroRatio}`;
    },
    heroAspectStyle() {
      return this.heroRatio && `padding-bottom: ${this.heroRatio}%`;
    },
    heroObjectBgClasses() {
      // const shadow = !this.heroImageNoShadow && "bg-text";
      // const project = this.category === "projects" && "Project-hero";
      // return { shadow, project };
      // if (this.category === "projects" && !this.heroImageNoShadow) {
      //   return "Project-hero-shadow bg-text";
      // }
      // return "bg-text";
      return !this.heroImageNoShadow && "bg-text";
    },
    scopeClasses() {
      // return this.category === "essays" && "Scope-post-figure Scope-post-dropcap";
      return this.category === "essay" && "Scope-post-dropcap";
    }
  }
};
</script>
