<template lang="pug">
div
  header.NewsletterHero.CoverImage(role="banner")
    .Container.u-relative.b-py4
      //- h1.Supertitle.u-textCenter.p-t1.b-mb2 ❏ Interesting
      h1.Supertitle.u-textCenter.p-t1.b-mb2 ✺ Interesting
      NewsletterSignupForm
  
  // main.block--pb7.block--matchFixedMenuTop(role="main")
    .Container.Container--newsletter
      c-postexcerpt(
        v-if="post.published"
        v-for="post in posts"
        :key="post.permalink"
        :link="post.permalink"
        :title="post.title"
        :date="post.date"
        :summary="post.summary"
      )
</template>

<script>
import PostExcerpt from "~/components/PostExcerpt.vue";
import NewsletterSignupForm from "~/components/NewsletterSignupForm.vue";

export default {
  components: {
    PostExcerpt,
    NewsletterSignupForm
  },
  head() {
    return {
      title: "Interesting—a mailing list by Callum Flack Design",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Interesting—a mailing list by Callum Flack Design. It's about 'things inbetween'—the stories, ideas and links that I've found curious, resonating, interesting"
        }
      ]
    };
  }
  /* data() {
    return {
      posts: []
    };
  },
  async asyncData({ app }) {
    const posts = await app.$content("/newsletter").getAll();

    return {
      posts
    };
  } */
};
</script>