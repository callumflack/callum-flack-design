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
    <Aspect v-if="post.assets && post.assets.cover" ratio="1/1.5" class="Card-figure">
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
      <div class="Card-title flex justify-between Space-sm">
        <h3 class="Text-lg font-medium w-3/4 hu:7/12">{{ post.title }}</h3>
        <div class="Text-lg font-light">
          <span class="Card-title-action font-medium">
            {{ type === "saber-link" ? "Read " : "Open " }}
          </span>
          <span class="Card-title-arrow">
            {{ type === "saber-link" ? "&#8594;" : "&#8599;" }}
          </span>
        </div>
      </div>
      <p class="Card-detail Text-sm w-3/4 hu:7/12">{{ post.lede }}</p>
      <div class="Card-tags Text-xs text-gray mt-auto">
        <span v-for="(tag, index) in tagsWithFeaturedRemoved" :key="index">
          <span v-if="index != 0">,</span>
          <span class="capitalize">{{ tag }}</span>
        </span>
        <template v-if="post.agency">
          <span class="Text-divider">|</span>
          <span>Design: {{ post.agency }}</span>
        </template>
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
/* CARD + TRANSITIONS */
.Card-figure,
.Card-body,
.Card-title,
.Card-title-action {
  transition: all 500ms theme(bezier.thisalso);
}

.Card {
  @apply flex flex-col relative cursor-pointer;
  @apply bg-white;
  /* @apply border border-transparent; */
  transition: all 150ms theme(bezier.thisalso);
}

.Card:hover {
  /* @apply bg-transparent border-brand-red; */
  @apply bg-white;
}
.Card:hover .Card-figure {
  @apply opacity-25;
  opacity: 0.15;
}
.Card:hover .Card-figure >>> img {
  filter: grayscale(1);
}
.Card:hover .Card-title,
.Card:hover .Card-tags,
.Card:hover .Text-divider {
  /* @apply text-white; */
}
.Card:hover .Card-title-arrow {
  @apply text-brand-red;
}
.Card:hover .Card-title-action {
  @apply opacity-100;
  transform: translateX(0);
}

/* CARD FIGURE & BODY */
.Card-figure {
  /* margin: -2px; */ /* negate the Card border */
  @apply mb-0;
}

.Card-body {
  @apply flex flex-col h-full;
  min-height: 15vh;
  /* padding-top: var(--spacing1);
  padding-bottom: calc(1.75 * var(--spacing1));
  padding-left: calc(1.75 * var(--spacing1));
  padding-right: calc(1.75 * var(--spacing1)); */
  /* transform: translateY(1px); */
  @apply p-4 pt-3;
}

.Card-title-action {
  @apply inline-block opacity-0 text-brand-red;
  transform: translateX(-5%);
}

.Card-figure-image:after {
  @apply absolute inset-0;
  background-color: rgba(0, 0, 0, 0.025);
  content: "";
  max-width: none;
  mix-blend-mode: multiply;
}
</style>
