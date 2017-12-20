<template lang="pug">
div
  c-pagetitle(
    massive="You know what you do inside out. I'll help you translate it into a resounding story that speaks to the hearts of your audience."
    title="digital brands & products<br>for makers & shakers"
  )

  main(role="main")
    .Column
      .Container
        .Inner
          figure.Figure.Figure--large
            nuxt-link.WorkLink.LinkSignal.u-noVisualLink(to="/work")
              .FlexEmbed
                .FlexEmbed-ratio.FlexEmbed-ratio--16by9
                .FlexEmbed-content
                  .u-posPin.u-flex.u-flexAlignItemsCenter.u-flexJustifyCenter.u-bgColorText
                    .Title.u-colorWhite.u-textCenter 
                      | View the work #[span.LinkSignal-target →]
                  img.u-width100.u-posRelative(src="/images/loop-04.gif")

          .TypeScope
            p
              | Hi, I’m Callum. 
              nuxt-link(to="/about") I'm interested and curious
              |  to know about you, your valuable service and who your market is. I can help you create authentic, seamless experiences. Solve the right interaction problems. Build something your customers are proud of. Together we can make things happen.
              
            blockquote
              p Routinely entrusted with digital product innovation for companies like Apple, Google, Nike, and Facebook, which rarely approach outside firms. Blah over three lines. #[em Wyatt Arent, AUM founder]
            
            h2 The difference is focus & knowhow
            p Work directly with a multi-skilled, self-sufficient digital strategist, designer and programmer who can take your idea from zero to reality—no middlemen, nothing lost in translation, no cookie-cutter preconceptions. 
            p Want to know more? Read the #[a(href="/journal") Journal], where I write about design process and web systems through the lens of the human moments connecting them:

            .Figure
              .Grid-cell--center.u-lg-size3of4.u-posRelative
                //- .Post-title.Title Journal
                nuxt-link.Post.TypeScope-reset.u-noVisualLink.LinkSignal(to="/journal/designers-should-code")
                  .Post-image.u-posRelative.u-sm-size1of4.u-lg-size1of2(style="background-image: url(/images/post-image.png)")
                    //- img.u-posPin(src="/images/post-image.png")
                  .Post-summary.u-sm-size1of4.u-lg-size1of2.u-flex.u-flexAlignItemsCenter
                    div
                      h1.Massive.u-marginT2.u-marginB2 Designers should code
                      p.u-width100 The design of the screens is an arms race in the battle for your attention. How do you make better screens faster? Maybe designers should code? The answer is yes, at least to some degree. The explanation for which reveals deeper issues. 
                        span.LinkSignal-target.Text--medium Read →

            h2 Start building your understanding of what it takes
            p Follow curiosity, find delight. I write a newsletter every week about what I've found. It's great way to keep in touch. You should sign-up:
            p
              c-newsletter

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

.WorkLink img {
  opacity: 1;
  transition: opacity 0.5s ease;
}

.WorkLink:hover img,
.WorkLink:focus img {
  opacity: 0;
  transition: opacity 0.15s ease;
}

.Post {
  /* border: 2px solid var(--color-text); */
  display: flex;
  margin: auto;
  position: relative;
  /* padding: var(--s3) 0 calc(1.333 * var(--s3)); */
  /* padding: calc(1.5 * var(--s3)); */

  @media (--small-viewport) {
    /* padding: 0 var(--s4); */
  }
}

.Post-image,
.Post-summary {
}

.Post-image {
  background-size: cover;
}

.Post-summary {
  background-color: var(--color-neutral);
  padding: var(--s4);
  padding-right: var(--s2);
}

.Post-title {
  display: inline;
  margin: 0 !important;
  position: absolute;
  transform: rotate(-90deg);
  width: auto;

  left: -8rem;
  top: 4rem;
}
</style>
