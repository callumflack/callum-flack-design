<template lang="pug">
article
  header.CoverImage(role="banner")
    .AspectRatio.AspectRatio--6x4.md-AspectRatio--2x1
      .AspectRatio-object.bg-text
        ImageCld(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1533123284/okok/cf-dwts-01-16x9.jpg")
      .AspectRatio-object.Blend
        .Container
          .Extract-hero.h-100
            .f.f-alignItemsCenter.h-100
              .w-8x12.w-md-7x12.ResponsivePadding
                h1.Supertitle.c-bg
                  | Callum works at the intersection between user experience, visual design &amp; code.
                //- h2.Subheading.fw-regular.c-bg.w-10x12
                  | “…if the solution is not beautiful, I know it is wrong.” 
                  span.fs-scale-reset #[span.Meta — Buckminster Fuller]
                h2.Subheading.fw-regular.c-bg.w-10x12
                  | The quality of the connections is the key to quality
                  br 
                  span.fs-scale-reset #[span.Meta — Charles Eames]
    
  main(role="main")
    .Container.b-pb3
    .Container
      .Scope-post.Scope-post-dropcap
        nuxtent-body(:body="page.body")
    // .Container
      .figure.figure--post
        NewsletterSignupBlock
</template>

<script>
import ImageCld from "~/components/ImageLazyCldOrig.vue";
import NewsletterSignupBlock from "~/components/NewsletterSignupBlock.vue";

/* src-placeholder="https://res.cloudinary.com/pw-img-cdn/image/fetch/w_50,e_blur:300/https://res.cloudinary.com/pw-img-cdn/image/upload/v1533123284/okok/cf-dwts-01-16x9.jpg" */

export default {
  components: {
    ImageCld,
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
  scrollToTop: false,
  async asyncData({ app, route }) {
    return {
      page: await app.$content("/pages").get(route.path)
    };
  }
};
</script>

<style lang="postcss" scoped>
@import "../assets/styles/variables.css";

.Blend {
  background-blend-mode: multiply;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.9) 40%, rgba(0, 0, 0, 0.075) 80%);
}

.ResponsivePadding {
  padding-left: calc(0.75 * var(--grid-gutter));

  @media (--lg) {
    padding-left: 0;
  }
}
</style>
