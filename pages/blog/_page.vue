<template lang="pug">
div
  Post(
    :link="page.permalink"
    :heroImage="page.heroImage"
    :heroRatio="page.heroRatio"
    :heroImageNoShadow="page.heroImageNoShadow"
    :title="page.title"
    :date="page.date"
    :readingtime="page.readingtime"
    :body="page.body"
    :updated="page.updated"
    :note="page.note"
  )
  // .Container.p-b7
    .figure.figure--post
      NewsletterSignupBlock
</template>

<script>
import Post from "~/components/Post.vue";
import NewsletterSignupBlock from "~/components/NewsletterSignupBlock.vue";

export default {
  components: {
    Post,
    NewsletterSignupBlock
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
</style>
