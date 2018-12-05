<template lang="pug">
div
  Nav.Animate

  .b-clearFixedNav.b-pb15
    article
      .Animate
        .Container
          .w-sm-11x12
            h1.Supertitle.b-ptTitle.m-b0.b-pb1
              //- | Make the complex simple#[br]
              //- | and the simple unique.
              //- | Callum Flack is a graphic designer turned
              //- | frontend developer.
              | Designed for deeper attention.
              | Built with a finer intuition. 
              //- | Build to anticipate people. 
              //- span.u-block.m-t4 Why does this matter?
              //- | ux engineer

            .Scope-post.Scope-post-dropcap
              div
                p.fs-text-lg
                  | In the internet era, 
                  em your branding is tactile. 
                  //- | The technology envelopes the brand. 
                  //- | People only pay attention when they trust that your interface will work. It's not enough to make it look pretty, it has to 
                  | People only pay attention after they trust the interface. It's not enough to make it look nice, it has to 
                  nuxt-link.Reveal-link(to="/blog")
                    em behave beautifully.
                  | &nbsp;You'll know the difference in a heartbeat. And so will your audience. 
                  //- This is where I can help. 
                  
                //- p.fs-text-lg.u-textCenter.b-my1
                  nuxt-link.Button.Button--round.Meta.fs-text-sm.fw-400(to="/about")
                    | About Callum
                    span.Arrow.Arrow--right.m-l2
                  nuxt-link.Button.Button--round.Meta.fs-text-sm.fw-400.m-l3(to="/blog")
                    | Peruse the blog
                    span.Arrow.Arrow--right.m-l2

                //- hr.Post-intro-rule.b-my05

                p.fs-text-lg 
                  | Hi, I'm Callum Flack. 
                  nuxt-link(to="/about") 
                    em.fs-italic I'm a designer who codes.
                  | &nbsp;I create attention by bridging the gap between design and development.


                //- p.fs-text-lg 
                  | Because website involve alot of choices, I write as a means to better understand how the web and people's attention works, and to think through possibilities. Here's the latest post. Or check out 
                  nuxt-link(to="/blog") the blog.

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
import ImageCld from "~/components/ImageLazyCldOrig.vue";
import PostExcerpt from "~/components/PostExcerptEssay.vue";
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
    PostExcerpt,
    NewsletterSignupBlock,
    Nav
  },
  /* computed: {
    homePagePost() {
      return this.posts.filter(post => post.showOnHomePage === true);
    }
  }, */
  data() {
    return {
      posts: []
    };
  },
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
  async asyncData({ app }) {
    let posts = await app.$content("/posts").getAll();
    /* show loading component */
    /* await timeout(500); */
    return {
      posts
    };
  }
};
</script>

<style lang="postcss">
.page-index {
  /* --html-bg: var(--c-black);
  --html-c: var(--c-bg); */
  --c-indexbg: var(--c-orange);
  --c-indexbg: #2242dc;
  --c-text-underline: var(--c-bg);

  /* animation: page 750ms cubic-bezier(0.19, 1, 0.22, 1) 400ms 1 normal both; */
  /* animation: page 2150ms cubic-bezier(0.19, 1, 0.22, 1),
    bgimg 3000ms cubic-bezier(0.19, 1, 0.22, 1); */
  /* animation: bgcolor 500ms ease, bgblur 2000ms cubic-bezier(0.19, 1, 0.22, 1); */
  animation: bgcolor 3000ms cubic-bezier(0.19, 1, 0.22, 1),
    bgblur 2500ms cubic-bezier(0.19, 1, 0.22, 1),
    bgimg 500ms cubic-bezier(0.19, 1, 0.22, 1);
  background-color: rgba(0, 0, 0, 0.8);
  background-color: var(--c-indexbg);
  background-blend-mode: multiply;
  background-image: url("/images/_index-1.jpg");
  background-image: url("/images/_overcast-night.jpg");
  background-image: url("/images/_sagatiba-bw-181201B.jpg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--c-bg);
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  width: 100vw;
}

@keyframes bgcolor {
  from {
    background-color: var(--html-bg);
  }
  to {
    background-color: var(--c-indexbg);
  }
}

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
    /* filter: initial; */
    background-image: url("/images/_sagatiba-bw-181201B.jpg");
  }
}

.page-index .open {
  --open-c-border: transparent;
  --open-c-bg: rgba(0, 0, 0, 0.9);
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
    --underline: rgba(255, 255, 255, 0.3);
    --underline-hover: currentColor;
    --underline-textshadow: var(--underline-bgimg);

    text-shadow: initial;
  }
}

.page-index .Block {
  --c-block: var(--c-bg);
  --bg-block: transparent;
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
