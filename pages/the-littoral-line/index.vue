<template lang="pug">
//- .NewsletterHero
div
  header.b-ptTitle.b-pb1(role="banner")
    .Container
      .w-sm-10x1
        h1.Supertitle.m-b2
          //- IconBase.LittoralIcon(icon-name="icon-sun")
            IconSun
          | The Littoral Line
        //- p I write an email letter once or twice a month about visual design, user experience and website development systems through the lens of people and attention. I'm always looking for the "inbetween things", those that live in the littoral zone, so to speak, where . I hope to share curious and generative links, stories and insights with you. Even if you think your digital interfaces are resonating with your audience, I hope you'll get something generative out of reading
          em.fs-italic Interesting:
        //- p I write an email letter once or twice a month about visual design, user experience and website development systems through the lens of people and attention. I'm always looking for the "inbetween things" that wash up in the littoral zone, so to speak.
        //- I'll share curious and generative links, stories and insights that I hope resonate with you as much they did me:
        //- NewsletterSignupForm
        //- p.fs-text-sm.rm-t4
          | Ps. If you sign up, I'll send you a
          em Wardley Map for branded websites.
          | People say it's helped them clarify what to focus on when attempting differentiate with their website.

        NewsletterSignupBlock.b-mt05

  main(role="main")
    .Container
      //- h2.Heading The archives:
      h2.Subtitle.Projects-year.m-b1 The archives:
      .Projects
        ProjectListItem(
          v-for="item in newsletters.issues"
          v-bind="item"
          v-bind:key="item.title"
        )

</template>

<script>
import IconBase from "~/components/IconBase";
import IconSun from "~/components/icons/IconSun";
import NewsletterSignupBlock from "~/components/NewsletterSignupBlock";
import ProjectListItem from "~/components/ProjectListItem";
import newsletters from "~/data/newsletters";

export default {
  components: {
    IconBase,
    IconSun,
    NewsletterSignupBlock,
    ProjectListItem,
    newsletters
  },
  data() {
    return {
      newsletters
    };
  },
  head() {
    return {
      title: "The Littoral Line • Callum Flack Design",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "A newsletter about design, UX, code & the web thru the lens of people and attention. Discover adjacent possibles by exploring the in-betweens that wash-up in the littoral zone."
        },
        // Twitter Card
        { name: 'twitter:title', content: `The Littoral Line • Callum Flack Design` },
        { name: 'twitter:description', content: "A newsletter about design, UX, code & the web thru the lens of people and attention. Discover adjacent possibles by exploring the in-betweens that wash-up in the littoral zone." },
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
/* .LittoralIcon >>> svg {
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
} */
</style>
