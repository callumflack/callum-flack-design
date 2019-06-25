<template>
  <div class="Card">
    <saber-link class="block" :to="post.attributes.permalink">
      <div class="flex">
        <div class="Card-body w-2/3 lg:w-3/4">
          <h3 class="Title mb-2">
            {{ post.attributes.title }}
          </h3>
          <div class="Card-body-meta">
            <span class="Text--sm">
              {{ formatDate(post.attributes.createdAt) }}
            </span>
            <span class="Text--sm inline-block mx-2px">&centerdot;</span>
            <span class="Text--sm">{{ post.attributes.category }}: </span>
            <span class="Text--sm" v-for="(tag, index) in post.attributes.tags">
              <span v-if="index != 0">, </span><span class="capitalize">{{ tag }}</span>
            </span>
            <template v-if="post.attributes.category === 'writing'">
              <span class="Text--sm inline-block mx-2px">&centerdot;</span>
              <span class="Text--sm">{{ post.attributes.readingTime }} mins</span>
            </template>

          </div>
        </div>
        <div class="w-1/3 lg:w-1/4" v-if="post.attributes.assets.cover">
          <div class="Card-figure">
            <img
              :src="post.attributes.assets.cover"
              :alt="post.attributes.title"
              class="Card-figure-image"
            >
          </div>
        </div>
      </div>
    </saber-link>
  </div>
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
    formatTags() {
      return this.slice(0, -1).join(', ')
    }
  },
  methods: {
    formatDate
  }
};
</script>

<style lang="postcss" scoped>
.Card {
  /* @apply rounded overflow-hidden; */
  @apply cursor-pointer relative;
  @apply border-b;
  @apply border-gray-200;
  margin: -10px -8px;
  padding: 10px 8px;
  transition: all 500ms ease;
}

.Card:before {
  @apply absolute h-full w-full left-0 top-0 z-10;
  @apply opacity-0;
  @apply border border-black rounded-lg;
  /* border: 1px solid rgba(112, 84, 117, 0.5); */
  /* border-radius: 8px; */
  content: "";
  pointer-events: none;
  /* transform: scale(0.96); */
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

.Card:hover {
  @apply border-transparent;
  @apply bg-white;
}

.Card:not(:last-of-type) {
  margin-bottom: calc(theme(spacing.6) * var(--space-ratio));
}

.Card-body {
  @apply py-6 pr-12;
  @apply pl-4;
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
}

@screen lg {
  .Card-body {
    @apply pr-24;
  }
  .Card-body > .Title {
    @apply pr-4;
  }
}
</style>

