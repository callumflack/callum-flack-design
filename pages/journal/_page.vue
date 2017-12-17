<template lang="pug">
  article(role="banner")
    c-pagetitle(:title="page.title")
    .Column(v-if="page.heroImage")
      .Container
        figure.Figure.Figure--large
          img(:src="page.heroImage", alt="")
    main(role="main")
      .Column
        .Container
          .Inner
            nuxtent-body.TypeScope.TypeScope-post(:body="page.body")
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import MarkdownMovie from "~/components/MarkdownMovie.vue";

export default {
  components: {
    "c-pagetitle": PageTitle,
    "c-movie": MarkdownMovie
  },
  props: {
    title: String,
    heroImage: String,
    heroVideo: String
  },
  async asyncData({ app, route, payload }) {
    const page = await app.$content("/posts").get(route.path);

    return {
      page
    };
  }
};
</script>

<style>

</style>
