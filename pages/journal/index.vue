<template lang="pug">
div
  c-pagetitle(title="Journal")
  main(role="main")
    .Container
      .Grid.Grid--alignCenter.Grid--withTinyGutter
        c-post(
          v-for="post in posts"
          :key="post.title"
          :link="post.permalink",
          :image="post.thumbImage",
          :title="post.title",
          :headline="post.headline",
          :date="post.date",
        )
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import Post from "~/components/Post.vue";

export default {
  name: "journal",
  components: {
    "c-pagetitle": PageTitle,
    "c-post": Post
  },
  data() {
    return {
      posts: []
    };
  },
  async asyncData({ app, route, payload }) {
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
    margin-top: var(--s4);
  }
}
</style>
