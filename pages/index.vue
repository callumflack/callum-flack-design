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
        .Meta.fw-medium.u-textCenter Latest post
      
      .Extract-hero.m-a0
        .AspectRatio.AspectRatio--16x9
          .AspectRatio-object.bg-text
            ImageCld(
              src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1527842531/okok/aesthetics-nembrotha-aurea.jpg"
            )
      .Excerpt
        header.b-my2.w-lg-5x6.m-xA(role="banner")
          h1.Title.u-textCenter.p-t3 
            nuxt-link(to="/blog") The brief, the scope and the dance
          .Meta.u-textCenter.u-block
            time July 2nd, 2018
            span.MetaSeparator • 
              span 8 minutes
        p.Text
          | Frustrating, ugly websites that don't live up to their promise are the result of a misunderstood brief and a lack of real scope. How can makers and clients work together to ensure better solutions? By reframing brief and scope as communication tools for collaboratively dealing with project realities as they unfold. 
          nuxt-link.Text--italic(to="/blog") Continue reading

    // NewsletterSignupForm.u-posRelative

</template>

<script>
import ImageCld from "~/components/ImageLazyCldOrig.vue";
import PostExcerpt from "~/components/PostExcerpt.vue";
import NewsletterSignupForm from "~/components/NewsletterSignupForm.vue";

export default {
  layout: "default",
  components: {
    ImageCld,
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

<style lang="postcss" scoped>
/* @import "../assets/styles/variables.css"; */

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
