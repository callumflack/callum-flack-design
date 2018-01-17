<template lang="pug">
div
  c-pagetitle(
    title="Digital brands + services for makers + shakers"
    link="/"
    lede="Callum Flack provides graphic design, user experience design and frontend development to help individuals, groups and businesses find, connect and service their audience."
  )

  main(role="main")
    .container
      figure.figure.figure--large
        nuxt-link.work.linkSignal.noVisualLink(to="/work")
          .FlexEmbed
            .FlexEmbed-ratio.FlexEmbed-ratio--16by9
            .FlexEmbed-content
              .pin.bgcolor-white.u-flex.u-flexAlignItemsCenter.u-flexJustifyCenter
                .title.u-textCenter
                  | View the work #[span.linkSignal-target →]
              img.w100.u-posRelative(src="/images/loop-04.gif")
      p
        nuxt-link(to="/about") Hi, I’m Callum.
        |  I'm interested to know about you, what you do and who your market is. I can help you create authentic, seamless experiences, solve the right problems, and build something your customers are proud of. Together we can make things happen.
        
      h2 The difference is focus & knowhow
      p Work with me and you work directly with a multi-skilled, self-sufficient digital strategist, designer and programmer who can take your idea from zero to reality—no middlemen, nothing lost in translation, no cookie-cutter preconceptions. 

      h3.title.title--ruled 
        nuxt-link(to="/journal") Journal
      p I regularly write about designing and building for the needs of real people. To get a big picture view, read the 
        nuxt-link(to="/journal") Journal.
        |  Here's the most recent:
      .figure.post.no-quote
        nuxt-link.u-block.noVisualLink.linkSignal(to="/journal/designers-should-code")
          h1.title.w100.u-marginT0.u-marginB3 Designers should code #[span.linkSignal-target →]
          p It's difficult to apply fine design sensibility to software products. But as a visual designer, the more agency you have in the product design process, the better the product.

      h3.title.title--ruled Subscribe
      p Everyone hungers for the experience of delight. I write a newsletter every week about what I've fed on. It fuels perspective. It's also great way to keep in touch. You should sign-up:
      c-newsletter.text
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import Newsletter from "~/components/FormNewsletter.vue";

export default {
  components: {
    "c-pagetitle": PageTitle,
    "c-newsletter": Newsletter
  },
  props: {
    massive: String,
    title: String
  }
};
</script>

<style>
@import "../assets/styles/vars.pcss";

.work img {
  opacity: 1;
  transition: opacity 0.5s ease;
}

.work:hover img,
.work:focus img {
  opacity: 0.05;
  transition: opacity 0.15s ease;
}

.post {
  & a {
    @media (--medium-viewport) {
      margin: auto;
      width: 50%;
    }
  }

  & p {
    @media (--medium-viewport) {
      width: 100%;
    }
  }
}

/* perhaps req'd occassionally */
.post-image {
  background-color: var(--color-text);
  background-image: url("/images/post-bubble.jpg");
  background-size: cover;
  display: none !important;

  @media (--small-viewport) {
    display: flex !important;
  }
}
</style>
