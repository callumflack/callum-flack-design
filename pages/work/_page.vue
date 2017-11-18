<template lang="pug">
  div
    .Block--half(role="banner")
      .Container
        .Block--sandwich
          h1.Title.u-sm-size11of12
            span(:style="projectColor") {{ page.title }}.&nbsp;
            span.Title--sub {{ page.headline }}
        figure.Figure.Figure--large
          img(:src="page.heroImage", alt="")

    main.Block(role="main")
      .Container
        nuxtent-body.Markdown(:body="page.body")
      
    c-nextproject(next="oceanblue-living")

</template>

<script>
import NextProject from "~/components/NextProject.vue";

export default {
  components: {
    "c-nextproject": NextProject
  },
  computed: {
    projectColor() {
      // (v-if="page.projectColor", :style = 'projectColor')
      return this.page.projectColor ? `color: ${this.page.projectColor}` : "";
    }
  },
  props: {
    title: String,
    headline: String,
    next: String
  },
  async asyncData({ app, route, payload }) {
    // If more than 1 x page, change the const to `const contentType = ['/about', '/other'].includes(route.path)`.
    // If there ends up being many pages then create another solution.
    const contentType = route.path === "/about" ? "/pages" : "/projects";

    return {
      page: await app.$content(contentType).get(route.path)
    };
  }
};
</script>

<style scoped>

</style>
