<template>
  <component
    :is="type"
    :to="post.permalink"
    :href="post.link"
    :target="target"
    :rel="rel"
    class="Card col-span-12"
  >
    <div class="Card-body flex justify-between">
      <h3 class="Heading Heading-7xl font-light w-9/12">
        {{ post ? post.title : "View all" }}
      </h3>
      <div v-if="post" class="w-3/12 flex justify-between">
        <div>
          <span
            v-for="(tag, index) in tagsWithFeaturedRemoved"
            :key="index"
            class="Title font-normal text-gray text-right"
          >
            <span v-if="index != 0">,</span>
            <span class="capitalize">{{ tag }}</span>
          </span>
        </div>
        <div class="Heading Heading-7xl font-light">
          {{ type === "saber-link" ? "&#8594;" : "&#8599;" }}
        </div>
      </div>
    </div>
  </component>
</template>

<script>
import formatListDate from "../utils/formatListDate";
/*

  ProjectRow is updateed from CardRow, which has amny commented out elements

*/
export default {
  components: {},
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
