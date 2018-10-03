<template lang="pug">
  c-post(
    archive
    :link="page.permalink"
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
    "c-post": Post
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
    const page = await app.$content("/newsletter").get(route.path);
    const posts = await app.$content("/newsletter").getAll();

    return {
      page,
      posts
    };
  }
};
</script>

<style lang="postcss">
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
