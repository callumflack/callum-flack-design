<template lang="pug">
div
  //- nav.Container.b-nav
    h3.Nav-locator.Meta
      span.m-r2 01
      span Blog
    //- .Extract-large
      hr
  main.Container.b-pt4(role="main")
    post-excerpt(
      v-if="post.published"
      v-for="post in posts"
      :body="post.body"
      :category="post.category"
      :date="post.date"
      :heroImage="post.heroImage"
      :heroImageNoShadow="post.heroImageNoShadow"
      :key="post.permalink"
      :lede="post.lede"
      :permalink="post.permalink"
      :readingTime="post.readingTime"
      :thumbImage="post.thumbImage"
      :showFullArticle="post.showFullArticle"
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
      title: "Blog—Callum Flack Design",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Posts by Callum Flack about design, user experience, code and the 'things inbetween' that inform their success"
        }
      ]
    };
  }
};
</script>
