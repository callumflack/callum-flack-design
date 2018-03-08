<template lang="pug">
  article.block--pb7
    header(role="banner")
      c-pageheading(
        :heading="page.heading"
        :lede="page.lede"
        project
      )
      .container
        c-lazyimage(
          v-if="page.heroInCloudinary"
          large
          project
          :src="page.heroImage"
          :frame="page.heroFrame"
          :ratio="page.heroRatio"
        )
        c-image(
          v-else
          large
          project
          local
          :src="page.heroImage"
          :frame="page.heroFrame"
          :ratio="page.heroRatio"
        )
    main(role="main")
      .container
        nuxtent-body.text-scope(:body="page.body")
  //- nuxt-link.next-project.linkSignal.block--py7(:to="page.nextProject")
    .container.u-flex.u-flexAlignItemsCenter
      hgroup
        .text.text--meta.u-marginB1 Next project
        .title.small-space 
          | {{ page.nextProjectHeading }}
          span.ml1.linkSignal-target →
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
    heading: String,
    lede: String,
    heroImage: String,
    heroRatio: String,
    heroVideo: String,
    heroVideoLaptop: Boolean,
    heroVideoDesktoptop: Boolean,
    heroVideoPoster: String,
    heroFrame: Boolean,
    heroInCloudinary: Boolean,
    nextProject: String,
    nextProjectheading: String
  },
  head() {
    return {
      title: `${this.page.heading} – Patternworks`,
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

.next-project {
  border-top: 1px solid rgba(138, 138, 138, 0.15);
  border-color: var(--c-border);
  display: block;
}

/* matches `blockquote p em` in type.css */
.small-space {
  margin-top: var(--s-1);

  @media (--lg) {
    margin-top: var(--s-2);
  }
}
</style>
