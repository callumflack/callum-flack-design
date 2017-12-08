<template lang="pug">
  div
    c-pagenavbar(title="About Callum")
    c-pagenavbarfixed(title="About Callum")
    section.Space(role="banner")
      .Container
        .u-sm-size2of3.Grid-cell--center
        figure.Figure
          img(:src="page.heroImage", alt="", style="opacity:0.9")
    main(role="main")
      .Container
        nuxtent-body.TypeScope.TypeScope-about(:body="page.body")
</template>

<script>
import PageNavbar from "~/components/PageNavbar.vue";
import PageNavbarFixed from "~/components/PageNavbarFixed.vue";

export default {
  components: {
    "c-pagenavbar": PageNavbar,
    "c-pagenavbarfixed": PageNavbarFixed
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
@import "../assets/styles/vars.css";

.Space {
  margin-bottom: calc(var(--s4) + 0.75rem);
}
</style>
