<template lang="pug">
  article
    header(role="banner")
      .Container.b-pb2
        .Extract-super
          .AspectRatio(:style="heroAspectStyle")
            .AspectRatio-object.Project-hero.bg-highlight(:class="heroFrameClasses")
              ImageCld(:src="page.heroImage")
        .b-pt2.w-5x6.w-lg-9x12.m-xAuto
          h1.Title.u-textCenter.p-t3 {{ page.title }}
          .Meta.u-textCenter
            span(v-if="page.year") {{ page.year }}
            span.m-x2(v-if="page.tags") •
            span(v-if="page.tags") {{ page.tags }}
            // time(:date-time="date") {{ date | moment("MMMM Do, YYYY") }}

    main(role="main")
      .Container.p-t2
        nuxtent-body.Scope-post(:body="page.body")

  //- nuxt-link.NextProject.LinkSignal.block--py7(:to="page.nextProject")
    .Container.u-flex.u-flexAlignItemsCenter
      hgroup
        .Text.m-b3 Next project
        .Title {{ page.nextProjectTitle }}
</template>

<script>
import ImageCld from "~/components/ImageLazyCldOrig.vue";

export default {
  components: {
    ImageCld
  },
  props: {
    title: String,
    lede: String,
    year: String,
    tags: String,
    heroImage: String,
    heroRatio: {
      type: String,
      default: "56.25"
    },
    heroFrame: {
      type: Boolean,
      default: false
    },
    heroInCloudinary: Boolean,
    heroIsDevice: Boolean,
    heroImageNoShadow: Boolean,
    heroVideo: String,
    heroVideoLaptop: Boolean,
    heroVideoDesktoptop: Boolean,
    heroVideoPoster: String,
    nextProject: String,
    nextProjectTitle: String
  },
  computed: {
    projectColor() {
      return this.page.projectColor
        ? `background-color: ${this.page.projectColor}`
        : "background-color: transparent";
    },
    titleColor() {
      return this.page.titleColor && `color: ${this.page.titleColor}`;
    },
    heroFrameClasses() {
      return [
        {
          "Project-hero--isDevice": this.page.heroImageNoShadow
        }
      ];
    },
    heroAspectClasses() {
      return this.heroRatio && `AspectRatio--${this.page.heroRatio}`;
    },
    heroAspectStyle() {
      return this.heroRatio && `padding-bottom: ${this.page.heroRatio}%`;
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
