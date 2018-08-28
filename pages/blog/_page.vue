<template lang="pug">
div
  Post(
    :body="page.body"
    :category="page.category"
    :date="page.date"
    :heroImage="page.heroImage"
    :heroImageNoShadow="page.heroImageNoShadow"
    :heroRatio="page.heroRatio"
    :link="page.permalink"
    :note="page.note"
    :readingTime="page.readingTime"
    :tags="page.tags"
    :title="page.title"
    :updated="page.updated"
  )
  //- .Container.p-b7
    .figure.figure--post
      NewsletterSignupBlock
</template>

<script>
import Post from "~/components/Post.vue";

export default {
  components: {
    Post
  },
  data() {
    return {
      page: {}
    };
  },
  async asyncData({ app, route }) {
    const page = await app.$content("/posts").get(route.path);

    return {
      page
    };
  },
  head() {
    return {
      title: `${this.page.title}—Callum Flack Design`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.page.title}—${this.page.lede}`
        }
      ]
    };
  }
};
</script>