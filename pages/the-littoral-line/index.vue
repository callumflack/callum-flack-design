<template lang="pug">
div
  header.b-pt4.b-pb3.NewsletterHero(role="banner")
    .Container
      h1.Supertitle.rm-b4
        //- span.fw-300 ❏ 
        //- span.fw-300 ✺ 
        IconBase(icon-name="icon-sun" height="48" width="48")
          IconSun
        | &nbsp;The Littoral Line
      //- p I write an email letter once or twice a month about visual design, user experience and website development systems through the lens of people and attention. I'm always looking for the "inbetween things", those that live in the littoral zone, so to speak, where . I hope to share curious and generative links, stories and insights with you. Even if you think your digital interfaces are resonating with your audience, I hope you'll get something generative out of reading 
        em.Text--italic Interesting:
      p I write an email letter once or twice a month about visual design, user experience and website development systems through the lens of people and attention. I'm always looking for the "inbetween things" that wash up in the littoral zone, so to speak. I'll share curious and generative links, stories and insights that I hope resonate with you as much they did me:
      NewsletterSignupForm
  
  //- main.block--pb7.block--matchFixedMenuTop(role="main")
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
import IconBase from "~/components/IconBase.vue";
import IconSun from "~/components/icons/IconSun.vue";
import NewsletterSignupForm from "~/components/NewsletterSignupForm.vue";
import PostExcerpt from "~/components/PostExcerpt.vue";

export default {
  components: {
    IconBase,
    IconSun,
    NewsletterSignupForm,
    PostExcerpt
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