<template lang="pug">
  div
    div(role="banner")
      //- .u-bgColorNeutral
      .Container
        .Block--hero
          .u-sm-size2of3.Grid-cell--center
            figure.Figure
              img(:src="page.heroImage", alt="", style="opacity:0.9")
    main(role="main")
      .Container
        nuxtent-body.Markdown.Drop(:body="page.body")
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
  background-color: rgba(250, 235, 215, 0.4);
}
</style>
