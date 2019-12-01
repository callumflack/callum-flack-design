<template>
  <component
    :is="type"
    :to="post.permalink"
    :href="post.link"
    :target="target"
    :rel="rel"
    class="Card"
  >
    <!-- image -->
    <Aspect v-if="post.assets && post.assets.cover" ratio="1/1.5">
      <img
        v-if="post.assets.cover.local"
        :src="post.assets.cover"
        :alt="post.title"
        class="Card-figure-image"
      />
      <ImageDynamic
        v-else
        :src="post.assets.cover"
        :alt="post.title"
        cover
        class="Card-figure-image"
      />
    </Aspect>
    <!-- body -->
    <div class="Card-body">
      <h3 class="Text-lg font-medium">
        {{ post.title }}
      </h3>
      <div class="flex justify-between">
        <div>
          <span
            v-for="(tag, index) in tagsWithFeaturedRemoved"
            :key="index"
            class="Text-sm text-gray text-right"
          >
            <span v-if="index != 0">,</span>
            <span class="capitalize">{{ tag }}</span>
          </span>
        </div>
        <div class="Text-sm font-light">
          {{ type === "saber-link" ? "&#8594;" : "&#8599;" }}
        </div>
      </div>
    </div>
  </component>
</template>

<script>
import Aspect from "../components/Aspect";
import ImageDynamic from "../components/ImageDynamic";
import formatListDate from "../utils/formatListDate";
/*

  ProjectRow is updateed from CardRow, which has amny commented out elements

*/
export default {
  components: {
    Aspect,
    ImageDynamic,
  },
  props: ["post"],
  computed: {
    type() {
      return this.post && this.post.card && this.post.card.externalLink
        ? "a"
        : "saber-link";
      /* if (this.post.card && this.post.card.externalLink) {
        return "a";
      }
      if (this.post.card && !this.post.card.externalLink) {
        return "saber-link";
      }
      if (!this.post) {
        return "div";
      }
      return "div"; */
    },
    target() {
      return this.post && this.post.card && this.post.card.externalLink ? "_blank" : "";
    },
    rel() {
      return (
        this.post &&
        this.post.card &&
        this.post.card.externalLink &&
        "noopener noreferrer"
      );
    },
    tagsWithFeaturedRemoved() {
      return this.post.tags && this.post.tags.filter(x => x !== "featured");
    },
    /* formatTags() {
      return this.slice(0, -1).join(', ')
    }, */
    /* figureShade() {
      return this.post.assets.cover && "bg-gray-100";
    }, */
  },
  methods: {
    formatListDate,
  },
};
</script>

<style lang="postcss" scoped>
.Card {
  @apply block relative cursor-pointer;
  @apply border border-black;
  /* transition: all 500ms ease;
  transform: translateZ(0);
  backface-visibility: hidden; */
}

/* .Card:before {
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
} */

/* CARD BODY */

.Card-body {
  /* @apply px-2 pt-2 pb-8; */
  padding-top: var(--spacing1);
  padding-bottom: var(--spacing7);
  padding-left: calc(1.5 * var(--spacing1));
  padding-right: calc(1.5 * var(--spacing1));
  /* transform: translateY(1px); */
}

.Card-body-meta {
  @apply text-gray-600;
}

.Card-body-meta > * {
  @apply capitalize;
}

/* .Card-figure {
  @apply relative;
}

.Card-figure-image {
  @apply absolute inset-0 object-cover w-full h-full;
  max-width: none;
  mix-blend-mode: multiply;
} */

.Card-figure-image:after {
  @apply absolute inset-0;
  background-color: rgba(0, 0, 0, 0.025);
  content: "";
  max-width: none;
  mix-blend-mode: multiply;
}

.Card-figure-blanklink {
  @apply absolute inset-0 flex justify-center items-center;
}

/* @screen lg {
  .Card-body {
    @apply py-2;
  }
  .Card-body > .Title {
    @apply pr-4;
  }
} */
</style>
