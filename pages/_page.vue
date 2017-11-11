<template lang="pug">
  div
    .Container
      .Block--quarter
        figure.Figure.Figure--medium
          img(src="images/callum-flack-02.jpg", alt="")
        h1.Block--quarter
          //- span {{ page.title }}.&nbsp;
          | {{ page.headline }}
    //- .Container.Container--hero(v-if="!page.noHeroImageOnProjectPage")
      .FlexEmbed
        .FlexEmbed-ratio.FlexEmbed-ratio--16by9
        .FlexEmbed-content
          CoverImage(
            byHeight, 
            :src="page.heroImage"
          )
    .Container
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
