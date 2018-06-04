<template lang="pug">
div
  c-post(
    :link="page.permalink"
    :title="page.title"
    :date="page.date"
    :readingtime="page.readingtime"
    :body="page.body"
  )
  .container
    .HeadingSpace(v-if="page.updated || page.note")
      hr
      p.Text.c-textLight(v-if="page.updated") Updated: {{ page.updated }}
      p.Text.c-textLight(v-if="page.note", v-html="page.note")

    .block--mt6(v-if="page.tweet")
      p.Heading.m-b0.u-textCenter Comments?
      p.Text.u-textCenter
        a.visualLink.c-text.icon-targetblank(:href="page.tweet", target="_blank") Twitter
</template>

<script>
import Post from "~/components/Post.vue";
import FormNewsletter from "~/components/FormNewsletter.vue";

export default {
  components: {
    "c-post": Post
  },
  props: {
    updated: String,
    note: String,
    tweet: String
  },
  head() {
    return {
      title: `${this.page.title} – Callum Flack Design`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.page.title} – ${this.page.lede}`
        }
      ]
    };
  },
  data() {
    return {
      posts: []
    };
  },
  async asyncData({ app, route }) {
    const page = await app.$content("/posts").get(route.path);
    const posts = await app.$content("/posts").getAll();

    return {
      page,
      posts
    };
  }
};
</script>

<style lang="postcss">
@import "../../assets/styles/variables.css";
</style>
