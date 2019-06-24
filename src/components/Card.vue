<template>
  <div class="Card">
    <saber-link class="block" :to="post.attributes.permalink">
      <div class="flex">
        <div class="Card-body flex-grow">
          <h3 class="Title font-semibold mb-2px font-title">
            {{ post.attributes.title }}
          </h3>
          <div class="Card-body-meta">
            <span class="Text--sm">
              {{ formatDate(post.attributes.createdAt) }}
            </span>
            <span class="Text--sm inline-block mx-2px">&centerdot;</span>
            <span class="Text--sm" v-for="tag in post.attributes.tags">
              <!-- <span v-if="index !== post.attributes.tags.length - 1" class="capitalize">
                {{ tag }},&nbsp;
              </span> -->
              <span class="capitalize">
                {{ tag }}
              </span>
            </span>
            <template v-if="post.attributes.category === 'writing'">
              <span class="Text--sm inline-block mx-2px">&centerdot;</span>
              <span class="Text--sm">{{ post.attributes.readingTime }} mins</span>
            </template>

          </div>
        </div>
        <div class="w-1/3 lg:w-1/4" v-if="post.attributes.assets.cover">
          <div class="Aspect" ratio="9/16">
            <img :src="post.attributes.assets.cover" :alt="post.attributes.title">
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
      return this. slice(0, -1).join(', ')
    }
  },
  methods: {
    formatDate
  }
};
</script>

<style lang="postcss" scoped>
.Card {
  @apply rounded overflow-hidden;
  @apply border border-transparent;
  /* @apply border-gray-400; */
  /* @apply bg-white; */
  transition: all 500ms ease;
}
.Card:hover {
  @apply border-black;
  @apply bg-white;
}

.Card:not(:last-of-type) {
  margin-bottom: calc(theme(spacing.4) * var(--space-ratio));
}

.Card-body {
  @apply py-3 px-4;
}

.Card-body-meta {
  @apply text-gray-600;
}

.Card-body-meta > * {
  @apply capitalize;
}
</style>

