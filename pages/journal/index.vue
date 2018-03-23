<template lang="pug">
.block--pb7
  header(role="banner")
    c-pageheading(
      lede="How to create digital experiences that resonate."
    )
  main(role="main")
    .container
      c-post(
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
      title: "Journal – Callum Flack Design",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Selected writing by Callum Flack about digital design & development"
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
@import "../../assets/styles/variables.css";
</style>
