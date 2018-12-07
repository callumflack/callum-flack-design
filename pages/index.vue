<template lang="pug">
.u-relative
  .AspectRatio-object
    //- ImageCld.image-multiply(v-bind:src="selectedImage")
    ImageCld(v-bind:src="selectedImage")
    //- img.image-multiply(src="/images/_sagatiba-bw-181201B.jpg")
    //- img.image-multiply(src="/images/_millennius-detail.jpg")
    //- img.image-multiply(src="/images/_sky.jpg")
    //- img.image-multiply(src="/images/_decadence-13-reversed.jpg")
    //- img.image-multipl(src="/images/_decadence-13-reversed2.jpg")
    //- img.image-multipl(src="/images/_decadence-13.png")
    //- img.image-multiply(src="/images/_hi-reversed.jpg")
    //- img.image-multiply(src="/images/_MSW.jpg")
    //- ImageCld(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1544178755/okok/_decadence-13-blue.png")
    //- ImageCld(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1544178999/okok/_sky-1500-invert.jpg")
    //- ImageCld(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1544180211/okok/_decadence-13-black.jpg")
    //- ImageCld(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1544180308/okok/_millennius-detail-2000-invert.jpg")
    //- ImageCld(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1544180386/okok/_sagatiba-bw-2000-invert.jpg")
    //- ImageCld(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1544180513/okok/_hi-invert.jpg")
  .AspectRatio-object(style="background-color: rgba(0,0,0,0.5)")

  Nav.Animate

  .b-clearFixedNav.b-pb05
    article
      .Animate
        .Container
            .w-sm-10x12
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
                | People decide if you're worth their time in a heartbeat.

            .Scope-post
              p.fs-text-lg
                | I'm 
                nuxt-link.Reveal-link(to="/about") Callum Flack,
                | &nbsp;graphic designer and web developer. I use design and code to help organisations build websites that make sense, make it easy and resonate immediately. 

              hr.Post-intro-rule.m-y6

              p.fs-text-lg 
                | Understanding the 
                nuxt-link(to="/blog") 
                  | quality of the connections
                | &nbsp;that bridge design and code is the key to creating attention. 
                | I can help you design a visual brand, its user experience, 
                | and I can 
                nuxt-link(to="/projects") 
                  em.fs-italic build it too.
                | &nbsp;The difference isn't obvious until it is.

  footer.b-pb4.Animate
    .Container
      NewsletterSignupBlock

  <svg class='u-hiddenVisually'>
    <filter id='blur' color-interpolation-filters='sRGB' x='0' y='0' height='100%' width='100%'>
      <feGaussianBlur stdDeviation="33" />
      <feComponentTransfer>
        <feFuncA type="discrete" tableValues="1 1"/>
      </feComponentTransfer>
    </filter>
  </svg>
</template>

<script>
import Nav from "~/components/Nav.vue";
import NewsletterSignupBlock from "~/components/NewsletterSignupBlock.vue";
import ImageCld from "~/components/ImageLazyIndex.vue";
/* import { TweenMax } from "greensock"; */

// timeout for loading component
// https://stackoverflow.com/questions/33289726/combination-of-async-function-await-settimeout
// send multiple requests in asyncData: https://github.com/nuxt/nuxt.js/issues/978
// const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  layout: "blank",
  /* transition: "slide", */
  components: {
    ImageCld,
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
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544078960/okok/_decadence-13-reversed-1500.jpg", */
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544178999/okok/_sky-1500-invert.jpg",
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544180211/okok/_decadence-13-black.jpg",
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544180308/okok/_millennius-detail-2000-invert.jpg",
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544180386/okok/_sagatiba-bw-2000.jpg",
        // "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544180386/okok/_sagatiba-bw-2000-invert.jpg",
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
  /* methods: {
    handleModalToggle() {
      this.$store.commit(
        "SET_MODAL_VISIBILITY",
        !this.$store.state.isModalVisible
      );
    },
    hideNav() {
      this.$store.commit("SET_MODAL_VISIBILITY", false);
    }
  }, */
  /* transition(to, from) {
    if (!from) return "slide-left";
    return "slide-right";
  }, */
};
</script>

<style lang="postcss">
.page-index {
  /* --html-bg: var(--c-black);
  --html-c: var(--c-bg); */
  --c-indexbg: var(--c-orange);
  --c-indexbg: #2242dc;
  --c-indexbg: black;
  --c-text-underline: var(--c-bg);

  /* animation: page 750ms cubic-bezier(0.19, 1, 0.22, 1) 400ms 1 normal both; */
  /* animation: page 2150ms cubic-bezier(0.19, 1, 0.22, 1),
    bgimg 3000ms cubic-bezier(0.19, 1, 0.22, 1); */
  /* animation: bgcolor 500ms ease, bgblur 2000ms cubic-bezier(0.19, 1, 0.22, 1); */
  /* animation: bgcolor 3000ms cubic-bezier(0.19, 1, 0.22, 1),
    bgblur 2500ms cubic-bezier(0.19, 1, 0.22, 1),
    bgimg 500ms cubic-bezier(0.19, 1, 0.22, 1); */
  /* animation: bgcolor 2000ms cubic-bezier(0.19, 1, 0.22, 1), bgblur 1000ms cubic-bezier(0.19, 1, 0.22, 1); */
  background-color: var(--c-indexbg);
  background-blend-mode: multiply;
  /* background-image: url("/images/_index-1.jpg");
  background-image: url("/images/_overcast-night.jpg");
  background-image: url("/images/_sagatiba-bw-181201B.jpg"); */
  /* background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover; */
  color: var(--c-bg);
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  width: 100vw;
}

/* .bg-blue {
  --c-indexbg: #2242dc;
  background-color: var(--c-indexbg);
  background-blend-mode: multiply;
}

.invert {
  filter: invert(1);
}

.Blue {
  background-color: black;
  animation: bgblue 3000ms cubic-bezier(0.19, 1, 0.22, 1);
}

@keyframes bgblue {
  from {
    background-color: black;
  }
  to {
    background-color: #2242dc;
  }
} */

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

.page-index .open {
  /* nuxt 2 inherits variables for nested components */
  --open-c-border: transparent !important;
  --open-c-bg: rgba(0, 0, 0, 0.9) !important;
  /* …but nuxt 1 does not */
  animation: openIndex 0.5s ease-in-out forwards;
}

@keyframes openIndex {
  from {
    opacity: 0;
    background-color: transparent;
    border-bottom: 1px solid transparent;
    top: -100%;
  }
  to {
    opacity: 1;
    background-color: var(--open-c-bg);
    border-bottom: 1px solid var(--open-c-border);
    top: 0;
  }
}

.page-index .Nav-link {
  color: var(--c-bg);
}

.page-index {
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

.page-index .Block {
  --c-block: var(--c-bg);
  --bg-block: transparent;
}

.page-index .Form {
  border-color: var(--c-bg);
}

/* page transition, named via the transition object */
.slide-enter-active {
  opacity: 0;
  transform: translate(30px, 0);
  transition: all 20.15s ease;
}
.slide-enter,
.slide-leave-active {
  opacity: 0;
  transform: translate(-30px, 0);
  transition: all 20.15s ease;
}

/* .slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(20px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-20px, 0);
} */

/* @keyframes slideIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
} */

/* .slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
} */

/* .slide-enter-active,
.slide-leave-active {
  transition: all 0.15s ease;
  background-color: var(--c-bg);
  z-index: 999;
}

.slide-enter-active,
.slide-leave-active {
  opacity: 1;
}

.slide-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
} */
</style>
