<template>
  <component
    :is="type"
    :to="post.attributes.permalink"
    :href="post.attributes.link"
    :target="target"
    :rel="rel"
    class="Card"
  >
    <div class="Card-body flex justify-between">
      <!-- title -->
      <h3 class="Title w-15x24 lg:w-8/12 pr-3">
        {{ post.attributes.title }}
        <CardExternalLink
          v-if="post.attributes.card && post.attributes.card.externalLink"
        />
      </h3>
      <div class="w-9x24 lg:w-4/12 flex justify-between">
        <!-- only show category on home -->
        <!-- <template v-if="$route.path === '/'">
          <div class="Text">{{ post.attributes.category }}</div>
        </template> -->
        <!-- tags -->
        <div>
          <span
            v-for="(tag, index) in tagsWithFeaturedRemoved"
            :key="index"
            class="Title text-gray"
          >
            <span v-if="index != 0">, </span><span class="capitalize">{{ tag }}</span>
          </span>
          <!-- if writing, show reading time (but not on mobile) -->
          <!-- <template v-if="post.attributes.category === 'writing'">
            <span class="Text text-gray inline-block mx-2px hidden sm:inline-block">
              &centerdot;
            </span>
            <span class="Text text-gray hidden sm:inline-block">
              {{ post.attributes.readingTime }} mins
            </span>
          </template> -->
        </div>
        <!-- date -->
        <time
          :date-time="post.attributes.createdAt"
          class="Title text-gray ml-4 lg:ml-8"
        >
          {{ formatListDate(post.attributes.createdAt) }}
        </time>
      </div>
    </div>
  </component>
</template>

<script>
import formatListDate from "../utils/formatListDate";
import Aspect from "../components/Aspect";
import CardExternalLink from "../components/CardExternalLink";

export default {
  components: {
    Aspect,
    CardExternalLink,
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
  @apply block py-2 relative cursor-pointer;
  @apply border-b;
  transition: all 500ms ease;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.Card:before {
  @apply absolute left-0 bg-text h-px;
  content: "";
  right: 100%;
  bottom: -1px;
  transition: right 150ms ease-out;
  z-index: -1;
}

.Card:active:before,
.Card:focus:before,
.Card:hover:before {
  right: 0;
}

.Card:active *,
.Card:focus *,
.Card:hover * {
  @apply text-text !important;
}

/* CARD BODY */

.Card-body {
  @apply py-1;
  transform: translateY(1px);
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
