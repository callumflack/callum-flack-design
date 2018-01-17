<template lang="pug">
  div
    article(role="banner")
      c-pagetitle(
        :title="page.title"
        link="/work"
        :lede="page.lede"
      )
      .container
        c-movie(
          frame, 
          large, 
          laptop, 
          :poster="page.heroVideoPoster",
          :src="page.heroVideo",
          v-if="page.heroVideo"
        )
        figure.figure.figure--large(v-else)
          c-lazyimage(
            :src="page.heroImage", 
            :ratio="page.heroRatio",
            v-if="page.heroInCloudinary"
          )
          img(:src="page.heroImage", v-else)
    main(role="main")
      .container
        nuxtent-body.textscope(:body="page.body")
        p.block--touch.text.text--meta.text-noIndent(v-if="page.note", v-html="page.note")
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import MarkdownMovie from "~/components/MarkdownMovie.vue";
import LazyImage from "~/components/LazyImage.vue";

export default {
  components: {
    "c-pagetitle": PageTitle,
    "c-movie": MarkdownMovie,
    "c-lazyimage": LazyImage
  },
  props: {
    title: String,
    massive: String,
    lede: String,
    heroImage: String,
    heroVideo: String,
    heroVideoPoster: String,
    heroInCloudinary: Boolean,
    heroRatio: String
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

/* 
 * Project details addendum 
 */

.project-details p,
.project-details ul {
  font-size: 0.75rem !important;
  text-indent: 0;

  @media (--small-viewport) {
    font-size: 0.8125rem !important;
  }
  @media (--large-viewport) {
    font-size: 0.875rem;
    font-size: 0.9375rem;
    font-size: 1rem !important;
  }
}

.project-details p,
.project-details ul {
  margin: 13px 0;
}
</style>
