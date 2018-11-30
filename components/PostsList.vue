<template lang="pug">
.block--pb7
  main(role="main")
    .Container
      c-post(
        v-for="post in posts"
        :key="post.title"
        :link="post.permalink"
        :image="post.thumbImage"
        :heading="post.title"
        :lede="post.lede"
        :date="post.date"
      )
</template>

<script>
import Post from "~/components/Post.vue";

export default {
  name: "posts-list",
  components: {
    "c-post": Post
  },
  props: {
    posts: Array
  }
};
</script>

<style scope>
@import "../assets/styles/variables.css";
</style>
