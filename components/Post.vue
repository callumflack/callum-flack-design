<template lang="pug">
  article
    header(role="banner")
      .Container
        .m-a0(v-if="heroImage", :class="heroExtractClasses")
          .AspectRatio(:style="heroAspectStyle")
            //- .AspectRatio-object.Project-hero.bg-text(:class="heroFrameClasses")
            .AspectRatio-object(:class="{ 'bg-text': !heroImageNoShadow }")
              ImageCld(:src="heroImage")
        .b-py2.w-md-5x6.m-xA
          h1.Title.u-textCenter.p-t2.m-b3 {{ title }}
          .Meta.u-textCenter(v-if="category !== 'projects'")
            time(:date-time="date") {{ date | moment("MMMM Do, YYYY") }}
            span.MetaSeparator • 
            span {{ readingTime }} minutes
          .Meta.u-textCenter(v-else)
            time(:date-time="date") {{ date | moment("YYYY") }}
            span.MetaSeparator •
            span {{ tags }}

    main(role="main")
      .Container.p-t2
        .Scope-post(:class="scopeClasses")
          // no-ssr
          nuxtent-body(:body="body")

    //- .Post-note.HeadingSpace(v-if="updated || note")
      hr.ParagraphSpace
      p.fs-text-sm.c-textLight(v-if="updated") Updated: {{ updated }}
      p.fs-text-sm.c-textLight(v-if="note", v-html="note")
    
</template>

<script>
import moment from "vue-moment";
import ImageCld from "~/components/ImageLazyCldOrig.vue";

export default {
  name: "post",
  components: {
    moment,
    ImageCld
  },
  props: {
    body: Object,
    category: String,
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
    link: String,
    note: String,
    published: Boolean,
    readingTime: Number,
    src: String,
    tags: {
      type: String,
      default: null
    },
    title: String,
    tweet: String,
    updated: Boolean
  },
  computed: {
    heroExtractClasses() {
      if (this.category === "projects") {
        return "Extract-super";
      }
      return "Extract-hero";
    },
    heroAspectClasses() {
      return this.heroRatio && `AspectRatio--${this.heroRatio}`;
    },
    heroAspectStyle() {
      return this.heroRatio && `padding-bottom: ${this.heroRatio}%`;
    },
    scopeClasses() {
      // return this.category === "essays" && "Scope-post-figure Scope-post-dropcap";
      return this.category === "essays" && "Scope-post-dropcap";
    }
  }
};
</script>
