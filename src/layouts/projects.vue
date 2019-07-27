<template>
  <Wrap :page="page">
    <IndexStaticSubnav></IndexStaticSubnav>
    <div class="st-m">
      <CardRow
        v-for="post in allPostsUngrouped"
        :key="post.attributes.permalink"
        :post="post"
      ></CardRow>
    </div>

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
  </Wrap>
</template>

<script>
import CardRow from "../components/CardRow.vue";
import IndexStaticSubnav from "../components/IndexStaticSubnav.vue";
import Wrap from "../components/Wrap.vue";

export default {
  components: {
    CardRow,
    IndexStaticSubnav,
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
