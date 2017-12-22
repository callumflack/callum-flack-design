<template lang="pug">
div
  c-pagetitle(
    title="Callum Flack Design + Development"
    link="/about"
    massive="Digital brands & products<br>for makers & shakers"
  )

  main(role="main")
    .Column
      .Container
        .Inner
          figure.Figure.Figure--large
            nuxt-link.Work.LinkSignal.u-noVisualLink(to="/work")
              .FlexEmbed
                .FlexEmbed-ratio.FlexEmbed-ratio--16by9
                .FlexEmbed-content
                  .u-posPin.u-flex.u-flexAlignItemsCenter.u-flexJustifyCenter.u-bgColorText
                    .Massive.u-colorWhite.u-textCenter 
                      | View the work #[span.LinkSignal-target →]
                  img.u-width100.u-posRelative(src="/images/loop-04.gif")

          .TextScope
            p
              | Hi, I’m Callum. 
              nuxt-link(to="/about") I'm interested and curious
              |  to know about you, your valuable service and who your market is. I can help you create authentic, seamless experiences. Solve the right interaction problems. Build something your customers are proud of. Together we can make things happen.
              
            h2 The difference is focus & knowhow
            p Work directly with a multi-skilled, self-sufficient digital strategist, designer and programmer who can take your idea from zero to reality—no middlemen, nothing lost in translation, no cookie-cutter preconceptions. 
            p 
              | Want to know more? Read the 
              nuxt-link(to="/journal") Journal
              | , where I write about design process and web systems through the lens of the human moments connecting them:

            blockquote.Figure.Post.u-noQuote
              nuxt-link.u-noVisualLink.LinkSignal(to="/journal/designers-should-code")
                h1.Massive.u-marginT0.u-marginB3 Designers should code
                p It's difficult to apply fine design sensibility to software products. But as a visual designer, the more agency you have in the product design process, the better the product.
                  em
                    span.LinkSignal-target Read the article →

            h2 Follow curiosity, find delight
            p I write a newsletter every week about what I've found. It's great way to keep in touch. You should sign-up:
            
            c-newsletter.Text

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
@import "../assets/styles/vars.css";

.Work img {
  opacity: 1;
  transition: opacity 0.5s ease;
}

.Work:hover img,
.Work:focus img {
  opacity: 0;
  transition: opacity 0.15s ease;
}

.Post {
  left: 50% !important;
  padding-left: 0 !important;

  & a {
    background-color: var(--color-neutral);
    display: block;
    padding: 2rem;
  }
}

.Post-image {
  background-color: var(--color-text);
  background-image: url("/images/post-bubble.jpg");
  background-size: cover;
  display: none !important;

  @media (--small-viewport) {
    display: flex !important;
  }
}

.Post-summary {
  background-color: var(--color-neutral);
  padding: var(--s4);
  padding-right: var(--s2);
}

.Post-title {
  transform: translateY(-1.75em);
}

.Post-titleX {
  display: inline;
  margin: 0 !important;
  position: absolute;
  transform: rotate(-90deg);
  width: auto;
  left: -8rem;
  top: 4rem;
}
</style>
