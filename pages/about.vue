<template lang="pug">
  div
    .Block--sandwich(role="banner")
      .Container
        .u-sm-size2of3.Grid-cell--center
          figure.Figure
            img(:src="page.heroImage", alt="", style="opacity:0.9")
    main.Block(role="main")
      .Container
        nuxtent-body.TypeScope(:body="page.body")
    footer.u-bgColorWhite(role="contentinfo")
      c-nav
</template>

<script>
import Nav from "~/components/Nav.vue";

export default {
  components: {
    "c-nav": Nav
  },
  computed: {
    titleColor() {
      // (v-if="page.projectColor", :style = 'titleColor')
      return this.page.projectColor ? `color: ${this.page.projectColor}` : "";
    }
  },
  props: {
    dropCap: Boolean,
    title: String,
    headline: String
  },
  async asyncData({ app, route, payload }) {
    // If more than 1 x page, change the const to `const contentType = ['/about', '/other'].includes(route.path)`.
    // If there ends up being many pages then create another solution.
    const contentType = "/pages";

    return {
      page: await app.$content(contentType).get(route.path)
    };
  }
};
</script>

<style scoped>
body {
  background-color: salmon !important;
}
</style>
