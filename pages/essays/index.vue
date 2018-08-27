<template lang="pug">
  main.Container(role="main")
    post-excerpt(
      v-if="post.published && post.category === 'essays'"
      v-for="post in posts"
      :category="post.category"
      :date="post.date"
      :heroImage="post.heroImage"
      :heroImageNoShadow="post.heroImageNoShadow"
      :key="post.permalink"
      :lede="post.lede"
      :permalink="post.permalink"
      :readingTime="post.readingTime"
      :thumbImage="post.thumbImage"
      :tags="post.tags"
      :title="post.title"
    )
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
