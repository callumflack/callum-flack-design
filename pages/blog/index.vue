<template lang="pug">
.block--pb7.block--matchFixedMenu
  main(role="main")
    .container
      c-postexcerpt(
        v-if="post.published"
        v-for="post in posts"
        :key="post.permalink"
        :link="post.permalink"
        :heroImage="post.heroImage"
        :title="post.title"
        :date="post.date"
        :readingtime="post.readingtime"
        :lede="post.lede"
      )
      
      //- .InterludeSpace
        hr
        .block--my7
          p.Meta.Meta--isParagraph.c-textLight.u-textCenter.m-xAuto.u-size3of4
            span.u-block
              nuxt-link.u-linkClean(to="/about") Callum Flack
              | &nbsp;is writing about the things inbetween. Here's the most recent posts:
        hr

      
</template>

<script>
import Post from "~/components/Post.vue";
import PostExcerpt from "~/components/PostExcerpt.vue";

export default {
  name: "blog",
  components: {
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
