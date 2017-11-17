<template lang="pug">
  .Container
    .Block--sandwich
      h1.Title
        span(:style="titleColor") {{ page.title }}.&nbsp;
        span.Title--sub {{ page.headline }}
    
    nuxtent-body.Markdown(:body="page.body")

    c-endrule

</template>

<script>
import EndRule from "~/components/EndRule.vue";

export default {
  components: {
    "c-endrule": EndRule
  },
  computed: {
    titleColor() {
      // (v-if="page.projectColor", :style = 'titleColor')
      return this.page.projectColor ? `color: ${this.page.projectColor}` : "";
    }
  },
  props: {
    projectColor: String,
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
