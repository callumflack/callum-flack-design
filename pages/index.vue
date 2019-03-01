<template lang="pug">
.u-relative.page-index-internal
  .AspectRatio-object
    //- ImageLazy.image-multiply(:src="selectedImage")
    ImageLazy(:src="selectedImage")
    .AspectRatio-object(style="background-color: rgba(0,0,0,0.6)")

  Nav.Animate

  .b-clearFixedNav.b-pb05
    article
      .Animate
        .Container
            .w-sm-11x12
              h1.Supertitle.b-ptTitle.m-b0.b-pb1
                //- | Make the complex simple#[br]
                //- | and the simple unique.
                //- | Callum Flack is a graphic designer turned
                //- | frontend developer.
                //- | Design for deeper attention.
                //- | Build with finer intuition.
                //- | Build to anticipate people.
                //- span.u-block.m-t4 Why does this matter?
                //- | ux engineer
                //- | People decide if you're worth their time in a heartbeat.
                //- | Brand designer<br>+ web engineer. Because ideas are nothing without execution.
                | Creativity + Capability
                //- | Ideas are nothing without execution

            .Scope-post
              p.fs-text-lg
                | Hi, I'm&nbsp;
                nuxt-link.Reveal-link(to="/about") Callum Flack,
                | &nbsp;graphic designer and web developer. I use design and code to help organisations build websites that make sense, make it easy and resonate immediately.

              //- hr.Post-intro-rule.m-y6

              p.fs-text-lg
                | Understanding the&nbsp;
                nuxt-link(to="/blog")
                  | quality of the connections
                | &nbsp;that bridge design and code is the key to creating seamless web interfaces.
                | I can help you design a visual brand, its user experience,
                | and I can&nbsp;
                nuxt-link(to="/projects")
                  em.fs-italic build it too.
                | &nbsp;The difference isn't obvious until it is.

  footer.b-pb4.Animate
    .Container
      NewsletterSignupBlock

</template>

<script>
import Nav from "~/components/Nav.vue";
import NewsletterSignupBlock from "~/components/NewsletterSignupBlock.vue";
import ImageLazy from "~/components/ImageLazy.vue";
/* import { TweenMax } from "greensock"; */

export default {
  layout: "blank",
  /* transition: "slide", */
  components: {
    ImageLazy,
    NewsletterSignupBlock,
    Nav
  },
  data() {
    return {
      images: [
        /* "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544078960/okok/_sagatiba-bw-2000.jpg",
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544078960/okok/_sky-1500.jpg",
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544078960/okok/_millennius-detail-2000.jpg",
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544078960/okok/_hi-reversed-1500.jpg",
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544180386/okok/_sagatiba-bw-2000-invert.jpg",
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544078960/okok/_decadence-13-reversed-1500.jpg", */
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544178999/okok/_sky-1500-invert.jpg",
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544180211/okok/_decadence-13-black.jpg",
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544180308/okok/_millennius-detail-2000-invert.jpg",
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544180386/okok/_sagatiba-bw-2000.jpg",
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544180513/okok/_hi-invert.jpg"
      ],
      selectedImage: ""
    };
  },
  created() {
    /* https://stackoverflow.com/questions/45752960/how-to-get-random-element-in-vue-js */
    const idx = Math.floor(Math.random() * this.images.length);
    this.selectedImage = this.images[idx];
  }
  /* computed: {
    homePagePost() {
      return this.posts.filter(post => post.showOnHomePage === true);
    }
  }, */
};
</script>

<style lang="postcss">
/* NB. nuxt 2 inherits variables for nested components */
/* --open-c-border: transparent !important;
--open-c-bg: rgba(0, 0, 0, 0.9) !important; */
/* …but nuxt 1 does not */
/* animation: openIndex 0.5s ease-in-out forwards; */

.page-index-internal {
  --c-indexbg: black;
  --c-text-underline: var(--c-bg);
  /* animation: bgcolor 2000ms cubic-bezier(0.19, 1, 0.22, 1), bgblur 1000ms cubic-bezier(0.19, 1, 0.22, 1); */
  background-color: var(--c-indexbg);
  background-blend-mode: multiply;
  /* background-image: url("/images/_sagatiba-bw-181201B.jpg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover; */
  color: var(--c-bg);
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  width: 100vw;
}

@keyframes bgcolor {
  from {
    background-color: var(--c-bg);
  }
  to {
    background-color: var(--c-indexbg);
  }
}

/* only if bgimg on parent div */
@keyframes bgimg {
  from {
    background-image: initial;
  }
  to {
    background-image: url("/images/_sagatiba-bw-181201B.jpg");
  }
}

@keyframes bgblur {
  from {
    /* background-image: initial; */
    filter: url("#blur");
  }
  to {
    /* background-image: url("/images/_sagatiba-bw-181201B.jpg"); */
    filter: initial;
  }
}

.page-index-internal .headroom {
  background-color: transparent;
}

.page-index-internal .Nav-link {
  color: var(--c-bg);
}

.page-index-internal {
  & .nuxt-link-active span,
  & p a:not(.Button),
  & .Text a:not(.Button),
  & .Scope-post p a:not(.Button) {
    --underline-bgimg: var(--c-indexbg);
    --underline: rgba(255, 255, 255, 0.5);
    --underline-hover: currentColor;
    --underline-textshadow: var(--underline-bgimg);

    text-shadow: initial;
  }

  & p em {
    background-color: initial !important;
    text-shadow: initial !important;
  }
}

.page-index-internal .Block {
  --c-block: var(--c-bg);
  --bg-block: transparent;
}

.page-index-internal .Form {
  border-color: var(--c-bg);
}
</style>
