<template>
  <Wrap :page="page">
    <article class="Block--nav" itemscope itemtype="http://schema.org/BlogPosting">
      <header
        class="Grid-extract--edge"
        :style="heroBlockColor"
      >
        <div class="container">
          <Aspect :ratio="page.attributes.ratio || '9/16'">
            <img
              v-if="page.attributes.assets.cover"
              :src="page.attributes.assets.cover"
              :alt="page.attributes.title"
            >
          </Aspect>
        </div>
        <div class="absolute inset-0">
          <div
            class="container relative h-full flex items-center justify-center"
            :class="heroImageBlend"
          >
            <h1
              class="Display Display--post text-center relative mx-auto w-full lg:w-4/6"
              :class="heroTitleInvertClass"
              itemprop="name headline"
            >
              {{ page.attributes.title }}
            </h1>
          </div>
        </div>
        <!-- <p class="post-meta">
          <time
            class="dt-published"
            :datetime="page.attributes.createdAt"
            itemprop="datePublished"
          >{{ formatDate(page.attributes.createdAt) }}</time>
        </p> -->
      </header>

      <div class="Block-sm-t Markdown" itemprop="articleBody">
        <slot name="default"/>
      </div>

      <a class="u-url" :href="page.attributes.permalink" hidden></a>
    </article>
  </Wrap>
</template>

<script>
import formatDate from '../utils/formatDate'
import Aspect from '../components/Aspect.vue'
import Wrap from '../components/Wrap.vue'

export default {
  components: {
    Aspect,
    Wrap,
  },

  props: ['page'],

  computed: {
    heroBlockColor() {
      return this.page.attributes.heroBlockColor && `background-color: ${this.page.attributes.heroBlockColor}`;
    },
    heroImageBlend() {
      return this.page.attributes.heroImageBlend && "BlendImage";
    },
    heroTitleInvertClass() {
      return [{
        "text-white": this.page.attributes.heroTitleInvert
      }]
    },
  },

  methods: {
    formatDate
  }
}
</script>

<style lang="postcss" scoped>
.Block--nav {
  padding-top: calc(theme(spacing.24) * var(--block-size-ratio));
}

.BlendImage {
  background-color: rgba(0,0,0,0.2);
}

/* figure within text column */
.Markdown >>> .Aspect {
  margin-top: calc(theme(spacing.10) * var(--block-size-ratio));
  margin-bottom: calc(theme(spacing.10) * var(--block-size-ratio));
}


</style>

