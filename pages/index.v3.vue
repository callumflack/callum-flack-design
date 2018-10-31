<template lang="pug">
div.b-pt4
  //- nav.Container.p-y3
    h3.Text.c-textLight.u-textCenter.p-b2
      span.m-r2 00
      em.Text--italic Home
    .Extract-large
      hr
  //- nav.Container.b-nav
    h3.Nav-locator.Meta.fw-700
      span.m-r2 0.
      span Home
    //- .Extract-large
      hr
  //- header.Container.b-pb3(role="banner")
    .Adjacent
      h1.Heading.m-b3
        | Callum Flack designs and develops website systems your audience will trust in a heartbeat.
      h2.Text
        //- span.fs-scale-reset
        //-   span.Meta.fw-700 Tiago Forte 
        //- | —&nbsp;“Routinely entrusted with digital product innovation for companies like Apple, Google, Nike, and Facebook, which rarely approach outside firms.” 
        //- nuxt-link(to="/about") 
        //-   em.Text--italic Learn more…

        //- span.fs-scale-reset
          //- span.Meta.fw-700 What I do 
        //- | —&nbsp;
        //- | To create change in people, you first have to win their emotional trust. But in the digital age, your brand is tactile. The technology is inseparable from the brand. People won't interact with you if your interfaces aren't seamless. That's where I come in. I'm a brand identity designer who codes. 
        | To create change in people, you first have to win their emotional trust. But in the digital age, your brand is tactile. The technology is inseparable from the brand. People won't interact with you if they don't trust your interface. That's where I come in. I'm a brand identity designer who codes. 
        nuxt-link(to="/about") 
          em.Text--italic Learn more about me
      //- p.fs-text-sm (Why all the writing? Because 

  //- .Test
    p 
      | YO
      button.Button One
      button.Button.Button--alt Two

  main(role="main")
    article.Container
      .b-pb2
        h1.Title.u-textCenter.c-highlight.m-b3 Trusted within a heartbeat.
        //- h2.Meta.u-textCenter.p-t1
        h2.Text.fs-text-lg.u-textCenter.p-t1
          | Callum Flack designs and codes intuitively seamless website systems for businesses whose audience demands servcie.

      .Scope-post.Scope-post-dropcap
        div
          p Hi, she said.

    //- article.Container
      .p-b4
        .Meta.fw-700.u-textCenter
          icon-base.Icon(icon-name="icon-pin" height="14" width="14")
            icon-pin
          span Pinned post
          //- span.fw-500 Pinned post
          //- span.MetaSeparator • 
          //- nuxt-link(to="/blog") see all →
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
import IconBase from "~/components/IconBase.vue";
import IconPin from "~/components/icons/IconPin.vue";

// timeout for loading component
// https://stackoverflow.com/questions/33289726/combination-of-async-function-await-settimeout
// send multiple requests in asyncData: https://github.com/nuxt/nuxt.js/issues/978
// const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  layout: "default",
  components: {
    ImageCld,
    PostExcerpt,
    NewsletterSignupForm,
    IconBase,
    IconPin
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
  /* border: 2px solid var(--c-text); */
  background-color: var(--c-highlight-alt);
  border-radius: 1em;
  padding: 1.5rem 1.75rem;
  padding: calc(0.375 * var(--rs-block-space)) calc(0.45 * var(--rs-block-space));

  & a {
    background-image: linear-gradient(var(--c-bg), var(--c-bg)), linear-gradient(var(--c-bg), var(--c-bg)),
      linear-gradient(currentColor, currentColor) !important;
    text-shadow: 0.03em 0 var(--c-highlight-alt), -0.03em 0 var(--c-highlight-alt),
      0 0.03em var(--c-highlight-alt), 0 -0.03em var(--c-highlight-alt), 0.06em 0 var(--c-highlight-alt),
      -0.06em 0 var(--c-highlight-alt), 0.09em 0 var(--c-highlight-alt), -0.09em 0 var(--c-highlight-alt),
      0.12em 0 var(--c-highlight-alt), -0.12em 0 var(--c-highlight-alt), 0.15em 0 var(--c-highlight-alt),
      -0.15em 0 var(--c-highlight-alt) !important;
  }
}

.Icon {
  margin-right: var(--s-2);
  transform: translateY(2px);
}
</style>
