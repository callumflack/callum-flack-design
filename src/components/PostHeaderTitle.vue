<template>
  <div class="Header-title">
    <!-- post title -->
    <h1 class="Display s-m" :class="heroTitleWidth" itemprop="name headline">
      {{ attributes.title }}
    </h1>
    <!-- post meta -->
    <div class="Text--sm" :class="heroMetaClass">
      <!-- date -->
      <time
        v-if="attributes.category === 'writing'"
        :datetime="attributes.createdAt"
        itemprop="datePublished"
        >{{ formatDate(attributes.createdAt) }}</time
      >
      <time v-else :datetime="attributes.date" itemprop="datePublished">{{
        formatListDate(attributes.date)
      }}</time>
      <!-- category & tags -->
      <span class="Text--sm inline-block tracking-tighter mx-2px">&mdash;&mdash;</span>
      <!-- <span class="Text--sm inline-block capitalize"> {{ attributes.category }}: </span> -->
      <span
        v-for="(tag, index) in tagsWithFeaturedRemoved"
        :key="index"
        class="Text--sm"
      >
        <span v-if="index != 0">,</span>
        <span class="capitalize">{{ tag }}</span>
      </span>
      <!-- reading time -->
      <template v-if="attributes.category === 'writing'">
        <span class="Text--sm inline-block tracking-tighter mx-2px">
          &mdash;&mdash;
        </span>
        <span class="Text--sm">{{ attributes.readingTime }} mins</span>
      </template>
    </div>
  </div>
</template>

<script>
import formatDate from "../utils/formatDate";
import formatListDate from "../utils/formatListDate";

export default {
  props: ["attributes"],

  computed: {
    heroTitleWidth() {
      return (
        this.attributes.hero &&
        this.attributes.hero.titleWidth &&
        `${this.attributes.hero.titleWidth}`
      );
    },
    heroBlockColor() {
      return (
        this.attributes.hero &&
        this.attributes.hero.blockColor &&
        `background-color: ${this.attributes.hero.blockColor}`
      );
    },
    heroImageBlend() {
      return this.attributes.hero && this.attributes.hero.imageBlend && "BlendImage";
    },
    heroTitleColor() {
      return this.attributes.hero && this.attributes.hero.titleInvert && "text-white";
    },
    heroMetaClass() {
      return this.attributes.hero && this.attributes.hero.titleInvert
        ? "text-white opacity-75"
        : "text-gray-600";
    },
    tagsWithFeaturedRemoved() {
      return this.attributes.tags.filter(x => x !== "featured");
    },
  },

  methods: {
    formatDate,
    formatListDate,
  },
};
</script>

<style></style>
