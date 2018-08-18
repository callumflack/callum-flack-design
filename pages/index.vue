<template lang="pug">
div
  header.Container.b-pb3(role="banner")
    .Adjacent
      h1.Heading.m-b3
        | Callum Flack designs and develops website systems to reach each before all.
      h2.Text
        span.fs-scale-reset
          span.Meta.fw-bold Tiago Forte 
        | —&nbsp;“Routinely entrusted with digital product innovation for companies like Apple, Google, Nike, and Facebook, which rarely approach outside firms.” 
        nuxt-link(to="/about") 
          em.Text--italic Learn more…

  //- .Test
    p 
      | YO
      button.Button One
      button.Button.Button--alt Two

  main(role="main")
    article.Container
      .p-b4
        .Meta.u-textCenter 
          span.fw-medium Pinned post
          span.MetaSeparator • 
          nuxt-link(to="/blog") see all →
      post-excerpt.m-t0(
        v-for="post in homePagePost"
        :category="post.category"
        :date="post.date"
        :heroImage="post.heroImage"
        :heroImageNoShadow="post.heroImageNoShadow"
        :heroRatio="post.heroRatio"
        :key="post.permalink"
        :lede="post.lede"
        :permalink="post.permalink"
        :readingTime="post.readingTime"
        :showOnHomePage="post.showOnHomePage"
        :thumbImage="post.thumbImage"
        :tags="post.tags"
        :title="post.title"
      )
</template>

<script>
import ImageCld from "~/components/ImageLazyCldOrig.vue";
import PostExcerpt from "~/components/PostExcerpt.vue";
import NewsletterSignupForm from "~/components/NewsletterSignupForm.vue";

// timeout for loading component
// https://stackoverflow.com/questions/33289726/combination-of-async-function-await-settimeout
// send multiple requests in asyncData: https://github.com/nuxt/nuxt.js/issues/978
// const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  layout: "default",
  components: {
    ImageCld,
    PostExcerpt,
    NewsletterSignupForm
  },
  computed: {
    homePagePost() {
      return this.posts.filter(post => post.showOnHomePage === true);
    }
  },
  data() {
    return {
      posts: []
    };
  },
  /* scrollToTop: false, */
  async asyncData({ app }) {
    let posts = await app.$content("/posts").getAll();
    /* show loading component */
    /* await timeout(500); */

    return {
      posts
    };
  }
};
</script>

<style lang="postcss" scoped>
/* @import "../assets/styles/variables.css"; */

/* 
  This proves that:
  1. mixins work
  2. styleResource loads the variables w/o @importing
  3. custom props re-evaluation works on a button selector
 */
@define-mixin bullshit {
  color: var(--c-warning);
}

.Test {
  @mixin bullshit;
  background-color: var(--c-brand);

  /* @media (--lg) { */
  @media (min-width: 1024px) {
    background-color: var(--c-text);
  }
}

.Adjacent {
  border: 2px solid var(--c-text);
  padding: 1.5rem 1.75rem;
}
</style>
