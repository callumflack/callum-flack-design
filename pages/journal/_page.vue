<template lang="pug">
  article(role="banner")
    c-pagetitle(
      :title="page.title", 
      link="/journal"
    )
    .container(v-if="page.heroImage")
      figure.figure.figure--large
        img(:src="page.heroImage", alt="")
    main(role="main")
      .container
        .textscope.textscope-post
          no-ssr
            nuxtent-body(:body="page.body")
          
          hr
          p Thanks for reading! I like dialogue. Please #[a(href="https://twitter.com/callumflack") tweet] or #[a(href="mailto:callum@patternworks.com.au") email] comments. I also write a newsletter every week about what I've been into, where new posts will also be mentioned. It's great way to keep in touch. You should sign-up:
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

.Highlight {
  background-color: var(--color-bg-blue);
  background-color: color(var(--color-bg-blue) tint(20%));
  background-color: #c6e4ff;
  padding: var(--s3);

  & p {
    padding: initial;
  }
}
</style>
