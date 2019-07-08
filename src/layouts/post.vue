<template>
  <Wrap :page="page" kind="post">
    <article itemscope itemtype="http://schema.org/BlogPosting">
      <header class="Grid-extract--edge" :style="heroBlockColor">
        <!-- post image aspect -->
        <div class="container container--hero">
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
        </div>
        <!-- post title aspect -->
        <div class="absolute inset-0">
          <div class="container relative h-full flex items-center justify-center">
            <div class="container container--text" :class="heroTitleColor">
              <!-- post title -->
              <h1
                class="Display s-m"
                :class="heroTitleWidth"
                itemprop="name headline"
              >
                {{ page.attributes.title }}
              </h1>
              <!-- post meta -->
              <div class="Text--sm" :class="heroMetaClass">
                <!-- date -->
                <time
                  v-if="page.attributes.category === 'writing'"
                  :datetime="page.attributes.createdAt"
                  itemprop="datePublished"
                >{{ formatDate(page.attributes.createdAt) }}</time>
                <time
                  v-else
                  :datetime="page.attributes.date"
                  itemprop="datePublished"
                >{{ formatListDate(page.attributes.date) }}</time>
                <!-- category & tags -->
                <span class="Text--sm inline-block mx-2px">&mdash;</span>
                <span class="Text--sm inline-block capitalize">
                  {{ page.attributes.category }}:
                </span>
                <span v-for="(tag, index) in tagsWithFeaturedRemoved" :key="index" class="Text--sm">
                  <span v-if="index != 0">,</span>
                  <span class="lowercase">{{ tag }}</span>
                </span>
                <!-- reading time -->
                <template v-if="page.attributes.category === 'writing'">
                  <span class="Text--sm inline-block mx-2px">&mdash;</span>
                  <span class="Text--sm">{{ page.attributes.readingTime }} mins</span>
                </template>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- article -->
      <div class="Block-sm-t Markdown" itemprop="articleBody">
        <slot name="default" />
      </div>

      <!-- article ender -->
      <!-- <div class="Block-t relative flex justify-center items-center">
        <saber-link to="/">
          <icon
            name="sun"
            height="2em"
            width="2em"
          />
        </saber-link>
      </div>-->

      <a class="u-url" :href="page.attributes.permalink" hidden></a>
    </article>
  </Wrap>
</template>

<script>
import formatDate from "../utils/formatDate";
import formatListDate from "../utils/formatListDate";
import Aspect from "../components/Aspect.vue";
import ImageDynamic from "../components/ImageDynamic";
import Wrap from "../components/Wrap.vue";
// import '../components/icons/sun';

export default {
  components: {
    Aspect,
    ImageDynamic,
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
