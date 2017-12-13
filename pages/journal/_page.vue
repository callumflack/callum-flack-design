<template lang="pug">
  article(role="banner")
    c-pagetitle(:title="page.title")
    .Container
      c-movie(frame, large, laptop, :src="page.heroVideo", v-if="page.heroVideo")
      figure.Figure.Figure--large(v-else)
        img(:src="page.heroImage", alt="")
    main(role="main")
      .Container
        nuxtent-body.TypeScope(:body="page.body")
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import MarkdownMovieAlt from "~/components/MarkdownMovieAlt.vue";

export default {
  components: {
    "c-pagetitle": PageTitle,
    "c-movie": MarkdownMovieAlt
  },
  props: {
    title: String,
    heroImage: String,
    heroVideo: String
  },
  async asyncData({ app, route, payload }) {
    // If more than 1 x page, change the const to `const contentType = ['/about', '/other'].includes(route.path)`.
    // If there ends up being many pages then create another solution.
    const contentType = route.path === "/about" ? "/pages" : "/posts";

    const page = await app.$content(contentType).get(route.path);

    return {
      page
    };
  }
};
</script>

<style>

</style>
