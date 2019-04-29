
<template lang="pug">
article
  //- header.b-pb1(role="banner")
    .FlexGridWrapper
      .FlexGrid.FlexGrid--noGutter.FlexGrid--hero
        .w-mdl-1x2
          .AspectRatio.Hero2
            .AspectRatio-object
              //- LazyImage(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1533123284/okok/cf-dwts-01-16x9.jpg")
              img(src="/images/cf-dwts-01-recut.jpg")
            .AspectRatio-object.Blend
        .w-mdl-1x2.bg-neutral-dar
          .h-100
            .Container
              //- .Extract-large.h-100
              .f.f-alignItemsCenter.h-100
                .b-py2.w-sm-3x4
                  h1.Supertitle.fw-300.m-b0
                    | Fluid across
                    | visual design,
                    | user experience
                    | and code.
                  h2.Text.fw-400.m-t3
                    span.fs-italic The quality of the connections is the key to quality.
                    span.u-block.Blockquote-author — Charles Eames
  header.b-pb1(role="banner")
    .Container
      .b-ptTitle.w-sm-10x12
        h1.Supertitle.m-b0
          | An interface maker.<br>Fluid across visual design, user experience and code.
        h2.Text.fw-400.m-t3
          span.fs-italic The quality of the connections is the key to quality.
          span.Blockquote-author — Charles Eames

  main(role="main")
    .Container
      .FlexGrid.FlexGrid--noGutter.f-row
        .w-4x12.w-sm-3x12
          .AspectRatio(style="padding-bottom:125%")
            .AspectRatio-object
              LazyImage.bg-text.m-a0(
                src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1544078339/okok/_DB30312-recut.jpg"
                alt="Callum Flack"
              )
        .w-8x12.w-sm-9x12
          .Contact.no-link-block.h-100
            .p-a5
              //- p.Subtitle.fw-600.fs-text-meta.m-b2 Get in touch
              p.Subtitle.fw-500.m-b2.c-bg Get in touch:
              ul.Meta.flh-regular.fs-text-meta.u-listUnstyled.c-bg
                li #[a(target="_blank" href="mailto:callum@callumflack.design") callum@callumflack.design]
                li #[a(target="_blank" href="tel:610-408-767-540") +61(0) 408 767 540]
                li #[a(target="_blank" href="https://twitter.com/callumflack") @callumflack]

      .Scope-post.p-t5
        nuxtent-body(:body="page.body")

</template>

<script>
import LazyImage from "~/components/LazyImage.vue";

export default {
  components: {
    LazyImage
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
  async asyncData({ app, route }) {
    return {
      page: await app.$content("/pages").get(route.path)
    };
  }
};
</script>

<style lang="postcss" scoped>
.fs-text-meta {
  font-size: var(--rfs-text-meta);
}

.Contact {
  background-color: var(--c-contact-block);
  background-color: var(--c-highlight);
  background-color: var(--c-blue);
  background-color: rgb(9,18,58);
  background-color: var(--c-text);
  /* border: 1px solid var(--c-text); */
  /* border-left: 0; */
  border-left: 1px solid var(--c-bg);
  border-color: rgba(255,255,255,0.5);
}
</style>
