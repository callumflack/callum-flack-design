<template>
  <component
    :is="type"
    :to="post.attributes.permalink"
    :href="post.attributes.link"
    :target="target"
    :rel="rel"
    :class="cardWidth"
  >
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
        <h3 class="Title mb-1">
          {{ post.attributes.title }}
          <CardExternalLink
            v-if="post.attributes.card && post.attributes.card.externalLink"
          />
        </h3>
        <div class="Card-body-meta">
          <!-- date -->
          <time :date-time="post.attributes.createdAt" class="Text--sm">
            {{ formatListDate(post.attributes.createdAt) }}
          </time>
          <span class="Text--sm inline-block mx-2px">&mdash;</span>
          <!-- category & tags -->
          <span class="Text--sm capitalize">{{ post.attributes.category }}</span>
          <!-- <span
            v-for="(tag, index) in tagsWithFeaturedRemoved"
            :key="index"
            class="Text--sm"
          >
            <span v-if="index != 0">, </span><span>{{ tag }}</span>
          </span> -->
          <!-- if writing, show reading time -->
          <!-- <template v-if="post.attributes.category === 'writing'">
            <span class="Text--sm inline-block mx-2px">&mdash;</span>
            <span class="Text--sm">{{ post.attributes.readingTime }} mins</span>
          </template> -->
        </div>
      </div>
    </div>
  </component>
</template>

<script>
import formatListDate from "../utils/formatListDate";
import Aspect from "../components/Aspect";
import CardExternalLink from "../components/CardExternalLink";
import ImageDynamic from "../components/ImageDynamic";

export default {
  components: {
    Aspect,
    CardExternalLink,
    ImageDynamic,
  },
  props: ["post"],
  computed: {
    type() {
      return this.post.attributes.card && this.post.attributes.card.externalLink
        ? "a"
        : "saber-link";
    },
    target() {
      return this.post.attributes.card && this.post.attributes.card.externalLink
        ? "_blank"
        : "";
    },
    rel() {
      return (
        this.post.attributes.card &&
        this.post.attributes.card.externalLink &&
        "noopener noreferrer"
      );
    },
    cardWidth() {
      return this.post.attributes.card && this.post.attributes.card.full
        ? "w-full"
        : "w-full sm:w-1/2 lg:w-1/3";
    },
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
  /* @apply h-full; */
  margin: -7px;
  padding: 7px;
  transition: all 500ms ease;
}

/* .Card:not(:last-of-type) {
  margin-bottom: calc(theme(spacing.5) * var(--space-ratio));
} */

.Card:before {
  @apply absolute h-full w-full left-0 top-0 z-10;
  @apply opacity-0;
  @apply border border-black rounded-lg;
  content: "";
  pointer-events: none;
}

@keyframes hoverAnimation {
  0% {
    opacity: 1;
    transform: scale(0.96);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.Card:hover:before {
  animation: hoverAnimation 0.25s cubic-bezier(0.31, 1, 0.34, 1) forwards;
}

/* .Card:after {
  @apply border-b border-gray-200;
  @apply absolute bottom-0;
  content: "";
  margin-left: 0;
  width: calc(100% - 14px);
} */

.Card:last-of-type:after {
  /* @apply border-transparent; */
}

.Card:hover:after {
  @apply border-transparent;
}

/* .Card-figure {
  @apply mb-2;
} */

.Card-body {
  @apply bg-brand-bg pt-3 pb-6;
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
  /* .Card-figure {
    @apply mb-3;
  } */
  .Card-body {
    @apply pt-3 pb-12;
    /* @apply px-3; */
  }
  .Card-body > .Title {
    @apply w-3/4;
  }
}
</style>
