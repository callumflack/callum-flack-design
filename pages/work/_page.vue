<template lang="pug">
  div
    article(role="banner")
      c-pagetitle(:title="page.title")
      .Container
        c-movie(
          frame, 
          large, 
          laptop, 
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
      .Container
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
    heroImage: String,
    heroVideo: String,
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

</style>
