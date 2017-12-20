<template lang="pug">
  div
    article(role="banner")
      c-pagetitle(:title="page.title", :lede="page.lede")
      .Column
        .Container
          .Inner
            c-movie(
              frame, 
              large, 
              laptop, 
              :poster="page.heroVideoPoster",
              :src="page.heroVideo",
              v-if="page.heroVideo"
            )
            figure.Figure.Figure--large(v-else)
              c-lazyimage(
                :src="page.heroImage", 
                :ratio="page.heroRatio",
                v-if="page.heroInCloudinary"
              )
              img(:src="page.heroImage", v-else)
    main(role="main")
      .Column
        .Container
          .Inner
            nuxtent-body.TypeScope(:body="page.body")
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
  async asyncData({ app, route, payload }) {
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

.Project-details p,
.Project-details ul {
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

.Project-details p,
.Project-details ul {
  margin: 13px 0;
}
</style>
