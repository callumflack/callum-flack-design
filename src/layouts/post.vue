<template>
  <Wrap :page="page" kind="post">
    <article itemscope itemtype="http://schema.org/BlogPosting">
      <header class="Grid-extract--edge" :style="heroBlockColor">
        <!-- post hero with image -->
        <div
          v-if="page.attributes.hero && page.attributes.hero.showCover"
          class="container container--hero"
        >
          <!-- post image aspect -->
          <Aspect
            :ratio="page.attributes.hero && page.attributes.hero.ratio || '1/3.5'"
            :class="heroImageBlend"
          >
            <ImageDynamic
              v-if="page.attributes.hero && page.attributes.hero.showCover"
              :src="page.attributes.assets.cover"
              :alt="page.attributes.title"
            />
          </Aspect>
          <!-- post title aspect -->
          <div class="absolute inset-0">
            <div class="relative h-full flex items-center justify-center">
              <div class="container container--text" :class="heroTitleColor">
                <PostHeaderTitle :attributes="page.attributes"></PostHeaderTitle>
              </div>
            </div>
          </div>
        </div>

        <!-- post hero no image -->
        <HeaderTitleWrap v-else kind="post">
          <PostHeaderTitle :attributes="page.attributes"></PostHeaderTitle>
        </HeaderTitleWrap>
      </header>

      <!-- article -->
      <div class="Block-sm-t Markdown" itemprop="articleBody">
        <slot name="default" />
      </div>

      <a class="u-url" :href="page.attributes.permalink" hidden></a>
    </article>
  </Wrap>
</template>

<script>
import formatDate from "../utils/formatDate";
import formatListDate from "../utils/formatListDate";
import Aspect from "../components/Aspect.vue";
import PostHeaderTitle from "../components/PostHeaderTitle";
import HeaderTitleWrap from "../components/HeaderTitleWrap";
import ImageDynamic from "../components/ImageDynamic";
import Wrap from "../components/Wrap.vue";

/*

  Post layout component
  …uses different headline method to the header component
  when a hero image is shown.

*/

export default {
  components: {
    Aspect,
    HeaderTitleWrap,
    ImageDynamic,
    PostHeaderTitle,
    Wrap
  },

  props: ["page"],

  computed: {
    heroBlockColor() {
      return (
        this.page.attributes.hero &&
        this.page.attributes.hero.blockColor &&
        `background-color: ${this.page.attributes.hero.blockColor}`
      );
    },
    heroImageBlend() {
      return (
        this.page.attributes.hero &&
        this.page.attributes.hero.imageBlend &&
        "BlendImage"
      );
    },
    heroTitleWidth() {
      return (
        this.page.attributes.hero &&
        this.page.attributes.hero.titleWidth &&
        `${this.page.attributes.hero.titleWidth}`
      );
    },
    heroTitleColor() {
      return (
        this.page.attributes.hero &&
        this.page.attributes.hero.titleInvert &&
        "text-white"
      );
    },
    heroMetaClass() {
      return this.page.attributes.hero && this.page.attributes.hero.titleInvert
        ? "text-white"
        : "text-gray-600";
    },
    tagsWithFeaturedRemoved() {
      return this.page.attributes.tags.filter(x => x !== "featured");
    }
  },

  methods: {
    formatDate,
    formatListDate
  }
};
</script>

<style lang="postcss" scoped>
.BlendImage {
  @apply bg-text
  /* background-color: rgba(0, 0, 0, 0.2); */;
}
.BlendImage >>> img {
  opacity: 0.8;
}

/* Media within text column */
.Markdown >>> .AspectMedia {
  margin-top: calc(theme(spacing.10) * var(--block-size-ratio));
  margin-bottom: calc(theme(spacing.10) * var(--block-size-ratio));
}

/* .Sun svg {
  @apply border border-text rounded-full p-2;
} */
</style>
