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
        .TypeScope
          no-ssr
            nuxtent-body(:body="page.body")
          
          .heading-space
            hr
            time.u-block.text.c-textLight(:date-time="page.date") Published: {{ page.published }}
            p.text.c-textLight(v-if="page.updated") Updated: {{ page.updated }}
            p.text.c-textLight(v-if="page.note", v-html="page.note")
          
          .block--mt6(v-if="page.tweet")
            //- hr.c-title.mb3
            p.subheading.m-b0.u-textCenter Comments?
            p.text.u-textCenter
              a.visualLink.c-text.icon-targetblank(:href="page.tweet", target="_blank") Twitter
    //- c-postslist
</template>

<script>
import PageHeading from "~/components/PageHeading2.vue";
import FormNewsletter from "~/components/FormNewsletter.vue";
import PostsList from "~/components/PostsList.vue";

export default {
  components: {
    "c-pageheading": PageHeading,
    "c-newsletter": FormNewsletter,
    "c-postslist": PostsList
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
