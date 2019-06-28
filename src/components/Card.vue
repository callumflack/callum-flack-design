<template>
  <component 
    :is="type" 
    :to="post.attributes.permalink"
    :href="post.attributes.cardlink"
    :target="target"
    rel="noopener noreferrer"
    class="Card"
  >
    <div class="flex">
      <div class="Card-body w-2/3 lg:w-3/4">
        <h3 class="Title mb-2px">
          {{ post.attributes.title }}
        </h3>
        <div class="Card-body-meta">
          <!-- date -->
          <span class="Text--sm">
            {{ formatDate(post.attributes.createdAt) }}
          </span>
          <span class="Text--sm inline-block mx-2px">&centerdot;</span>
          <!-- only show category on home -->
          <template v-if="$route.path === '/'">
            <span class="Text--sm">{{ post.attributes.category }}</span>
            <span class="Text--sm inline-block mx-2px">&centerdot;</span>
          </template>
          <!-- tags -->
          <span class="Text--sm" v-for="(tag, index) in tagsWithFeaturedRemoved">
            <span v-if="index != 0">, </span><span class="capitalize">{{ tag }}</span>
          </span>
          <!-- if writing, show reading time -->
          <template v-if="post.attributes.category === 'writing'">
            <span class="Text--sm inline-block mx-2px">&centerdot;</span>
            <span class="Text--sm">{{ post.attributes.readingTime }} mins</span>
          </template>

        </div>
      </div>
      <div class="w-1/3 lg:w-1/4">
        <div class="Card-figure" :class="figureShade">
          <img
            v-show="post.attributes.assets.cover"
            :src="post.attributes.assets.cover"
            :alt="post.attributes.title"
            class="Card-figure-image"
          >
          <a
            v-if="post.attributes.cardlink"
            :href="post.attributes.cardlink"
            target="_blank"
            rel="noopener noreferrer"
            class="Card-figure-blanklink"
          >
            <span class="Blank">&#8599;</span>
          </a>
        </div>
      </div>
    </div>
  </component>
</template>

<script>
import formatDate from "../utils/formatDate";
import Aspect from "../components/Aspect";

export default {
  components: {
    Aspect
  },
  props: ["post"],
  computed: {
    type() {
      if (!this.post.attributes.cardlink) {
        return "saber-link";
      }
      return "a";
    },
    target() {
      return this.post.attributes.cardlink ? "_blank" : "";
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
  margin: -10px -8px;
  padding: 10px 8px;
  transition: all 500ms ease;
}

.Card:not(:last-of-type) {
  margin-bottom: calc(theme(spacing.5) * var(--space-ratio));
}

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

.Card:after {
  @apply border-b border-gray-200;
  @apply absolute bottom-0;
  content: "";
  margin-left: 0;
  width: calc(100% - 10px);
}

.Card:hover:after {
  @apply border-transparent;
}

.Card-body {
  @apply py-2 pr-8;
  @apply pl-2;
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
    @apply py-3 pr-10;
  }
  .Card-body > .Title {
    @apply pr-4;
  }
}
</style>

