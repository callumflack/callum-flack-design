<template lang="pug">
  article
    c-pagetitle(
      :title="page.title", 
      link="/journal"
      :lede="page.lede", 
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
          
          h3.title.title--ruled Subscribe
          p I send an email newsletter every Sunday with my notes for the past week—the stories and links I saw that were actually interesting, and why they mattered. It's a good way to keep in touch. You should sign up too:
          c-newsletter.text
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import FormNewsletter from "~/components/FormNewsletter.vue";

export default {
  components: {
    "c-pagetitle": PageTitle,
    "c-newsletter": FormNewsletter
  },
  props: {
    title: String,
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
