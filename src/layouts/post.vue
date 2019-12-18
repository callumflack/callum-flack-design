<template>
  <Wrap :page="page" :invert="page.hero && page.hero.titleInvert">
    <article itemscope itemtype="http://schema.org/BlogPosting">
      <PageTitle
        :page="page"
        :invert="page.hero && page.hero.titleInvert"
        :style="heroBlockColor"
        show-meta
        class="Block-md-b"
      >
        <!-- if post hero image -->
        <template v-if="page.hero && page.hero.showCover" v-slot:image>
          <ImageDynamic :src="page.assets.cover" :alt="page.title" cover />
          <div class="absolute inset-0" :style="heroImageBlend"></div>
        </template>
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
  …with hero image slot
  …and article body

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
      return (
        this.page.hero &&
        this.page.hero.imageBlend &&
        `background-color: rgba(0,0,0,${this.page.hero.imageBlend})`
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
/* Media within text column */
.Markdown >>> .AspectMedia {
  /* margin-top: calc(theme(spacing.10) * var(--block-size-ratio));
  margin-bottom: calc(theme(spacing.10) * var(--block-size-ratio)); */
  margin-top: var(--spacing7);
  margin-bottom: var(--spacing7);
}
</style>
