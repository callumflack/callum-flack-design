<template>
  <Wrap :page="page">
    <!-- <IndexStaticSubnav></IndexStaticSubnav>
    <div class="st-m">
      <CardRow
        v-for="post in allWriting"
        :key="post.attributes.permalink"
        :post="post"
      ></CardRow>
    </div> -->
    <SliderFrame>
      <div slot-scope="{ activeIndex, goToIndex }">
        <div class="Grid-extract--edge bg-brand-bg ">
          <div class="container container--list">
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
          <hr class="border-b border-tex m-0" />
        </div>

        <div class="st-m">
          <SliderSlides class="">
            <SliderSlide
              v-if="featuredWriting && featuredWriting.length > 0"
              class="st-2xh"
            >
              <div class="Grid">
                <Card
                  v-for="post in featuredWriting"
                  :key="post.attributes.permalink"
                  :post="post"
                  class="Grid-item"
                />
              </div>
            </SliderSlide>
            <SliderSlide v-if="allWriting && allWriting.length > 0">
              <div class="container container--list container--removeListInset">
                <CardRow
                  v-for="post in allWriting"
                  :key="post.attributes.permalink"
                  :post="post"
                />
              </div>
            </SliderSlide>
          </SliderSlides>
        </div>
      </div>
    </SliderFrame>
  </Wrap>
</template>

<script>
import Card from "../components/Card";
import CardRow from "../components/CardRow";
// import IndexStaticSubnav from "../components/IndexStaticSubnav";
import SliderFrame from "../components/SliderFrame";
import SliderSlides from "../components/SliderSlides";
import SliderSlide from "../components/SliderSlide";
import Wrap from "../components/Wrap";

export default {
  components: {
    Card,
    CardRow,
    // IndexStaticSubnav,
    SliderFrame,
    SliderSlides,
    SliderSlide,
    Wrap,
  },
  props: ["page"],
  computed: {
    allWriting() {
      return this.page.posts.filter(x => x.attributes.category === "writing");
    },
    // allWritingByYear() {
    //   // helper function to get the year value from an item
    //   const year = item => tinydate(item.attributes.date, {YYYY});
    // },
    featuredWriting() {
      return this.allWriting.filter(x => x.attributes.tags.includes("featured"));
    },
  },
};
</script>
