<template>
  <Wrap :page="page">
    <!-- <slot name="default"></slot> -->

    <SliderFrame>
      <div slot-scope="{ activeIndex, goToIndex }">
        <div class="Grid-extract--edge border-b">
          <div class="container container--text">
            <ul class="Tab-controls">
              <li>
                <button
                  :class="{ 'is-active': activeIndex === 0 }"
                  class="Tab-controls--button Meta"
                  @click="goToIndex(0)"
                >
                  Featured
                </button>
              </li>
              <li>
                <button
                  :class="{ 'is-active': activeIndex === 1 }"
                  class="Tab-controls--button Meta"
                  @click="goToIndex(1)"
                >
                  Archive
                </button>
              </li>
            </ul>
          </div>
        </div>

        <SliderSlides class="Grid-extract--card st-2xh">
          <SliderSlide v-if="featuredWriting && featuredWriting.length > 0">
            <Card
              v-for="post in featuredWriting"
              :key="post.attributes.permalink"
              :post="post"
            ></Card>
          </SliderSlide>
          <SliderSlide v-if="allWriting && allWriting.length > 0">
            <Card
              v-for="post in allWriting"
              :key="post.attributes.permalink"
              :post="post"
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
