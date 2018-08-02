<template lang="pug">
div
  header.NewsletterHero.CoverImage(role="banner")
    .Container.u-relative.b-py4
      h1.Super.u-textCenter.p-t1.b-mb2 ❏ interesting
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
      
      //- .InterludeSpace
        hr
        .block--my7
          p.Meta.Meta--isParagraph.c-textLight.u-textCenter.m-xAuto.u-size3of4
            span.u-block
              nuxt-link.u-linkClean(to="/about") Callum Flack
              | &nbsp;is writing about the things inbetween. Here's the most recent posts:
        hr
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
      title: "Interesting – a mailing list by Callum Flack Design",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Interesting – a mailing list by Callum Flack Design. It's "
        }
      ]
    };
  },
  data() {
    return {
      posts: []
    };
  },
  async asyncData({ app }) {
    const posts = await app.$content("/newsletter").getAll();

    return {
      posts
    };
  }
};
</script>