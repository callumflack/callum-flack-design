<template>
  <Wrap :page="page" kind="post">
    <article itemscope itemtype="http://schema.org/BlogPosting">
      <!-- post hero with image -->
      <header v-if="page.hero && page.hero.showCover" class="Block-sm">
        <div class="Grid-extract--edge" :style="heroBlockColor">
          <div class="container container--hero ">
            <!-- post image aspect -->
            <Aspect
              :ratio="(page.hero && page.hero.ratio) || '1/3.5'"
              :class="heroImageBlend"
            >
              <ImageDynamic
                v-if="page.hero && page.hero.showCover"
                :src="page.assets.cover"
                :alt="page.title"
              />
            </Aspect>
            <!-- post title aspect -->
            <div class="absolute inset-0">
              <div class="relative h-full flex items-center justify-center">
                <div class="container container--text" :class="heroTitleColor">
                  <PostHeaderTitle :attributes="page"></PostHeaderTitle>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- post hero no image, no `Block-sm` -->
      <header v-else class="Grid-extract--edge" :style="heroBlockColor">
        <HeaderTitleWrap kind="post">
          <PostHeaderTitle :attributes="page"></PostHeaderTitle>
        </HeaderTitleWrap>
      </header>

      <!-- article -->
      <div class="Markdown" itemprop="articleBody">
        <slot name="default" />
      </div>

      <a class="u-url" :href="page.permalink" hidden></a>
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
// import mediumZoom from "medium-zoom";
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
    Wrap,
  },
  props: ["page"],
  computed: {
    heroBlockColor() {
      return (
        this.page.hero &&
        this.page.hero.blockColor &&
        `background-color: ${this.page.hero.blockColor}`
      );
    },
    heroImageBlend() {
      return this.page.hero && this.page.hero.imageBlend && "BlendImage";
    },
    heroTitleWidth() {
      return (
        this.page.hero && this.page.hero.titleWidth && `${this.page.hero.titleWidth}`
      );
    },
    heroTitleColor() {
      return this.page.hero && this.page.hero.titleInvert && "text-white";
    },
    heroMetaClass() {
      return this.page.hero && this.page.hero.titleInvert
        ? "text-white"
        : "text-gray-600";
    },
    tagsWithFeaturedRemoved() {
      return this.page.tags.filter(x => x !== "featured");
    },
  },
  /* mounted() {
    // https://codesandbox.io/s/github/francoischalifour/medium-zoom/tree/master/examples/vue
    mediumZoom(".Markdown img", {
      background: "#151515",
      margin: 100,
    });
  }, */
  methods: {
    formatDate,
    formatListDate,
  },
};
</script>

<style lang="postcss">
/* .medium-zoom-overlay,
.medium-zoom-image--opened {
  z-index: 99999;
}
.medium-zoom-overlay {
  @apply bg-brand-bg !important;
}
.medium-zoom-image--opened {
  margin: 0 3vw !important;
} */
</style>

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
</style>
