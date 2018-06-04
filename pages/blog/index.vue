<template lang="pug">
.block--pb7
  main(role="main")
    .container
      c-post(
        v-if="post.published"
        v-for="post in posts.slice(0, 1)"
        :key="post.permalink"
        :link="post.permalink"
        :image="post.heroImage"
        :title="post.title"
        :lede="post.lede"
        :body="post.body"
        :readingtime="post.readingtime"
        :date="post.date"
        :published="post.published"
      )
      
      .InterludeSpace
        hr
        .block--my7
          p.Meta.Meta--isParagraph.c-textLight.u-textCenter.m-xAuto.u-size3of4
            span.u-block
              nuxt-link.u-linkClean(to="/about") Callum Flack
              | &nbsp;is writing about the things inbetween. Here's the most recent posts:
        hr

      c-postexcerpt(
        v-if="post.published"
        v-for="post in posts.slice(1)"
        :key="post.title"
        :link="post.permalink"
        :image="post.thumbImage"
        :title="post.title"
        :lede="post.lede"
        :date="post.date"
      )
</template>

<script>
import Post from "~/components/Post.vue";
import PostExcerpt from "~/components/PostExcerpt.vue";

export default {
  name: "blog",
  components: {
    "c-post": Post,
    "c-postexcerpt": PostExcerpt
  },
  head() {
    return {
      title: "Blog – Callum Flack Design",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Selected writing by Callum Flack about digital design, user experience & code"
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
