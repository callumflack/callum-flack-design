<template lang="pug">
div
  nav.Container.b-nav
    h3.Nav-locator.Meta.c-textLight
      span.m-r2 02
      //- em.Text--italic Essays
      span Essays
    .Extract-large
      hr
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
      title: "Essays—Callum Flack Design",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Essays by Callum Flack about design, user experience, code and the 'things inbetween' that inform their success"
        }
      ]
    };
  }
};
</script>
