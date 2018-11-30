<template lang="pug">
  header.b-py2.NewsletterHero(role="banner")
    .Container
      h1.Supertitle.m-b4
        IconBase.LittoralIcon(icon-name="icon-sun")
          IconSun
        | The Littoral Line
      //- p I write an email letter once or twice a month about visual design, user experience and website development systems through the lens of people and attention. I'm always looking for the "inbetween things", those that live in the littoral zone, so to speak, where . I hope to share curious and generative links, stories and insights with you. Even if you think your digital interfaces are resonating with your audience, I hope you'll get something generative out of reading 
        em.fs-italic Interesting:
      p I write an email letter once or twice a month about visual design, user experience and website development systems through the lens of people and attention. I'm always looking for the "inbetween things" that wash up in the littoral zone, so to speak. 
      //- I'll share curious and generative links, stories and insights that I hope resonate with you as much they did me:
      NewsletterSignupForm
      p.fs-text-sm.rm-t4 
        | Ps. If you sign up, I'll send you a 
        em Wardley Map for branded websites. 
        | People say it's helped them clarify what to focus on when attempting differentiate with their website.
  
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
      title: "The Littoral Line—a mailing list by Callum Flack Design",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Design, UX & the web thru the lens of people + attention. Discover adjacent possibles by exploring the atypical in-betweens that wash-up in the littoral zone."
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

<style lang="postcss" scoped>
.LittoralIcon >>> svg {
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
