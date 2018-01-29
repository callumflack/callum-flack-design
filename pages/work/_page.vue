<template lang="pug">
div
  article.block--articleEnd
    header(role="banner")
      c-pageheading(
        :heading="page.heading"
        link="/work"
        :lede="page.lede"
      )
      .container
        c-movie(
          v-if="page.heroVideo"
          :src="page.heroVideo"
          large
          :frame="page.heroFrame"
          :laptop="page.heroVideoLaptop"
          :desktop="page.heroVideoDesktop"
          :poster="page.heroVideoPoster"
        )
        figure.figure.figure--large(v-else)
          c-lazyimage(
            v-if="page.heroInCloudinary"
            :src="page.heroImage"
            :frame="page.heroFrame"
            :ratio="page.heroRatio"
          )
          img(
            v-else
            :src="page.heroImage"
          )
    main(role="main")
      .container
        nuxtent-body.text-scope(:body="page.body")
  nuxt-link.next-project.linkSignal.block--nextProject(:to="page.nextProject")
    .container.u-flex.u-flexAlignItemsCenter
      hgroup
        .text.text--meta.u-marginB1 Next project
        .title.small-space 
          | {{ page.nextProjectHeading }}
          span.ml2.linkSignal-target →
</template>

<script>
import PageHeading from "~/components/PageHeading.vue";
import MarkdownMovie from "~/components/MarkdownMovie.vue";
import LazyImage from "~/components/LazyImage.vue";

export default {
  components: {
    "c-pageheading": PageHeading,
    "c-movie": MarkdownMovie,
    "c-lazyimage": LazyImage
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
          content: `${this.page.lede}`
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
@import "../../assets/styles/vars.css";

.next-project {
  border-top: 1px solid rgba(138, 138, 138, 0.15);
  border-color: var(--color-border);
  display: block;
}

/* matches `blockquote p em` in type.css */
.small-space {
  margin-top: var(--s1);

  @media (--large-viewport) {
    margin-top: var(--s2);
  }
}
</style>
