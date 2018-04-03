<template lang="pug">
.block--pb7
  //- c-pageheading(
  //-   lede="How to create digital experiences that resonate."
  //- )
  main(role="main")
    .container
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
import PageHeading from "~/components/PageHeading.vue";
import Post from "~/components/Post.vue";

export default {
  name: "posts-list",
  components: {
    "c-pageheading": PageHeading,
    "c-post": Post
  },
  props: {
    posts: Array,
  },
};
</script>

<style scope>
@import "../assets/styles/variables.css";
</style>
