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

<style>
@import "../../assets/styles/variables.css";

.nl-container {
  max-width: 600px !important;
  padding: 0;
}

.nl-content {
  padding: 16px;
  max-width: 600px;
  margin: 0 auto;
  display: block;
}

.nl-content table {
  width: 100%;
}

.nl-img-fullbleed {
  display: inline;
  /* border-radius: 3px; */
  /* margin-bottom: 1.5em; */
  margin-top: 0.25rem;
  margin-bottom: 1.5rem;
  width: 100% !important;
  max-width: 100% !important;
  height: auto !important;
  max-height: auto !important;
}

.nl-spacer {
  margin-top: var(--s-4a);
  margin-bottom: calc(1.1 * var(--s-4a));
}

.nl-content hr {
  /* background-color: var(--c-text); */
  /* height: 1rem; */
  margin-bottom: calc(1.1 * var(--s-4a));
}
</style>
