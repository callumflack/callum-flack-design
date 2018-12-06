<template lang="pug">

//- div
  header.CoverImage(role="banner")
    .AspectRatio.AspectRatio--16x9.md-AspectRatio--2x1
      .AspectRatio-object.bg-text
        ImageCld(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1522321387/okok/_overcast-night.jpg")
      .AspectRatio-object.Blend
        .Container
          .f.f-alignItemsCenter.h-100
            .w-8x12.w-md-9x12.w-lg-8x12
              h1.Title.fw-900.c-bg.m-b0

.b-pt4.b-pb3
  article.Container.rp-t2
    .b-pb1
      h1.Title
        span.c-highlight Callum Flack designs &amp; develops website systems 
        | for businesses &amp; individuals who wish to make the complex simple &amp; the simple unique.
    .Scope-post.Scope-post-dropca
      .fs-block-lg.rs-m3
        p.m-b0
          span In the digital age, you can't differentiate with just design. 
          em Your branding is tactile—
          | the technology is inseparable from the brand. People only pay attention when they trust that your interface will work. It's not enough to design it. You have to be able to build it. To see quickly if the details match your ideas. The difference is easily 
          em felt. 
          | You'll know in a heartbeat when it's right. And so will your audience. This is where I can help. 
          nuxt-link(to="/about") 
            em.Text--italic I'm a designer who codes.
          | &nbsp;

    NewsletterSignupBlock

    //- hr.Post-endRule.b-mb0.b-mt2
    //- .rm-t3.fs-block-sm
      p Ps. I write a bi-monthly email letter about visual design, user experience and website development through the lens of people and attention. You should sign up:
      NewsletterSignupForm
      //- p.fs-text-sm.rm-t4 And when you sign up, I'll send you my "craft list" free. People say it's been helpful.

  //- .bg-highlight
  //- .NewsletterHero.CoverImage
    .Container.u-relative.b-py2
      h1.Supertitle.u-textCenter.p-t1.b-mb1 Interesting
      NewsletterSignupLede.rm-b3
      NewsletterSignupForm

  //- hr.b-my4
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
import NewsletterSignupBlock from "~/components/NewsletterSignupBlock.vue";
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
    NewsletterSignupBlock,
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
  The following proves that:
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
  padding: calc(0.375 * var(--responsive-space))
    calc(0.45 * var(--responsive-space));

  & a {
    background-image: linear-gradient(var(--c-bg), var(--c-bg)),
      linear-gradient(var(--c-bg), var(--c-bg)),
      linear-gradient(currentColor, currentColor) !important;
    text-shadow: 0.03em 0 var(--c-highlight-alt),
      -0.03em 0 var(--c-highlight-alt), 0 0.03em var(--c-highlight-alt),
      0 -0.03em var(--c-highlight-alt), 0.06em 0 var(--c-highlight-alt),
      -0.06em 0 var(--c-highlight-alt), 0.09em 0 var(--c-highlight-alt),
      -0.09em 0 var(--c-highlight-alt), 0.12em 0 var(--c-highlight-alt),
      -0.12em 0 var(--c-highlight-alt), 0.15em 0 var(--c-highlight-alt),
      -0.15em 0 var(--c-highlight-alt) !important;
  }
}

.Icon {
  margin-right: var(--s-2);
  transform: translateY(2px);
}
</style>
