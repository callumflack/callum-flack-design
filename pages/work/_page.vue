<template lang="pug">
  div
    .Block--half(role="banner")
      .Container
        .Block--sandwich
          h1.Title.Title--sub.u-sm-size11of12.u-pSpace(v-html="page.lede")
            //- span(:style="projectColo") {{ page.title }}.&nbsp;
            //- br
            //- span.Title--sub {{ page.headline }}
        figure.Figure.Figure--large
          img(:src="page.heroImage", alt="")

    main.Block(role="main")
      .Container
        nuxtent-body.Markdown(:body="page.body")

    c-nextproject(v-if="nextPage" :project="nextPage")

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

    const page = await app.$content(contentType).get(route.path);
    let nextPage = null;

    if (contentType === "/projects") {
      try {
        nextPage = await app.$content(contentType).getOnly(page.meta.index + 1);
      } catch (err) {
        // 500 error will be thrown if a page with the passed index does not exist
        if (err.statusCode !== 500) {
          throw err;
        }

        nextPage = null;
      }
    }

    return {
      page,
      nextPage
    };
  }
};
</script>

<style scoped>
.Title--sub span {
  text-transform: uppercase !important;
}
</style>
