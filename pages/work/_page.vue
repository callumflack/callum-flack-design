<template lang="pug">
  div
    article(role="banner")
      c-pagenavbar(:title="page.title")
      c-pagenavbarfixed(:title="page.title")
      .Container
        c-movie(frame, large, laptop, :src="page.heroVideo", v-if="page.heroVideo")
        figure.Figure.Figure--large(v-else)
          img(:src="page.heroImage", alt="")

    main(role="main")
      .Container
        nuxtent-body.TypeScope(:body="page.body")
</template>

<script>
import PageNavbar from "~/components/PageNavbar.vue";
import PageNavbarFixed from "~/components/PageNavbarFixed.vue";
import MarkdownMovieAlt from "~/components/MarkdownMovieAlt.vue";

export default {
  components: {
    "c-pagenavbar": PageNavbar,
    "c-pagenavbarfixed": PageNavbarFixed,
    "c-movie": MarkdownMovieAlt
  },
  computed: {
    projectColor() {
      // (v-if="page.projectColor", :style = 'projectColor')
      return this.page.projectColor ? `color: ${this.page.projectColor}` : "";
    }
  },
  props: {
    title: String,
    heroImage: String,
    heroVideo: String
  },
  async asyncData({ app, route, payload }) {
    // If more than 1 x page, change the const to `const contentType = ['/about', '/other'].includes(route.path)`.
    // If there ends up being many pages then create another solution.
    const contentType = route.path === "/about" ? "/pages" : "/projects";

    const page = await app.$content(contentType).get(route.path);

    return {
      page
    };
  }
};
</script>

<style scoped>

</style>
