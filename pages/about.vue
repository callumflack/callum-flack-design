<template lang="pug">
article
  header.CoverImage(role="banner")
    .AspectRatio.AspectRatio--2x1
      .AspectRatio-object
        ImageSVGFilter(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1533123284/okok/cf-dwts-01-16x9.jpg")
      .AspectRatio-object.Blend
        .Container.h-100
          .Extract-hero.h-100
            .f.f-alignItemsCenter.h-100
              // h1.Subtitle.b-mb1.c-bg.fw-light.w-lg-9x12
              h1.Super.c-bg.w-8x12.w-md-7x12.b-pb4
                | Callum works at the intersection between user experience, visual design & code.
    // h2.Text
      span.fs-scale-reset
        span.Meta2.fw-bold Tiago Forte — 
      | “Routinely entrusted with digital product innovation for companies like Apple, Google, Nike, and Facebook, which rarely approach outside firms.” 
      nuxt-link(to="/about") Learn more…
    
    
  main(role="main")
    .Container.b-pb3
    .Container
      .Scope-post
        nuxtent-body(:body="page.body")
    // .Container
      .figure.figure--post
        NewsletterSignupBlock
</template>

<script>
import ImageSVGFilter from "~/components/ImageSVGFilter.vue";
import NewsletterSignupBlock from "~/components/NewsletterSignupBlock.vue";

export default {
  components: {
    ImageSVGFilter,
    NewsletterSignupBlock
  },
  props: {
    title: String,
    lede: String,
    heroImage: String
  },
  head() {
    return {
      title: `${this.page.title} – Callum Flack Design`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.page.title} – ${this.page.lede}`
        }
      ]
    };
  },
  async asyncData({ app, route }) {
    return {
      page: await app.$content("/pages").get(route.path)
    };
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";

.Blend {
  background-blend-mode: multiply;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.9) 40%,
    rgba(0, 0, 0, 0.075) 80%
  );
}
</style>
