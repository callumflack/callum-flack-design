<template>
  <component
    :is="type"
    :to="post.attributes.permalink"
    :href="post.attributes.link"
    :target="target"
    rel="noopener noreferrer"
    class="Card"
  >
    <div class="Card-body flex">
      <!-- title -->
      <h3 class="Text w-7/12">
        {{ post.attributes.title }}
        <span v-if="post.attributes.linkFromCard" class="Link--blank">&#8599;</span>
      </h3>
      <div class="flex justify-between w-5/12">
        <!-- only show category on home -->
        <!-- <template v-if="$route.path === '/'">
          <div class="Text">{{ post.attributes.category }}</div>
        </template> -->
        <!-- tags -->
        <div>
          <span class="Text text-gray" v-for="(tag, index) in tagsWithFeaturedRemoved">
            <span v-if="index != 0">, </span><span class="capitalize">{{ tag }}</span>
          </span>
        </div>
        <!-- if writing, show reading time -->
        <template v-if="post.attributes.category === 'writing'">
          <span class="Text text-gray">{{ post.attributes.readingTime }} mins</span>
        </template>
        <!-- date -->
        <span class="Text text-gray">
          {{ formatListDate(post.attributes.createdAt) }}
        </span>
      </div>
    </div>
  </component>
</template>

<script>
import formatListDate from "../utils/formatListDate";
import Aspect from "../components/Aspect";

export default {
  components: {
    Aspect
  },
  props: ["post"],
  computed: {
    type() {
      if (!this.post.attributes.linkFromCard) {
        return "saber-link";
      }
      return "a";
    },
    target() {
      return this.post.attributes.linkFromCard ? "_blank" : "";
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
    formatListDate
  }
};
</script>

<style lang="postcss" scoped>
.Card {
  @apply block py-2 relative overflow-hidden cursor-pointer;
  @apply border-b;
  transition: all 500ms ease;
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* .Card:after {
  @apply border-b border-gray-200;
  @apply absolute bottom-0 left-0 w-full;
  content: "";
  margin-left: 0;
}

.Card:last-of-type:after {
  @apply border-transparent;
} */

.Card:before {
  @apply absolute left-0 bottom-0 bg-text h-px;
  content: "";
  right: 100%;
  transition: right 150ms ease-out;
  z-index: -1;
}

.Card:active:before,
.Card:focus:before,
.Card:hover:before {
  right: 0;
}

.Card:not(:last-of-type) {
  /* margin-bottom: calc(theme(spacing.5) * var(--space-ratio)); */
  @apply mb-2px;
}

/* .Card:before {
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
} */

/* CARD TYPE */

.Card:active *,
.Card:focus *,
.Card:hover * {
  @apply text-text !important;
}

.Card-body {
  @apply py-1;
  /* @apply pl-2; */
  /* @apply flex-grow; */
}

.Card-body-meta {
  @apply text-gray-600;
}

.Card-body-meta > * {
  @apply capitalize;
}

.Card-figure {
  @apply h-full relative;
}

.Card-figure-image {
  @apply absolute inset-0 object-cover w-full h-full;
  max-width: none;
  mix-blend-mode: multiply;
}

.Card-figure-blanklink {
  @apply absolute inset-0 flex justify-center items-center;
}

@screen lg {
  .Card-body {
    @apply py-2;
  }
  .Card-body > .Title {
    @apply pr-4;
  }
}
</style>

