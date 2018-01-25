<template lang="pug">
.block--pageEnd
  article
    header(role="banner")
      c-pageheading(
        :heading="page.heading"
        link="/journal"
      )
      .container(v-if="page.heroImage")
        figure.figure.figure--large
          img(:src="page.heroImage", alt="")
    main(role="main")
      .container
        .journal-scope
          no-ssr
            nuxtent-body(:body="page.body")
          
          time.u-block.block--touch.text.text--meta(:date-time="page.date") Published: {{ page.published }}
          p.text.text--meta(v-if="page.updated") Updated: {{ page.updated }}
          p.text.text--meta.text-noIndent(v-if="page.note") {{ page.note }}
          
          .block(v-if="page.tweet")
            //- hr.color-title.mb3
            p.title.u-textCenter
              | Comments?
              br
              a.visualLink.color-text.icon-targetblank(:href="page.tweet", target="_blank") Twitter
          hr.block(v-else)
          c-newsletter
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
  async asyncData({ app, route }) {
    const page = await app.$content("/posts").get(route.path);

    return {
      page
    };
  }
};
</script>

<style>
@import "../../assets/styles/vars.css";
</style>
