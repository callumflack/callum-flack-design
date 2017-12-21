<template lang="pug">
  div
    c-pagetitle(
      title="About Callum"
      massive="A design-obsessed, code-based, systems-thinking craftsman."
    )
    section(role="banner")
      .Column
        .Container
          .Inner
            figure.Figure.Figure--large
              img(:src="page.heroImage", alt="", style="opacity:0.9")
    main(role="main")
      .Column
        .Container
          .Inner
            .TypeScope
              nuxtent-body(:body="page.body")
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";

export default {
  components: {
    "c-pagetitle": PageTitle
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
    return {
      page: await app.$content("/pages").get(route.path)
    };
  }
};
</script>

<style scoped>
@import "../assets/styles/vars.css";
</style>
