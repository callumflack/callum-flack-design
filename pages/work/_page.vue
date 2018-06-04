<template lang="pug">
div
  article.block--pb7
    header(role="banner")
      c-pageheading(
        :titleXl="page.title"
        :lede="page.lede"
        projectSpace
      )
      .container
        div(:class="heroClasses", :style="projectColor")
          c-lazyimage(
            v-if="page.heroInCloudinary"
            :src="page.heroImage"
            :frame="page.heroFrame"
            :ratio="page.heroRatio"
          )
          c-image(
            v-else
            local
            :src="page.heroImage"
            :frame="page.heroFrame"
            :ratio="page.heroRatio"
          )
    main(role="main")
      .container
        nuxtent-body.MarkdownScope(:body="page.body")
  nuxt-link.NextProject.LinkSignal.block--py7(:to="page.nextProject")
    .container.u-flex.u-flexAlignItemsCenter
      hgroup
        .Text.m-b3 Next project
        .Title
          | {{ page.nextProjectTitle }}
</template>

<script>
import PageHeading from "~/components/PageHeading.vue";
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
    title: String,
    lede: String,
    heroImage: String,
    heroRatio: String,
    heroFrame: Boolean,
    heroInCloudinary: Boolean,
    heroIsDevice: Boolean,
    heroVideo: String,
    heroVideoLaptop: Boolean,
    heroVideoDesktoptop: Boolean,
    heroVideoPoster: String,
    nextProject: String,
    nextProjectTitle: String
  },
  computed: {
    projectColor() {
      // (v-if="page.projectColor", :style = 'projectColor')
      return this.page.projectColor
        ? `background-color: ${this.page.projectColor}`
        : "background-color: rgb(250, 250, 250)";
    },
    heroClasses() {
      return [
        "ProjectHero",
        {
          "ProjectHero--isDevice": this.page.heroIsDevice
        }
      ];
    }
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
  async asyncData({ app, route }) {
    const page = await app.$content("/projects").get(route.path);

    return {
      page
    };
  }
};
</script>

<style lang="postcss">
@import "../../assets/styles/variables.css";

.NextProject {
  background-color: var(--c-dark);
  display: block;

  & .Text,
  & .Title {
    border-color: var(--c-bg);
    color: var(--c-bg);
  }
}
</style>
