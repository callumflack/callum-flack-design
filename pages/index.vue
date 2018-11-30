<template lang="pug">
div
  //- header.b-pb2
    .Container.Header--animate
      .Extract-hero(role="banner")
        .AspectRatio.AspectRatio--8x5
          .AspectRatio-object(style="opacity:0.5")
            iframe(
              src="https://player.vimeo.com/video/261113972?background=1"
              width="100%"
              height="100%"
              frameborder="0"
              allowTransparency="true"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen>
            )
          .AspectRatio-object.Blend
            .Container
              .f.f-alignItemsCenter.h-100
                .w-lg-11x12.m-xA
                  h1.Supertitle.u-textCenter.c-bg
                    | Make the complex simple#[br]
                    | and the simple unique.
                  h2.Subtitle.u-textCenter.c-bg 
                    //- | Attractive website design + development#[br]
                    //- | for perceptive audiences.
                    | Visual design, ux and code#[br]
                    | for perceptive audiences.
                  p.u-textCenter.m-md-t6
                    button.Button.Button--roundRev.Meta.fs-text-sm.fw-400(@click.prevent="handleModalToggle")
                      | Watch the showreel
                      span.Arrow.Arrow--right.m-l2

  article
    .Header--animate
      .Container
        .w-sm-11x12
          h1.Supertitle.c-lin.b-pt3.b-pb1.fw-300
            //- | Make the complex simple#[br]
            //- | and the simple unique.
            | Callum Flack is a graphic designer turned
            | frontend developer. 
            span.u-block.m-t4 Why does this matter?
            //- | ux engineer

          .Scope-post.Scope-post-dropcap
            div
              p.fs-text-lg
                //- span In the information age, 
                span In the internet era, 
                em your branding is tactile. 
                //- | The technology envelopes the brand. 
                //- | People only pay attention when they trust that your interface will work. It's not enough to make it look pretty, it has to 
                | People only pay attention after they trust the interface. It's not enough to make it look pretty, it has to 
                em behave beautifully. 
                | You'll know the difference in a heartbeat. And so will your audience. This is where I can help. 
                nuxt-link(to="/about") 
                  em.fs-italic I'm a designer who codes.
              //- p.fs-text-lg.u-textCenter.b-my1
                nuxt-link.Button.Button--round.Meta.fs-text-sm.fw-400(to="/about")
                  | About Callum
                  span.Arrow.Arrow--right.m-l2
                nuxt-link.Button.Button--round.Meta.fs-text-sm.fw-400.m-l3(to="/blog")
                  | Peruse the blog
                  span.Arrow.Arrow--right.m-l2
              p.fs-text-lg 
                | Because website involve alot of choices, I write as a means to better understand how the web and people's attention works, and to think through possibilities. Here's the latest post. Or check out 
                nuxt-link(to="/blog") the blog.
        
  //- article.b-pb2
    //- .Container
      .Scope-post
        .fs-block-lg.u-textCenter
          p.m-b0
            | In the digital age, your branding is tactile—the technology is inseparable from the brand. People only pay attention when they trust that your interface will work. It's not enough to visualise it. You have to be able to build it. So you can 
            em feel 
            | how it works. You'll know in a heartbeat when it's right. And so will your audience. This is where I can help. 
            nuxt-link(to="/about") 
              em.fs-italic I'm a designer who codes.
            | &nbsp`;
  //- .b-pb2
    .Container
      //- .Extract-large
      hr.bg-text.b-mt2
      //- p 
        | Because website involve alot of choices, I write as a means to better understand how the web and people's attention works, and to think through possibilities. Here's the latest post. Or check out 
        nuxt-link(to="/blog") the blog.
      //- p.fs-text-lg.u-textCenter.b-mb1
        nuxt-link.Button.Button--round.Meta.fs-text-sm.fw-400(to="/blog")
          | Peruse the blog
          span.Arrow.Arrow--right.m-l2
      //- .fs-block-l
        p.m-b0.u-textCente
          | Because website involve alot of choices, I write as a means to better understand how the web and people's attention works, and to think through possibilities. Here's the latest post. Or check out 
          nuxt-link(to="/blog") the blog.
  //- .b-pb2
    PostExcerpt(
      v-for="post in homePagePost"
      :category="post.category"
      :date="post.date"
      :heroImage="post.heroImage"
      :heroImageNoShadow="post.heroImageNoShadow"
      :heroRatio="post.heroRatio"
      :key="post.permalink"
      :lede="post.lede"
      :permalink="post.permalink"
      :readingTime="post.readingTime"
      :showOnHomePage="post.showOnHomePage"
      :thumbImage="post.thumbImage"
      :tags="post.tags"
      :title="post.title"
    )

</template>

<script>
import ImageCld from "~/components/ImageLazyCldOrig.vue";
import PostExcerpt from "~/components/PostExcerptEssay.vue";

// timeout for loading component
// https://stackoverflow.com/questions/33289726/combination-of-async-function-await-settimeout
// send multiple requests in asyncData: https://github.com/nuxt/nuxt.js/issues/978
// const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  layout: "default",
  components: {
    ImageCld,
    PostExcerpt
  },
  computed: {
    homePagePost() {
      return this.posts.filter(post => post.showOnHomePage === true);
    }
  },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    handleModalToggle() {
      this.$store.commit(
        "SET_MODAL_VISIBILITY",
        !this.$store.state.isModalVisible
      );
    },
    hideNav() {
      this.$store.commit("SET_MODAL_VISIBILITY", false);
    }
  },
  /* scrollToTop: false, */
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

<style lang="postcss" scoped>
/* @import "../assets/styles/variables.css"; */

/* 
  This proves that:
  1. mixins work
  2. styleResource loads the variables w/o @importing
  3. custom props re-evaluation works on a button selector
 */
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

.Blend {
  background-color: rgba(5, 5, 5, 0.85);
  background-color: rgba(236, 234, 228, 0.7);
  background-color: rgba(36, 41, 46, 0.85);
  background-color: rgba(37, 37, 22, 0.96);
  background-color: rgba(0, 0, 0, 0.8);
}

.Adjacent {
  /* border: 2px solid var(--c-text); */
  background-color: var(--c-highlight-alt);
  border-radius: 1em;
  padding: 1.5rem 1.75rem;
  padding: calc(0.375 * var(--rs-block-space))
    calc(0.45 * var(--rs-block-space));

  & a {
    background-image: linear-gradient(var(--c-bg), var(--c-bg)),
      linear-gradient(var(--c-bg), var(--c-bg)),
      linear-gradient(currentColor, currentColor) !important;
    text-shadow: 0.03em 0 var(--c-highlight-alt),
      -0.03em 0 var(--c-highlight-alt), 0 0.03em var(--c-highlight-alt),
      0 -0.03em var(--c-highlight-alt), 0.06em 0 var(--c-highlight-alt),
      -0.06em 0 var(--c-highlight-alt), 0.09em 0 var(--c-highlight-alt),
      -0.09em 0 var(--c-highlight-alt), 0.12em 0 var(--c-highlight-alt),
      -0.12em 0 var(--c-highlight-alt), 0.15em 0 var(--c-highlight-alt),
      -0.15em 0 var(--c-highlight-alt) !important;
  }
}

.Icon {
  margin-right: var(--s-2);
  transform: translateY(2px);
}
</style>
