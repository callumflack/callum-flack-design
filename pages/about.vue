
<template lang="pug">
article
  //- header.b-pb1(role="banner")
    .FlexGridWrapper
      .FlexGrid.FlexGrid--noGutter.FlexGrid--hero
        .w-mdl-1x2
          .AspectRatio.Hero2
            .AspectRatio-object
              //- ImageCld(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1533123284/okok/cf-dwts-01-16x9.jpg")
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
        h1.Supertitle.fw-300.m-b0
          | Callum Flack Design is fluid across visual design, user experience and code.
        h2.Text.fw-400.m-t3
          span.fs-italic The quality of the connections is the key to quality.
          span.Blockquote-author — Charles Eames

  main(role="main")
    .Container
      .Scope-post.Scope-post-dropcap
        nuxtent-body(:body="page.body")

</template>

<script>
import ImageCld from "~/components/ImageLazyCldOrig.vue";

/* src-placeholder="https://res.cloudinary.com/pw-img-cdn/image/fetch/w_50,e_blur:300/https://res.cloudinary.com/pw-img-cdn/image/upload/v1533123284/okok/cf-dwts-01-16x9.jpg" */

export default {
  components: {
    ImageCld
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
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.9) 40%,
    rgba(0, 0, 0, 0.05) 80%
  );
}

.w-su-5x12 {
  @media (--su) {
    width: calc(6 / 12 * 100%) !important;
  }
}

.Hero {
  padding-bottom: 62.5%;

  @media (--md) {
    padding-bottom: 80%;
  }
  @media (--xl) {
    padding-bottom: 90%;
  }
}
.Hero2 {
  padding-bottom: 75%;

  @media (--md) {
    /* padding-bottom: 80%; */
  }
  @media (--xl) {
    padding-bottom: 75%;
  }
}

.FlexGrid--hero {
  flex-direction: column;

  @media (--mdl) {
    flex-direction: row;
  }

  /* manually manage .Hero within the grid when the cells are stacked */
  & > *:first-child {
    /* padding-bottom: 62.5%; */

    /* @media (max-width: 768px) {
      padding-bottom: 62.5%;
    }
    @media (max-width: 1024px) {
      padding-bottom: 80%;
    } */
  }
}

.w-mdl-1x2 {
  @media (--mdl) {
    width: 50%;
  }
}
</style>
