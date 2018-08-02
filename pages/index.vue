<template lang="pug">
div
  header.Container.b-pb3(role="banner")
    .Adjacent
      // h1.Title.b-mb1.c-highlight.fw-light 
      h1.Heading.m-b3
        | Callum Flack designs and develops website systems to reach each before all.
      h2.Text
        span.fs-scale-reset
          span.Meta2.fw-bold Tiago Forte 
        | —&nbsp;“Routinely entrusted with digital product innovation for companies like Apple, Google, Nike, and Facebook, which rarely approach outside firms.” 
        nuxt-link(to="/about") 
          em.Text--italic Learn more…

  main(role="main")
    article.Container
      // .b-pb1
      .p-b4
        .Meta2.fw-medium.u-textCenter Latest post
      
      // POST (til I can compute the most recent post…)
      .Extract-hero.m-a0
        .AspectRatio.AspectRatio--16x9
          .AspectRatio-object
            ImageSVGFilter(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1527842531/okok/aesthetics-nembrotha-aurea.jpg")
      
      .Excerpt
        // nuxt-link.u-block.Extract-edge.b-mb1(to="/blog")
          ImageLazy(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1527842531/okok/aesthetics-nembrotha-aurea.jpg")
        
        header.b-my2.w-lg-5x6.m-xAuto(role="banner")
          // .Meta2.fw-medium.u-textCenter.p-t1 The latest…
          h1.Title.u-textCenter.p-t3 
            nuxt-link(to="/blog") The brief, the scope and the dance
          .Meta2.u-textCenter.u-block
            time July 2nd, 2018
            span.MetaSeparator • 
              span 8 minutes
        
        // .b-mb1.w-lg-9x12.m-xAuto
          h2.Subtitle.u-textCenter.p-t2
            nuxt-link(to="/blog") The brief, the scope and the dance
          .Meta2.u-textCenter.u-block
            time July 2nd, 2018
            span.MetaSeparator • 
              span 8 minutes
        p.Text
          | Frustrating, ugly websites that don't live up to their promise are the result of a misunderstood brief and a lack of real scope. How can makers and clients work together to ensure better solutions? By reframing brief and scope as communication tools for collaboratively dealing with project realities as they unfold. 
          nuxt-link.Text--italic(to="/blog") Continue reading

    // NewsletterSignupForm.u-posRelative

</template>

<script>
import ImageLazy from "~/components/ImageLazy.vue";
import ImageSVGFilter from "~/components/ImageSVGFilter.vue";
import PostExcerpt from "~/components/PostExcerpt.vue";
import NewsletterSignupForm from "~/components/NewsletterSignupForm.vue";

export default {
  layout: "default",
  components: {
    ImageLazy,
    ImageSVGFilter,
    PostExcerpt,
    NewsletterSignupForm
  },
  computed: {
    /* mostRecentPost() {
      return posts.splice(1);
    } */
  },
  data() {
    return {
      posts: [1]
    };
  },
  async asyncData({ app, route }) {
    const posts = await app.$content("/posts").getAll();

    return {
      posts
    };
  }
};
</script>

<style lang="postcss">
@import "../assets/styles/variables.css";

.Adjacent {
  /* background-color: var(--c-highlight); */
  border: 2px solid var(--c-text);
  padding: 1.5rem 1.75rem;

  & h1 {
    /* color: var(--c-highlight) !important; */
  }

  & h1,
  & h2 {
    /* color: var(--c-bg) !important; */
  }
}
</style>
