<template>
  <div class="Header-title">
    <h1 class="Display s-m" :class="heroTitleWidth" itemprop="name headline">
      {{ page.title }}
    </h1>
    <div class="Text-sm" :class="heroMetaClass">
      <!-- date -->
      <time
        v-if="page.category === 'writing'"
        :datetime="page.createdAt"
        itemprop="datePublished"
        >{{ formatDate(page.createdAt) }}</time
      >
      <time v-else :datetime="page.date" itemprop="datePublished">{{
        formatListDate(page.date)
      }}</time>
      <!-- category & tags -->
      <span class="Text-sm inline-block tracking-hyphen mx-2px">&mdash;&mdash;</span>
      <!-- <span class="Text-sm inline-block capitalize"> {{ page.category }}: </span> -->
      <span
        v-for="(tag, index) in tagsWithFeaturedRemoved"
        :key="index"
        class="Text-sm"
      >
        <span v-if="index != 0">,</span>
        <span class="capitalize">{{ tag }}</span>
        <!-- <span class="capitalize">{{ tag.name }}</span> -->
        <!-- <saber-link :to="tag.permalink" class="capitalize">{{ tag.name }}</saber-link> -->
      </span>
      <!-- reading time -->
      <template v-if="page.category === 'writing'">
        <span class="Text-sm inline-block tracking-hyphen mx-2px">&mdash;&mdash;</span>
        <span class="Text-sm">{{ page.readingTime }} mins</span>
      </template>
    </div>
  </div>
</template>

<script>
import formatDate from "../utils/formatDate";
import formatListDate from "../utils/formatListDate";

export default {
  props: ["page"],

  computed: {
    heroTitleWidth() {
      return (
        this.page.hero && this.page.hero.titleWidth && `${this.page.hero.titleWidth}`
      );
    },
    heroBlockColor() {
      return (
        this.page.hero &&
        this.page.hero.blockColor &&
        `background-color: ${this.page.hero.blockColor}`
      );
    },
    heroImageBlend() {
      return this.page.hero && this.page.hero.imageBlend && "BlendImage";
    },
    heroTitleColor() {
      return this.page.hero && this.page.hero.titleInvert && "text-white";
    },
    heroMetaClass() {
      return this.page.hero && this.page.hero.titleInvert
        ? "text-white opacity-75"
        : "text-gray-600";
    },
    tagsWithFeaturedRemoved() {
      // return this.page.tagsInfo.filter(x => x.name !== "featured");
      return this.page.tags.filter(x => x.name !== "featured");
      // return undefined;
    },
  },

  methods: {
    formatDate,
    formatListDate,
  },
};
</script>

<style></style>
