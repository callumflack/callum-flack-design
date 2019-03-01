
<template lang="pug">
article
  //- header.b-pb1(role="banner")
    .FlexGridWrapper
      .FlexGrid.FlexGrid--noGutter.FlexGrid--hero
        .w-mdl-1x2
          .AspectRatio.Hero2
            .AspectRatio-object
              //- ImageLazy(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1533123284/okok/cf-dwts-01-16x9.jpg")
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
          | Fluid across visual design, user experience and code.
        h2.Text.fw-400.m-t3
          span.fs-italic The quality of the connections is the key to quality.
          span.Blockquote-author — Charles Eames

  main(role="main")
    .Container
      .FlexGrid.FlexGrid--noGutter.f-row
        .w-1x3.w-lg-3x12
          .AspectRatio(style="padding-bottom:125%")
            .AspectRatio-object
              ImageLazy.bg-text.m-a0(
                mask
                src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1544078339/okok/_DB30312-recut.jpg"
                alt="Callum Flack"
              )
        .w-2x3.w-lg-9x12
          .Contact.no-link-block.h-100
            .p-a5
              p.Subtitle.fw-600.fs-text-meta.m-b2 Get in touch
              ul.Meta.flh-regular.fs-text-meta.u-listUnstyled
                li #[a(target="_blank" href="mailto:callum@callumflack.design") callum@callumflack.design]
                li #[a(target="_blank" href="tel:610-408-767-540") +61(0) 408 767 540]
                li #[a(target="_blank" href="https://twitter.com/callumflack") @callumflack]

      .Scope-post.p-t5
        nuxtent-body(:body="page.body")

</template>

<script>
import ImageLazy from "~/components/ImageLazy.vue";

export default {
  components: {
    ImageLazy
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
  border: 1px solid var(--c-text);
  border-left: 0;
}
</style>
