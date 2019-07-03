<template>
  <Wrap :page="page">
    <div class="home">

      <!-- <saber-link to="/about.html">Learn more</saber-link> -->
      <!-- <slot name="default"></slot> -->

      <SliderFrame>
        <div slot-scope="{ activeIndex, goToIndex }">
          <div class="Grid-extract--edge border-b">
            <div class="container container--list">
              <ul class="Tab-controls">
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
                  >Projects</button>
                </li>
                <li>
                  <button
                    @click="goToIndex(2)"
                    :class="{ 'is-active': activeIndex === 2 }"
                    class="Tab-controls--button Meta"
                  >Writing</button>
                </li>
              </ul>
            </div>
          </div>

          <SliderSlides class="st-2xh">
            <SliderSlide v-if="featuredPosts && featuredPosts.length > 0">
              <Card
                v-for="post in featuredPosts"
                :post="post"
                :key="post.attributes.permalink"
                class="Grid-extract--car "
              />
            </SliderSlide>
            <SliderSlide v-if="projectsPosts && projectsPosts.length > 0">
              <CardRow
                v-for="post in projectsPosts"
                :post="post"
                :key="post.attributes.permalink"
              />
            </SliderSlide>
            <SliderSlide v-if="writingPosts && writingPosts.length > 0">
              <CardRow
                v-for="post in writingPosts"
                :post="post"
                :key="post.attributes.permalink"
              />
            </SliderSlide>
          </SliderSlides>
        </div>
      </SliderFrame>

      <!-- <div
        class="pagination"
        v-if="page.pagination && (page.pagination.hasNext || page.pagination.hasPrev)"
      >
        <router-link
          class="prev-link"
          :to="page.pagination.prevLink"
          v-if="page.pagination.hasPrev"
        >← Previous</router-link>
        <router-link
          class="next-link"
          :to="page.pagination.nextLink"
          v-if="page.pagination.hasNext"
        >Next →</router-link>
      </div>-->

      <!-- <p class="feed-subscribe" v-if="$feed">
        <svg class="svg-icon orange">
          <use :xlink:href="getSvg('rss')"></use>
        </svg>
        <a :href="$feed.permalink">Subscribe</a>
      </p>-->
    </div>
  </Wrap>
</template>

<script>
// import formatDate from "../utils/formatDate";
// import getSvg from "../utils/getSvg";
import Card from "../components/Card.vue";
import CardRow from "../components/CardRow.vue";
import SliderFrame from "../components/SliderFrame.vue";
import SliderSlides from "../components/SliderSlides.vue";
import SliderSlide from "../components/SliderSlide.vue";
import Wrap from "../components/Wrap.vue";

export default {
  components: {
    Card,
    CardRow,
    SliderFrame,
    SliderSlides,
    SliderSlide,
    Wrap
  },

  props: ["page"],

  computed: {
    recentPosts() {
      return this.page.posts.splice(0, 6);
    },
    featuredPosts() {
      return this.page.posts
        .filter(x => x.attributes.category === "writing")
        // .filter(x => x.attributes.tags.includes("featured"))
    },
    projectsPosts() {
      return this.page.posts
        .filter(x => x.attributes.category === "projects")
    },
    writingPosts() {
      return this.page.posts
        .filter(x => x.attributes.category === "writing")
    },
  },

  // methods: {
  //   formatDate,
  //   getSvg
  // }
};
</script>

<style lang="postcss" scoped>
.bg-brand-headerX {
  background-image: linear-gradient(
    theme(colors.brand.bg),
    theme(colors.gray.200)
  );
}
</style>
