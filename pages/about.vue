<template lang="pug">
article
  header.block--matchFixedMenu.block--pb7(role="banner")
    //- c-pageheading(
    //-   :heading="page.heading"
    //-   :lede="page.lede"
    //-   projectScope
    //- )
    .container
      c-lazyimage(
        v-if="page.heroInCloudinary"
        project
        portrait
        :src="page.heroImage"
      )
      c-image(
        v-else-if="page.heroImage"
        project
        portrait
        local
        :src="page.heroImage"
      )
  main.block--pb7(role="main")
    .container
      nuxtent-body.TypeScope(:body="page.body")
</template>

<script>
import PageHeading from "~/components/PageHeading.vue";
import LazyImage from "~/components/LazyImage.vue";
import MarkdownImage from "~/components/MarkdownImage.vue";

export default {
  components: {
    "c-pageheading": PageHeading,
    "c-lazyimage": LazyImage,
    "c-image": MarkdownImage
  },
  props: {
    heading: String,
    lede: String,
    heroImage: String
  },
  head() {
    return {
      title: `${this.page.heading} – Callum Flack Design`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.page.heading} – ${this.page.lede}`
        }
      ]
    };
  },
  async asyncData({ app, route }) {
    return {
      page: await app.$content("/pages").get(route.path)
    };
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";
</style>
