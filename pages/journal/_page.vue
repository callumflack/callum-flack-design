<template lang="pug">
.block--pb7
  article
    header(role="banner")
      c-pageheading(:heading="page.heading")
      .container(v-if="page.heroImage")
        figure.figure.figure--post.figure--large
          img(:src="page.heroImage", alt="")
    main(role="main")
      .container
        .journal-scope
          no-ssr
            nuxtent-body(:body="page.body")
          
          time.u-block.block--mt4.text.text--meta(:date-time="page.date") Published: {{ page.published }}
          p.text.text--meta(v-if="page.updated") Updated: {{ page.updated }}
          p.text.text--meta(v-if="page.note", v-html="page.note")
          
          .block--mt6(v-if="page.tweet")
            //- hr.c-title.mb3
            p.subheading.m-b0.u-textCenter Comments?
            p.text.u-textCenter
              a.visualLink.c-text.icon-targetblank(:href="page.tweet", target="_blank") Twitter
          //- hr.block--my6(v-else)
          //- c-newsletter
</template>

<script>
import PageHeading from "~/components/PageHeading.vue";
import FormNewsletter from "~/components/FormNewsletter.vue";

export default {
  components: {
    "c-pageheading": PageHeading,
    "c-newsletter": FormNewsletter
  },
  props: {
    heading: String,
    lede: String,
    published: String,
    updated: String,
    note: String,
    tweet: String,
    heroImage: String,
    heroVideo: String
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
    const page = await app.$content("/posts").get(route.path);

    return {
      page
    };
  }
};
</script>

<style>
@import "../../assets/styles/variables.css";
</style>
