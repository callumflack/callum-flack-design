<template>
  <Wrap :page="page">
    <div class="home">
      <h1 class="page-heading" v-if="page.attributes.title">{{ page.title }}</h1>

      <!-- <slot name="default"></slot> -->

      <header class="Block-sm">
        <h1
          class="Text"
        >An audit of my own opinions.
        </h1>
      </header>

      <!-- <div v-if="posts && posts.length > 0">
        <Card v-for="post in posts" :post="post" :key="post.attributes.permalink"></Card>
      </div> -->

      <SliderFrame>
        <div slot-scope="{ activeIndex, goToIndex }">
          <ul class="Tab-controls s-2xh">
            <li>
              <button
                @click="goToIndex(0)"
                :class="{ 'is-active': activeIndex === 0 }"
                class="Tab-controls--button Meta"
              >Start here</button>
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
            <SliderSlide v-if="featuredWriting && featuredWriting.length > 0">
              <Card
                v-for="post in featuredWriting"
                :post="post"
                :key="post.attributes.permalink"
              ></Card>
            </SliderSlide>
            <SliderSlide v-if="allWriting && allWriting.length > 0">
              <Card
                v-for="post in allWriting"
                :post="post"
                :key="post.attributes.permalink"
              ></Card>
            </SliderSlide>
          </SliderSlides>
        </div>
      </SliderFrame>

    </div>
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
    allWriting() {
      return this.page.posts
        .filter(x => x.attributes.category === "writing")
    },
    featuredWriting() {
      return this.allWriting
        .filter(x => x.attributes.tags.includes("featured"))
    },
  },
};
</script>
