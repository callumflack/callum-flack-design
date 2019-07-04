<template>
  <Wrap :page="page" kind="post">
    <article itemscope itemtype="http://schema.org/BlogPosting">
      <header
        class="Grid-extract--edge"
        :style="heroBlockColor"
      >
        <!-- post image aspect -->
        <div class="container">
          <Aspect :ratio="page.attributes.heroRatio || '1/3.5'">
            <img
              v-if="page.attributes.heroShowCover"
              :src="page.attributes.assets.cover"
              :alt="page.attributes.title"
            >
          </Aspect>
        </div>
        <!-- post title aspect -->
        <div class="absolute inset-0">
          <div
            class="container relative h-full flex items-center justify-center"
            :class="heroImageBlend"
          >
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
              <div
                class="Text--sm"
                :class="heroMetaClass"
              >
                <!-- date -->
                <time
                  v-if="page.attributes.category === 'writing'"
                  :datetime="page.attributes.createdAt"
                  itemprop="datePublished"
                >
                  {{ formatDate(page.attributes.createdAt) }}
                </time>
                <time
                  v-else
                  :datetime="page.attributes.date"
                  itemprop="datePublished"
                >
                  {{ formatListDate(page.attributes.date) }}
                </time>
                <!-- category & tags -->
                <span class="Text--sm inline-block mx-2px">&centerdot;</span>
                <span class="Text--sm inline-block capitalize">
                  {{ page.attributes.category }}:
                </span>
                <span class="Text--sm" v-for="(tag, index) in tagsWithFeaturedRemoved">
                  <span v-if="index != 0">, </span><span class="">{{ tag }}</span>
                </span>
                <!-- reading time -->
                <template v-if="page.attributes.category === 'writing'">
                  <span class="Text--sm inline-block mx-2px">&centerdot;</span>
                  <span class="Text--sm">{{ page.attributes.readingTime }} mins</span>
                </template>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- article -->
      <div class="Block-sm-t Markdown" itemprop="articleBody">
        <slot name="default"/>
      </div>

      <a class="u-url" :href="page.attributes.permalink" hidden></a>
    </article>
  </Wrap>
</template>

<script>
import formatDate from '../utils/formatDate'
import formatListDate from '../utils/formatListDate'
import Aspect from '../components/Aspect.vue'
import Wrap from '../components/Wrap.vue'

export default {
  components: {
    Aspect,
    Wrap,
  },

  props: [
    'page'
  ],

  computed: {
    heroBlockColor() {
      return this.page.attributes.heroBlockColor && `background-color: ${this.page.attributes.heroBlockColor}`;
    },
    heroImageBlend() {
      return this.page.attributes.heroImageBlend && "BlendImage";
    },
    heroTitleWidth() {
      return this.page.attributes.heroTitleWidth
        ? `${this.page.attributes.heroTitleWidth}`
        : "lg:w-full";
    },
    heroTitleColor() {
      return this.page.attributes.heroTitleInvert && "text-white";
    },
    heroMetaClass() {
      return this.page.attributes.heroTitleInvert ? "text-white" : "text-gray-600";
    },
    tagsWithFeaturedRemoved() {
      return this.page.attributes.tags
        .filter(x => x !== "featured")
    }
  },

  methods: {
    formatDate,
    formatListDate
  }
}
</script>

<style lang="postcss" scoped>
.BlendImage {
  background-color: rgba(0,0,0,0.2);
}

/* Media within text column */
.Markdown >>> .AspectMedia {
  margin-top: calc(theme(spacing.10) * var(--block-size-ratio));
  margin-bottom: calc(theme(spacing.10) * var(--block-size-ratio));
}
</style>

