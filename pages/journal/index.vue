<template lang="pug">
.block--pageEnd
  header(role="banner")
    c-pageheading(
      heading="Journal"
      link="/journal"
      lede="Writing about the contradictions and nuance of designing and building human interfaces."
    )
  main(role="main")
    .container
      c-post(
        journalpost
        v-for="post in posts"
        :key="post.heading"
        :link="post.permalink"
        :image="post.thumbImage"
        :heading="post.heading"
        :lede="post.lede"
        :date="post.date"
      )
</template>

<script>
import PageHeading from "~/components/PageHeading.vue";
import Post from "~/components/Post.vue";

export default {
  name: "journal",
  components: {
    "c-pageheading": PageHeading,
    "c-post": Post
  },
  head() {
    return {
      title: "Journal – Patternworks",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Selected by Callum Flack writing about digital design & development"
        }
      ]
    };
  },
  data() {
    return {
      posts: []
    };
  },
  async asyncData({ app }) {
    const posts = await app.$content("/posts").getAll();

    return {
      posts
    };
  }
};
</script>

<style scope>
@import "../../assets/styles/vars.css";

.Grid-cell:nth-child(even) {
  @media (--small-viewport) {
    margin-top: var(--s-4);
  }
}
</style>
