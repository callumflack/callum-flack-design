<template>
  <component
    :is="type"
    :to="post.attributes.permalink"
    :href="post.attributes.link"
    :target="target"
    rel="noopener noreferrer"
    :class="cardWidth"
  >
    <div class="Card">
      <div v-if="post.attributes.assets.cover" class="Card-figure">
        <Aspect>
          <img
            v-if="!post.attributes.assetsInImgix"
            :src="post.attributes.assets.cover"
            :alt="post.attributes.title"
            class="Card-figure-image"
          >
          <ImageDynamic
            :src="post.attributes.assets.cover"
            :alt="post.attributes.title"
            class="Card-figure-image"
          />
        </Aspect>
      </div>
      <div class="Card-body">
        <h3 class="Title mb-1">
          {{ post.attributes.title }}
          <span v-if="post.attributes.linkFromCard" class="Link--blank">&#8599;</span>
        </h3>
        <div class="Card-body-meta">
          <!-- date -->
          <span class="Text--sm">
            {{ formatDate(post.attributes.createdAt) }}
          </span>
          <span class="Text--sm inline-block mx-2px">&mdash;</span>
          <!-- category & tags -->
          <span class="Text--sm">{{ post.attributes.category }}:</span>
          <span
            v-for="(tag, index) in tagsWithFeaturedRemoved"
            :key="index"
            class="Text--sm"
          >
            <span v-if="index != 0">, </span><span class="capitalize">{{ tag }}</span>
          </span>
          <!-- if writing, show reading time -->
          <template v-if="post.attributes.category === 'writing'">
            <span class="Text--sm inline-block mx-2px">&mdash;</span>
            <span class="Text--sm">{{ post.attributes.readingTime }} mins</span>
          </template>
        </div>
      </div>
    </div>
  </component>
</template>

<script>
import formatDate from "../utils/formatDate";
import Aspect from "../components/Aspect";
import ImageDynamic from "../components/ImageDynamic";

export default {
  components: {
    Aspect,
    ImageDynamic
  },
  props: ["post"],
  computed: {
    type() {
      if (this.post.attributes.linkFromCard) {
        return "a";
      }
      return "saber-link";
    },
    target() {
      return this.post.attributes.linkFromCard ? "_blank" : "";
    },
    cardWidth() {
      return this.post.attributes.fullFeaturedCard ? "w-full" : "w-full sm:w-1/2";
    },
    tagsWithFeaturedRemoved() {
      return this.post.attributes.tags
        .filter(x => x !== "featured")
    },
    /* formatTags() {
      return this.slice(0, -1).join(', ')
    }, */
    figureShade() {
      return this.post.attributes.assets.cover && "bg-gray-100"
    }
  },
  methods: {
    formatDate
  }
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
  width: calc(100% - 20px);
} */

/* .Card:last-of-type:after {
  @apply border-transparent;
} */

/* .Card:hover:after {
  @apply border-transparent;
} */

/* .Card-figure {
  @apply mb-2;
} */

.Card-body {
  @apply bg-brand-bg px-2 pt-2 pb-6;
}

.Card-body-meta {
  @apply text-gray-600;
}

.Card-body-meta > * {
  @apply capitalize;
}

/* .Card-figure {
  @apply h-full relative;
} */

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
    @apply px-3 pt-3 pb-12;
  }
  .Card-body > .Title {
    @apply w-3/4;
  }
}
</style>

