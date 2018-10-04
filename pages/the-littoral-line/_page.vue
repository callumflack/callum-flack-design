<template lang="pug">
  Post(
    :title="page.title"
    :date="page.date"
    :readingTime="page.readingTime"
    :body="page.body"
  )
</template>

<script>
import Post from "~/components/NewsletterPost.vue";

export default {
  layout: "newsletter",
  components: {
    Post
  },
  async asyncData({ app, route }) {
    return {
      page: await app
        .$content("/newsletter")
        /* .query({ exclude: ["attributes"] }) */
        .get(route.path)
    };
  },
  head() {
    return {
      title: `${this.page.title}—The Littoral Line`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Issue ${
            this.page.title
          }—The Littoral Line by Callum Flack Design. Curious and generative links, stories and insights about visual design, user experience and website development systems through the lens of people and attention.`
        }
      ]
    };
  }
};
</script>