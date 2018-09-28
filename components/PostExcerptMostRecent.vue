<template lang="pug">
//- .rp-t2(:style="postBlockColor")
article(:style="postBlockColor")
  header.b-pb2(role="banner")
    .Container.b-pt4.b-pb2
      .b-pb2.w-lg-5x6.m-xA
        h1.Title.u-textCenter.rm-b2 
          nuxt-link(:to="permalink") {{ title }}

        .Meta.u-textCenter.p-t1(v-if="category !== 'projects'", :class="postMetaColor")
          time(:date-time="date") {{ date | moment("YYYY.MM.DD") }}
          span.MetaSeparator • 
          span.u-textCapitalise {{ category }}
          span.MetaSeparator(v-if="readingTime" ) • 
          span(v-if="readingTime" ) {{ readingTime }} minutes
        .Meta.u-textCenter.p-t1(v-else, :class="postMetaColor")
          time(:date-time="date") {{ date | moment("YYYY") }}
          span.MetaSeparator • 
          span.u-textCapitalise {{ category }}

      nuxt-link.u-block.m-a0(v-if="heroImage", :class="heroExtractClasses", :to="permalink")
        .AspectRatio(:style="heroAspectStyle")
          .AspectRatio-object(:class="heroObjectBgClasses")
            ImageCld(:src="heroImage")

      .b-pt2
        .Scope-post.p-t3
          p {{ lede }} 
            nuxt-link.Text--italic(:to="permalink", :class="postLedeLink", :style="postLedeLinkColor") Continue reading
</template>

<script>
import moment from "vue-moment";
import ImageCld from "~/components/ImageLazyCldOrig.vue";

export default {
  components: {
    moment,
    ImageCld
  },
  props: {
    body: Object,
    blockColor: String,
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
    heroImageMultiply: {
      type: Boolean,
      default: false
    },
    heroRatio: {
      type: Number,
      default: 56.25
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
    postBlockColor() {
      return this.blockColor && `background-color: ${this.blockColor}`;
    },
    postMetaColor() {
      return !this.blockColor && "c-textLight";
    },
    postLedeLink() {
      return this.blockColor && "block-color-lede-link";
    },
    postLedeLinkColor() {
      return this.blockColor && `:root { --c-block-link: ${this.blockColor}; }`;
    },
    heroExtractClasses() {
      if (this.category === "projects") {
        return "Extract-super";
      }
      if (this.heroImageMultiply) {
        return "Extract-hero bg-image-transparent";
      }
      return "Extract-hero";
    },
    heroAspectClasses() {
      return this.heroRatio && `AspectRatio--${this.heroRatio}`;
    },
    heroAspectStyle() {
      return this.heroRatio && `padding-bottom: ${this.heroRatio}%`;
    },
    heroObjectBgClasses() {
      if (!this.heroImageNoShadow && !this.heroImageMultiply) {
        return "bg-text";
      }
      if (this.heroImageMultiply) {
        return "image-multiply";
      }
    }
  }
};
</script>

<style scoped>
.image-multiply {
  mix-blend-mode: multiply;
}
.bg-image-transparent {
  background-image: none !important;
}

.block-color-lede-link {
  text-shadow: 0.03em 0 var(--c-block-link), -0.03em 0 var(--c-block-link), 0 0.03em var(--c-block-link),
    0 -0.03em var(--c-block-link), 0.06em 0 var(--c-block-link), -0.06em 0 var(--c-block-link),
    0.09em 0 var(--c-block-link), -0.09em 0 var(--c-block-link), 0.12em 0 var(--c-block-link),
    -0.12em 0 var(--c-block-link), 0.15em 0 var(--c-block-link), -0.15em 0 var(--c-block-link) !important;
}
</style>

