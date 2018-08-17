<template lang="pug">
  main.Container(role="main")
    post-excerpt(
      v-if="post.published"
      v-for="post in posts"
      :category="post.category"
      :date="post.date"
      :heroImage="post.heroImage"
      :heroImageNoShadow="post.heroImageNoShadow"
      :key="post.permalink"
      :lede="post.lede"
      :link="post.permalink"
      :readingtime="post.readingtime"
      :thumbImage="post.thumbImage"
      :tags="post.tags"
      :title="post.title"
    )
    
    //- .InterludeSpace
      hr
      .block--my7
        p.Meta.Meta--isParagraph.c-textLight.u-textCenter.m-xA.u-size3of4
          span.u-block
            nuxt-link.u-linkClean(to="/about") Callum Flack
            | &nbsp;is writing about the things inbetween. Here's the most recent posts:
</template>

<script>
import PostExcerpt from "~/components/PostExcerpt.vue";

export default {
  name: "blog",
  components: {
    PostExcerpt
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
  },
  head() {
    return {
      title: "Blog – Callum Flack Design",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Posts by Callum Flack about digital design, user experience & code"
        }
      ]
    };
  }
};
</script>

<style scope>
@import "../../assets/styles/variables.css";
</style>
