<template>
  <saber-link :to="post.attributes.permalink" class="w-full">
    <div class="Card">
      <!-- image -->
      <div
        v-if="post.attributes.assets && post.attributes.assets.cover"
        class="Card-figure"
      >
        <Aspect>
          <img
            v-if="post.attributes.assets.cover.local"
            :src="post.attributes.assets.cover"
            :alt="post.attributes.title"
            class="Card-figure-image"
          />
          <ImageDynamic
            v-else
            :src="post.attributes.assets.cover"
            :alt="post.attributes.title"
            class="Card-figure-image"
          />
        </Aspect>
      </div>
      <!-- if no image, quote -->
      <div
        v-else-if="post.attributes.card && post.attributes.card.quote"
        class="Card-figure"
        :style="`background-color:${post.attributes.card.bgColor}`"
      >
        <Aspect> </Aspect>
        <div class="absolute inset-0 flex items-center">
          <p class="Title mx-4 lg:w-3/4">{{ post.attributes.card.quote }}</p>
        </div>
      </div>
      <!-- body -->
      <div class="Card-body">
        <h3 class="Text">
          {{ post.attributes.title }}
        </h3>
        <div class="Card-body-meta">
          <time :date-time="post.attributes.createdAt" class="Text--sm">
            {{ formatListDate(post.attributes.createdAt) }}
          </time>
          <span class="Text--sm inline-block mx-2px tracking-tighter">
            &mdash;&mdash;
          </span>
          <!-- <span class="Text--sm capitalize">{{ post.attributes.category }}</span> -->
          <span
            v-for="(tag, index) in tagsWithFeaturedRemoved"
            :key="index"
            class="Text--sm"
          >
            <span v-if="index != 0">, </span><span class="capitalize">{{ tag }}</span>
          </span>
          <!-- <template v-if="post.attributes.category === 'writing'">
            <span class="Text--sm inline-block mx-2px">&mdash;</span>
            <span class="Text--sm">{{ post.attributes.readingTime }} mins</span>
          </template> -->
        </div>
      </div>
    </div>
  </saber-link>
</template>

<script>
import formatListDate from "../utils/formatListDate";
import Aspect from "../components/Aspect";
import ImageDynamic from "../components/ImageDynamic";

export default {
  components: {
    Aspect,
    ImageDynamic,
  },
  props: ["post"],
  computed: {
    tagsWithFeaturedRemoved() {
      return this.post.attributes.tags.filter(x => x !== "featured");
    },
    /* formatTags() {
      return this.slice(0, -1).join(', ')
    }, */
    figureShade() {
      return this.post.attributes.assets.cover && "bg-gray-100";
    },
  },
  methods: {
    formatListDate,
  },
};
</script>

<style lang="postcss" scoped>
.Card {
  @apply block relative cursor-pointer;
  @apply mr-3 pr-3 border-r;
}

.glide__slide:nth-of-type(1) .Card {
  @apply ml-0 pl-0 border-0;
}

.Card-body {
  @apply bg-brand-bg pt-3;
  /* @apply px-2; */
}

.Card-body-meta {
  @apply text-gray-600;
}

/* .Card-body-meta > * {
  @apply capitalize;
} */

.Card-figure {
  @apply relative;
}

.Card-figure-image {
  /* @apply absolute inset-0 object-cover w-full h-full;
  max-width: none; */
  mix-blend-mode: multiply;
}

.Card-figure-blanklink {
  @apply absolute inset-0 flex justify-center items-center;
}

@screen lg {
  .Card-body {
    @apply pt-3;
  }
  .Card-body > .Title {
    @apply w-3/4;
  }
}
</style>
