<template>
  <Wrap :page="page">
    <header class="frame frame--header Block">
      <h1 class="Text-sm frame-area-a">{{ page.title }}</h1>
      <p class="Block-sm-t frame-area-b">
        {{ page.lede }}
      </p>
    </header>
    <main class="frame">
      <ProjectRow
        v-for="(item, index) in allPostsUngrouped"
        :key="index"
        :post="item"
      ></ProjectRow>
    </main>
  </Wrap>
</template>

<script>
import ProjectRow from "../components/ProjectRow";
import Wrap from "../components/Wrap";

export default {
  components: {
    ProjectRow,
    Wrap,
  },
  props: ["page"],
  computed: {
    allPostsUngrouped() {
      return this.page.posts
        .filter(x => x.category === "projects")
        .sort(this.sortByDate);
    },
    allPosts() {
      return this.groupByYear(this.allPostsUngrouped);
    },
    featuredPosts() {
      return this.allPostsUngrouped.filter(x => x.tags.includes("featured"));
      // const posts = this.allPostsUngrouped
      //   .filter(x => x.tags.includes("featured"))
      // return this.groupByYear(posts);
    },
    /* designPosts() {
      const posts = this.allPostsUngrouped.filter(x => x.tags.includes("UI"));
      return this.groupByYear(posts);
    },
    devPosts() {
      const posts = this.allPostsUngrouped.filter(x => x.tags.includes("code"));
      return this.groupByYear(posts);
    }, */
  },
  methods: {
    sortByDate(a, b) {
      new Date(b.date) - new Date(a.date);
    },
    groupByYearMethod(byYear, post) {
      const year = parseInt(new Date(post.date).getFullYear(), 10);

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
