<template lang="pug">
.container
  c-post(
    :link="page.permalink"
    :title="page.title"
    :date="page.date"
    :readingtime="page.readingtime"
    :body="page.body"
    :updated="page.updated"
    :note="page.note"
  )
  // c-signup
</template>

<script>
import Post from "~/components/Post.vue";
import NewsletterSignupForm from "~/components/NewsletterSignupForm.vue";

export default {
  components: {
    "c-post": Post,
    "c-signup": NewsletterSignupForm
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
