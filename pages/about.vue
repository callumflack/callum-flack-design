<template lang="pug">
  .block--pageEnd
    header(role="banner")
      c-pageheading(
        link="/about"
        heading="About"
        lede="Callum Flack is a design-obsessed, systems-thinking, code-based craftsman."
      )
      .container
        c-image(portrait, :src="page.heroImage", style="opacity:0.9")
    main(role="main")
      .container
        .text-scope
          nuxtent-body(:body="page.body")
</template>

<script>
import PageHeading from "~/components/PageHeading.vue";
import MarkdownImage from "~/components/MarkdownImage.vue";

export default {
  components: {
    "c-pageheading": PageHeading,
    "c-image": MarkdownImage
  },
  props: {},
  async asyncData({ app, route }) {
    return {
      page: await app.$content("/pages").get(route.path)
    };
  }
};
</script>

<style scoped>
@import "../assets/styles/vars.css";
</style>
