<template lang="pug">
  div
    .Container
      .Block--hero
        .u-sm-size2of3.Grid-cell--center(v-if="page.heroImageFirst")
          figure
            img(:src="page.heroImage", alt="", style="opacity:0.88")
        .Block--quarter.u-lg-size2of3.Grid-cell--center
          h1 {{ page.title }}
          p.Subheading.u-textCenter.u-marginT3 {{ page.headline }}
          //- span {{ page.title }}.&nbsp;
      .Figure.Figure--large(v-if="!page.heroImageFirst")
        img(:src="page.heroImage", alt="")
      .Block--half
        nuxtent-body.Markdown(:body="page.body")
</template>

<script>
import CoverImage from "~/components/CoverImage.vue";
// import Hero from '~/components/hero.vue'

export default {
  components: {
    CoverImage
  },
  computed: {
    titleColor() {
      // (v-if="page.projectColor", :style = 'titleColor')
      return this.page.projectColor ? `color: ${this.page.projectColor}` : "";
    }
  },
  props: {
    projectColor: String
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
