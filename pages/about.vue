<template lang="pug">
div
  //- nav.Container.b-nav
    h3.Nav-locator.Meta.fw-bold
      span.m-r2 5.
      span About
  article.b-pt4
    header.CoverImage(role="banner")
      //- .Container.b-py
        .Extract-super.h-100
          .FlexGrid
            .w-1x2
              .AspectRatio.AspectRatio--8x5
                .AspectRatio-object
                  img(src="/images/a.jpg")
            .w-1x2
              .f.f-alignItemsCenter.h-100
                .w-10x12
                  h1.Title.fw-black.m-b0.u-textRight
                    | Working within graphic design, user experience &amp; code.

      .Container
        .Extract-super
          .AspectRatio.md-AspectRatio--10x4
            .AspectRatio-object.bg-text
              ImageCld(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1533123284/okok/cf-dwts-01-16x9.jpg")
              //- ImageCld(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1536644075/okok/cf-dwts-01-16x9-bw.jpg")
            .AspectRatio-object.Blend
              .Container
                .Extract-large.h-100
                  .f.f-alignItemsCenter.h-100
                    .w-8x12.w-md-9x12.w-lg-8x12
                      h1.Title.fw-black.c-bg.m-b0
                        //- | Working at the intersection between user experience, visual design &amp; code.
                        //- | Visual design plus user experience plus code.
                        | Working within
                        br
                        | graphic design,
                        br
                        | user interface,
                        br 
                        | &amp; code.
                        //- br
                        //- | And how they mix.
                      //- h2.Subheading.fw-regular.c-bg.w-10x12
                        | “…if the solution is not beautiful, I know it is wrong.” 
                        span.fs-scale-reset #[span.Meta — Buckminster Fuller]
                      //- h2.Text.fw-regular.c-bg.w-lg-10x12.u-hidden.u-sm-block.rm-t4
                        | "The quality of the connections is the key to quality"
                        br 
                        span.fs-scale-reset #[span.Meta.fw-bold — Charles Eames]
      
    main(role="main")
      .Container.b-pt3
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
      title: `${this.page.title}—Callum Flack Design`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.page.title}—${this.page.lede}`
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

.w-su-5x12 {
  @media (--su) {
    width: calc(6 / 12 * 100%) !important;
  }
}
</style>
