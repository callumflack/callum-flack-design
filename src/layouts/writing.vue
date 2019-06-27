<template>
  <Wrap :page="page">
    <!-- <slot name="default"></slot> -->

    <SliderFrame>
      <div slot-scope="{ activeIndex, goToIndex }">
        <div class="Grid-extract--edge bg-brand-header">
          <div class="container container--text">
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
          </div>
        </div>

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
    // allWritingByYear() {
    //   // helper function to get the year value from an item
    //   const year = item => tinydate(item.attributes.date, {YYYY});
    // },
    featuredWriting() {
      return this.allWriting
        .filter(x => x.attributes.tags.includes("featured"))
    },
  },
};
</script>
