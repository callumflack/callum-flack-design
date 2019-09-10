<template>
  <ElementLink
    :href="post.attributes.link"
    :to="post.attributes.permalink"
    :external-link="
      post.attributes && post.attributes.card && post.attributes.card.externalLink
    "
    class="w-full"
  >
    <div class="Card">
      <!-- image -->
      <div
        v-if="post.attributes.assets && post.attributes.assets.cover"
        class="Card-figure"
      >
        <Aspect>
          <!-- v-if="post.attributes.assets.cover.local" -->
          <img
            :src="
              `${post.attributes.assets.cover}?w=500fit=crop&crop=entropy&auto=format&q=50`
            "
            :alt="post.attributes.title"
            class="Card-figure-image"
          />
          <!-- <ImageDynamic
            v-else
            :src="post.attributes.assets.cover"
            :alt="post.attributes.title"
            class="Card-figure-image"
          /> -->
        </Aspect>
      </div>
      <!-- body -->
      <div class="Card-body">
        <h3 class="Title leading-none mb-1">
          {{ post.attributes.title }}
          <CardExternalLink
            v-if="post.attributes.card && post.attributes.card.externalLink"
          />
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
  </ElementLink>
</template>

<script>
import formatListDate from "../utils/formatListDate";
import Aspect from "../components/Aspect";
import CardExternalLink from "../components/CardExternalLink";
import ElementLink from "../components/ElementLink";
// import ImageDynamic from "../components/ImageDynamic";

export default {
  components: {
    Aspect,
    CardExternalLink,
    ElementLink,
    // ImageDynamic,
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
/* 1. turn off when single slide shown */
.Card {
  @apply block relative cursor-pointer;
  /* @apply mr-3 pr-3 border-r; */ /* 1 */
}

.glide__slide:nth-of-type(1) .Card {
  /* @apply ml-0 pl-0 border-0; */ /* 1 */
}

.Card-body {
  @apply pt-3;
}

.Card-body-meta {
  @apply text-gray-600 leading-none;
}

.Card-figure {
  /* @apply relative; */
}

.Card-figure-image {
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
