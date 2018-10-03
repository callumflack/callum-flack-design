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
  data() {
    return {
      page: {}
    };
  },
  async asyncData({ app, route }) {
    const page = await app.$content("/newsletter").get(route.path);

    return {
      page
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

/* dupe from LL index */
.u-icon {
  margin-right: 0.25em;
  transform: translateY(3px);

  @media (min-width: 768px) {
    margin-right: 0.175em;
    transform: translateY(2px);
  }
  @media (min-width: 1280px) {
    transform: translateY(4px);
  }
}

.u-icon >>> svg {
  height: 30px;
  width: 30px;

  @media (min-width: 513px) {
    height: 36px;
    width: 36px;
  }
  @media (min-width: 1280px) {
    height: 54px;
    width: 54px;
  }
}
</style>
