<template lang="pug">
  div
    .Container
      .Block--hero
        .u-sm-size2of3.Grid-cell--center(v-if="page.heroImageFirst")
          figure.Figure
            img(:src="page.heroImage", alt="", style="opacity:0.9")
        .u-sm-size(v-if="!page.heroImageFirst")
          h1.Title
            span.Title.--italic(style="color:rgba(171,140,64,0.7)") {{ page.title }}.&nbsp;
            | {{ page.headline }}
      
      nuxtent-body(:class="markdownClass", :body="page.body")

</template>

<script>
export default {
  components: {},
  computed: {
    titleColor() {
      // (v-if="page.projectColor", :style = 'titleColor')
      return this.page.projectColor ? `color: ${this.page.projectColor}` : "";
    },
    markdownClass() {
      return [
        "Markdown",
        {
          Drop: this.page.dropCap
        }
      ];
    }
  },
  props: {
    projectColor: String,
    dropCap: Boolean,
    title: String,
    headline: String
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
