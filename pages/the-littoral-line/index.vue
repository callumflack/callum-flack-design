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
      p Here are the archives:
      //- h2.Subtitle.m-b2.b-pt075 2018
      .Projects
        ProjectListItem(
          v-for="item in issues"
          v-bind="item"
          v-bind:key="item.title"
        )

</template>

<script>
import IconBase from "~/components/IconBase.vue";
import IconSun from "~/components/icons/IconSun.vue";
import NewsletterSignupBlock from "~/components/NewsletterSignupBlock.vue";
import ProjectListItem from "~/components/ProjectListItem.vue";

export default {
  components: {
    IconBase,
    IconSun,
    NewsletterSignupBlock,
    ProjectListItem
  },
  data() {
    return {
      issues: [
        {
          title: "The thingness of words",
          number: "LL01",
          date: "2018.10.05",
          link: "https://the-littoral-line.callumflack.design/LL01.html",
          tags: "",
          medium: ""
        },
        {
          title: "Irritating ideas and economic growth",
          number: "LL02",
          date: "2018.10.19",
          link: "https://the-littoral-line.callumflack.design/LL02.html",
          tags: "",
          medium: ""
        },
        {
          title: "System 1 perceives and System 2 creates",
          number: "LL03",
          date: "2018.11.02",
          link: "https://the-littoral-line.callumflack.design/LL03.html",
          tags: "",
          medium: ""
        },
        {
          title: "Aesthetic arrest",
          number: "LL04",
          date: "2018.11.18",
          link: "https://the-littoral-line.callumflack.design/LL04.html",
          tags: "",
          medium: ""
        }
      ]
    };
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
