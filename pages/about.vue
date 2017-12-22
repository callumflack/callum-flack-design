<template lang="pug">
  div
    c-pagetitle(
      title="About Callum"
      link="/about"
      massive="A design-obsessed, code-based, systems-thinking craftsman."
    )
    section(role="banner")
      .Column
        .Inner
          c-image(large, :src="page.heroImage", style="opacity:0.9")
    main(role="main")
      .Column
        .Inner
          .TextScope
            nuxtent-body(:body="page.body")
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import MarkdownImage from "~/components/MarkdownImage.vue";

export default {
  components: {
    "c-pagetitle": PageTitle,
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
