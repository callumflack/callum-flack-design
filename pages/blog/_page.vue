<template lang="pug">
div(:class="projectPageClass")
  Post(
    :blockColor="page.blockColor"
    :body="page.body"
    :category="page.category"
    :date="page.date"
    :heroImage="page.heroImage"
    :heroImageNoShadow="page.heroImageNoShadow"
    :heroRatio="page.heroRatio"
    :link="page.permalink"
    :mostRecentPost = "page.mostRecentPost"
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
  computed: {
    projectPageClass() {
      /* return (this.page.category = "project" && "bg-neutral"); */
    }
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