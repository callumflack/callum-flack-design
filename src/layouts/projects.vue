<template>
  <Wrap :page="page">
    <!-- <slot name="default"></slot> -->

    <header class="Block-md">
      <h1 class="Title font-normal" v-if="page.attributes.title">{{ page.attributes.title }}</h1>
    </header>

    <SliderFrame>
      <div slot-scope="{ activeIndex, goToIndex }">
        <ul class="Tab-controls s-2xh">
          <li>
            <button
              @click="goToIndex(0)"
              :class="{ 'is-active': activeIndex === 0 }"
              class="Tab-controls--button Meta"
            >Featured</button>
          </li>
          <li>
            <button
              @click="goToIndex(1)"
              :class="{ 'is-active': activeIndex === 1 }"
              class="Tab-controls--button Meta"
            >Archive</button>
          </li>
        </ul>

        <SliderSlides class="Grid-extract--posts">
          <SliderSlide v-if="featuredPosts && featuredPosts.length > 0">
            <Card
              v-for="post in featuredPosts"
              :post="post"
              :key="post.attributes.permalink"
            ></Card>
          </SliderSlide>
          <SliderSlide v-if="allPosts && allPosts.length > 0">
            <Card
              v-for="post in allPosts"
              :post="post"
              :key="post.attributes.permalink"
            ></Card>
          </SliderSlide>
          <!-- <SliderSlide v-if="devPosts && devPosts.length > 0">
            <Card
              v-for="post in devPosts"
              :post="post"
              :key="post.attributes.permalink"
            ></Card>
          </SliderSlide> -->
        </SliderSlides>
      </div>
    </SliderFrame>

  </Wrap>
</template>

<script>
import Card from "../components/Card.vue";
import SliderFrame from "../components/SliderFrame.vue";
import SliderSlides from "../components/SliderSlides.vue";
import SliderSlide from "../components/SliderSlide.vue";
import Wrap from "../components/Wrap.vue";

export default {
  components: {
    Card,
    SliderFrame,
    SliderSlides,
    SliderSlide,
    Wrap
  },

  props: ["page"],

  computed: {
    allPosts() {
      return this.page.posts
        .filter(x => x.attributes.category === "project")
    },
    featuredPosts() {
      return this.allPosts
        .filter(x => x.attributes.tags.includes("featured"))
    },
    designPosts() {
      return this.allPosts
        .filter(x => x.attributes.tags.includes("UI"))
    },
    devPosts() {
      return this.allPosts
        .filter(x => x.attributes.tags.includes("code"))
    },
  },
};
</script>
