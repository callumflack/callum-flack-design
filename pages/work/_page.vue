<template lang="pug">
  div
    .Block--half(role="banner")
      .Container
        .Block--sandwich
          h1.Title.Title--sub.u-sm-size11of12.u-pSpace(v-html="page.lede")
        figure.Figure.Figure--large
          img(:src="page.heroImage", alt="")

    main.Block(role="main")
      .Container
        nuxtent-body.Markdown(:body="page.body")

    nuxt-link(to="/work")
      .Block--sandwichPadding
        .Container
          h1.Title.u-sm-size11of12
            span View all work  →

</template>

<script>
export default {
  components: {},
  computed: {
    projectColor() {
      // (v-if="page.projectColor", :style = 'projectColor')
      return this.page.projectColor ? `color: ${this.page.projectColor}` : "";
    }
  },
  props: {
    lede: String,
    heroImage: String
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
.Title--sub span {
  text-transform: uppercase !important;
}
</style>
