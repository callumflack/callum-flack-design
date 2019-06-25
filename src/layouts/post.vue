<template>
  <Wrap :page="page">
    <article class="Block--nav" itemscope itemtype="http://schema.org/BlogPosting">
      <header
        class="Grid-extract--edge"
        :style="heroBlockColor"
      >
        <div class="container">
          <Aspect :ratio="page.attributes.heroRatio || '1/3'">
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
            <div>
              <h1
                class="Display Display--post text-center s-m mx-auto w-full lg:w-9/12"
                :class="heroTitleInvertClass"
                itemprop="name headline"
              >
                {{ page.attributes.title }}
              </h1>
              <div class="text-center text-gray-600" :class="heroTitleInvertClass">
                <span class="Text--sm">
                  {{ formatDate(page.attributes.createdAt) }}
                </span>
                <span class="Text--sm inline-block mx-2px">&centerdot;</span>
                <span class="Text--sm" v-for="(tag, index) in page.attributes.tags">
                  <span v-if="index != 0">, </span><span class="capitalize">{{ tag }}</span>
                </span>
                <template v-if="page.attributes.category === 'writing'">
                  <span class="Text--sm inline-block mx-2px">&centerdot;</span>
                  <span class="Text--sm">{{ page.attributes.readingTime }} mins</span>
                </template>
              </div>
            </div>
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

