<template>
  <Wrap :page="page">
    <!-- <IndexStaticSubnav></IndexStaticSubnav>
    <div class="st-m">
      <CardRow
        v-for="post in allPostsUngrouped"
        :key="post.attributes.permalink"
        :post="post"
      ></CardRow>
    </div> -->

    <!-- <SliderSlide v-if="allPosts && Object.keys(allPosts).length > 0">
      <div class="container container--list">
        <div v-for="year in Object.keys(allPosts).reverse()" :key="year" class="Year">
          <h3 class="Meta Meta--year">{{ year }}</h3>
          <CardRow
            v-for="post in allPosts[year]"
            :key="post.attributes.permalink"
            :post="post"
            class=""
          ></CardRow>
        </div>
      </div>
    </SliderSlide> -->

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
              v-if="featuredPosts && featuredPosts.length > 0"
              class="st-2xh"
            >
              <div class="Grid">
                <Card
                  v-for="post in featuredPosts"
                  :key="post.attributes.permalink"
                  :post="post"
                  class="Grid-item"
                />
              </div>
            </SliderSlide>
            <SliderSlide v-if="allPostsUngrouped && allPostsUngrouped.length > 0">
              <div class="container container--list">
                <CardRow
                  v-for="post in allPostsUngrouped"
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
    allPostsUngrouped() {
      return this.page.posts.filter(x => x.attributes.category === "projects");
    },
    allPosts() {
      return this.groupByYear(this.allPostsUngrouped);
    },
    featuredPosts() {
      return this.allPostsUngrouped.filter(x => x.attributes.tags.includes("featured"));
      // const posts = this.allPostsUngrouped
      //   .filter(x => x.attributes.tags.includes("featured"))
      // return this.groupByYear(posts);
    },
    designPosts() {
      const posts = this.allPostsUngrouped.filter(x =>
        x.attributes.tags.includes("UI")
      );
      return this.groupByYear(posts);
    },
    devPosts() {
      const posts = this.allPostsUngrouped.filter(x =>
        x.attributes.tags.includes("code")
      );
      return this.groupByYear(posts);
    },
  },
  /* …unused methods to group by year */
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
      return (
        posts
          // Unsure if saber is ordering by date
          // If it is already you can remove this
          .sort(this.sortByDate)
          .reduce(this.groupByYearMethod, {})
      );
    },
  },
};
</script>
