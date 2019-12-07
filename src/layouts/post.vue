<template>
  <Wrap :page="page" :invert="page.hero && page.hero.titleInvert">
    <article itemscope itemtype="http://schema.org/BlogPosting">
      <!-- post hero with image -->
      <header
        v-if="page.hero && page.hero.showCover"
        :style="heroBlockColor"
        class="relative"
      >
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
        <!-- post title centered within image aspect -->
        <div class="absolute inset-0">
          <div class="relative h-full flex items-center justify-center">
            <PageTitle
              :page="page"
              :invert="page.hero && page.hero.titleInvert"
              show-meta
            >
            </PageTitle>
          </div>
        </div>
      </header>

      <!-- post hero title w/ no image -->
      <PageTitle
        v-else
        :page="page"
        :invert="page.hero && page.hero.titleInvert"
        show-meta
        :style="heroBlockColor"
        class="Block"
      >
      </PageTitle>

      <!-- article -->
      <main
        class="frame frame--article"
        :class="{ 'Block-sm-t': page.hero && page.hero.showCover }"
      >
        <div
          class="Markdown frame-area-a"
          :class="{ 'Block-sm-t': this.$route.path !== '/about' }"
          itemprop="articleBody"
        >
          <slot name="default" />
        </div>
      </main>
    </article>
  </Wrap>
</template>

<script>
import Aspect from "../components/Aspect";
import PageTitle from "../components/PageTitle.vue";
import ImageDynamic from "../components/ImageDynamic";
import Wrap from "../components/Wrap";
import formatDate from "../utils/formatDate";
import formatListDate from "../utils/formatListDate";
/*

  Post layout component
  …when a hero image is shown, we use a different headline method to the header component

*/
export default {
  components: {
    Aspect,
    ImageDynamic,
    PageTitle,
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
  methods: {
    formatDate,
    formatListDate,
  },
};
</script>

<style lang="postcss" scoped>
.BlendImage {
  @apply bg-text;
  /* background-color: rgba(0, 0, 0, 0.2); */
}
.BlendImage >>> img {
  opacity: 0.333;
}

/* Media within text column */
.Markdown >>> .AspectMedia {
  /* margin-top: calc(theme(spacing.10) * var(--block-size-ratio));
  margin-bottom: calc(theme(spacing.10) * var(--block-size-ratio)); */
  margin-top: var(--spacing7);
  margin-bottom: var(--spacing7);
}
</style>
