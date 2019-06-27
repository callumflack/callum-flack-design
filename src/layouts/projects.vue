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

        <SliderSlides >
          <SliderSlide v-if="featuredPosts">
            <Card
              v-for="post in featuredPosts"
              :post="post"
              :key="post.attributes.permalink"
              class="Grid-extract--posts"
            ></Card>
          </SliderSlide>
          <SliderSlide v-if="allPosts && Object.keys(allPosts).length > 0">
            <div
              v-for="year in Object.keys(allPosts).reverse()"
              :key="year"
            >
              <h3 class="Text Year">{{ year }}</h3>
              <Card
                v-for="post in allPosts[year]"
                :post="post"
                :key="post.attributes.permalink"
                class="Grid-extract--posts"
              ></Card>
            </div>
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

  methods: {
    sortByDate(a, b) {
      new Date(b.attributes.date) - new Date(a.attributes.date);
    },
    groupByYearMethod(byYear, post) {
      const year = parseInt(new Date(post.attributes.date).getFullYear(), 10);

      // Set up list for year if it doesn't already exist
      if (!byYear[year]) {
        byYear[year] = [];
      }

      byYear[year].push(post);

      return byYear;
    },
    /*
     * Transform array of post into object grouping
     * posts by their year.
     *
     * @param {array} posts
     * @return {object}
     */
    groupByYear(posts) {
      return posts
        // Unsure if saber is ordering by date
        // If it is already you can remove this
        .sort(this.sortByDate)
        .reduce(this.groupByYearMethod, {});
    },
  },

  computed: {
    allPostsUngrouped() {
      return this.page.posts
        .filter(x => x.attributes.category === "project")
    },
    allPosts() {
      return this.groupByYear(this.allPostsUngrouped);
    },
    featuredPosts() {
      return this.allPostsUngrouped
        .filter(x => x.attributes.tags.includes("featured"))
      // const posts = this.allPostsUngrouped
      //   .filter(x => x.attributes.tags.includes("featured"))
      // return this.groupByYear(posts);
    },
    designPosts() {
      const posts = this.allPostsUngrouped
        .filter(x => x.attributes.tags.includes("UI"))
      return this.groupByYear(posts);
    },
    devPosts() {
      const posts = this.allPostsUngrouped
        .filter(x => x.attributes.tags.includes("code"))
      return this.groupByYear(posts);
    },
  },
};
</script>

<style lang="postcss" scoped>
.Year {
  @apply border-b-2 border-text;
  margin-top: calc(theme(spacing.12) * var(--space-ratio));
  margin-bottom: calc(theme(spacing.6) * var(--space-ratio));
  padding-bottom: calc(theme(spacing.2) * var(--space-ratio));
}

.Year:not(:first-of-type) {
  /* margin-top: calc(theme(spacing.16) * var(--space-ratio)); */
}
</style>
