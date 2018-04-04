<template lang="pug">
.block--pb7
  article
    header(role="banner")
      c-pageheading(:titleXl="page.title")
      .container(v-if="page.heroImage")
        figure.figure.figure--post.figure--large
          img(:src="page.heroImage", alt="")
    main(role="main")
      .container
        .TypeScope
          no-ssr
            nuxtent-body(:body="page.body")

          .HeadingSpace
            hr
            time.u-block.Text.c-textLight(:date-time="page.date") Published: {{ page.published }}
            p.Text.c-textLight(v-if="page.updated") Updated: {{ page.updated }}
            p.Text.c-textLight(v-if="page.note", v-html="page.note")

          .block--mt6(v-if="page.tweet")
            //- hr.c-title.mb3
            p.Heading.m-b0.u-textCenter Comments?
            p.Text.u-textCenter
              a.visualLink.c-text.icon-targetblank(:href="page.tweet", target="_blank") Twitter

  //- c-postslist(:posts="posts")
</template>

<script>
import PageHeading from "~/components/PageHeading.vue";
import FormNewsletter from "~/components/FormNewsletter.vue";
import PostsList from "~/components/PostsList.vue";

export default {
  components: {
    "c-pageheading": PageHeading,
    "c-newsletter": FormNewsletter,
    "c-postslist": PostsList
  },
  props: {
    pageTitle: String,
    title: String,
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
      title: `${this.page.pageTitle} – Callum Flack Design`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.page.pageTitle} – ${this.page.lede}`
        }
      ]
    };
  },
  async asyncData({ app, route }) {
    const page = await app.$content("/posts").get(route.path);
    const posts = await app.$content("/posts").getAll();

    return {
      page,
      posts
    };
  }
};
</script>

<style lang="postcss">
@import "../../assets/styles/variables.css";
</style>
