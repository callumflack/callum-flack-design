<template lang="pug">
div
  article.block--pb7
    header(role="banner")
      c-pageheading(
        :heading="page.heading"
        :lede="page.lede"
        projectSpace
      )
      .container
        .ProjectHero(:style="projectColor")
          c-lazyimage(
            v-if="page.heroInCloudinary"
            :src="page.heroImage"
            :noHeroShadow="page.heroImageNoShadow"
            :frame="page.heroFrame"
            :ratio="page.heroRatio"
          )
          c-image(
            v-else
            local
            :src="page.heroImage"
            :noHeroShadow="page.heroImageNoShadow"
            :frame="page.heroFrame"
            :ratio="page.heroRatio"
          )
    main(role="main")
      .container
        nuxtent-body.TypeScope(:body="page.body")
  nuxt-link.NextProject.LinkSignal.block--py7(:to="page.nextProject")
    .container.u-flex.u-flexAlignItemsCenter
      hgroup
        .Text.m-b3 Next project
        .Title
          | {{ page.nextProjectHeading }}
          //- span.ml1.LinkSignal-target →
</template>

<script>
import PageHeading from "~/components/PageHeading2.vue";
import MarkdownMovie from "~/components/MarkdownMovie.vue";
import MarkdownImage from "~/components/MarkdownImage.vue";
import LazyImage from "~/components/LazyImage.vue";

export default {
  components: {
    "c-pageheading": PageHeading,
    "c-movie": MarkdownMovie,
    "c-lazyimage": LazyImage,
    "c-image": MarkdownImage
  },
  props: {
    heading: String,
    lede: String,
    heroImage: String,
    heroImageNoShadow: Boolean,
    heroRatio: String,
    heroFrame: Boolean,
    heroInCloudinary: Boolean,
    heroVideo: String,
    heroVideoLaptop: Boolean,
    heroVideoDesktoptop: Boolean,
    heroVideoPoster: String,
    nextProject: String,
    nextProjectheading: String
  },
  computed: {
    projectColor() {
      // (v-if="page.projectColor", :style = 'projectColor')
      return this.page.projectColor
        ? `background-color: ${this.page.projectColor}`
        : "background-color: rgb(70,70,70)";
    }
  },
  head() {
    return {
      title: `${this.page.heading} – Callum Flack Design`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.page.heading} – ${this.page.lede}`
        }
      ]
    };
  },
  async asyncData({ app, route }) {
    const page = await app.$content("/projects").get(route.path);

    return {
      page
    };
  }
};
</script>

<style>
@import "../../assets/styles/variables.css";

.NextProject {
  background-color: var(--c-dark);
  /* border-top: 1px solid rgba(138, 138, 138, 0.15); */
  /* border-color: var(--c-rule); */
  display: block;

  & .Text,
  & .Title {
    border-color: var(--c-bg);
    color: var(--c-bg);
  }
}
</style>
