<template lang="pug">
div
  c-pagetitle(title="okok! web stories + tools<br>for makers + shakers")

  main(role="main")
    .Container
      .TypeScope
        p.Text--large You know what you do inside out. I'll help you translate it into a resounding story that speaks to the hearts of your audience.

        figure.Figure
          nuxt-link.WorkLink.LinkSignal.u-noVisualLink(to="/work")
            .FlexEmbed
              .FlexEmbed-ratio.FlexEmbed-ratio--16by9
              .FlexEmbed-content
                .u-posPin.u-flex.u-flexAlignItemsCenter.u-flexJustifyCenter.u-bgColorText
                  .Title.u-colorWhite View the work #[span.LinkSignal-target →]
                img.u-width100.u-posRelative(src="/images/loop-03.gif")

        p
          | Hi, I’m Callum. 
          nuxt-link(to="/about") I'm interested and curious
          |  to know about you, your valuable service and who your market is. Create authentic, seamless experiences. Solve the right interaction problems. Build something your customers are proud of. Together we can make things happen.

        blockquote
          p Routinely entrusted with digital product innovation for companies like Apple, Google, Nike, and Facebook, which rarely approach outside firms. Blah over three lines. #[em Wyatt Arent, AUM founder]
        
        h2 The difference is focus & knowhow
        p Work directly with a multi-skilled, self-sufficient digital strategist, designer and programmer who can take your idea from zero to reality—no middlemen, nothing lost in translation, no preconceptions. 
        p Want to know more? I write about design process and web systems through the lens of the human moments connecting them:

        .Figure
          nuxt-link.Post.u-noVisualLink.LinkSignal.u-sm-size3of4.u-lg-size1of2(to="/journal/designers-should-code")
            h1.Title.u-marginT0 Designers should code #[span.LinkSignal-target →]
            p.u-width100 The design of the screens is an arms race in the battle for your attention. How do you make better screens faster? Maybe designers should code? The answer is yes, at least to some degree. The explanation for which reveals deeper issues. 

        p Follow curiosity, find delight. I write a newsletter every week about what I've found. It's great way to keep in touch. You should sign-up:

        c-newsletter.Text.u-sm-width50.u-pSpace

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
    title: String
  },
  asyncData() {
    return new Promise(resolve => {
      setTimeout(function() {
        resolve({});
      }, 1000);
    });
  }
};
</script>

<style>
@import "../assets/styles/vars.css";

.Center {
  margin-left: auto !important;
  margin-right: auto !important;
}

.Intro {
  font-family: var(--font-medium) !important;
}

.FlexEmbed-ratio--15by10 {
  padding-bottom: 66.666667%;
}

.WorkLink img {
  opacity: 1;
  transition: opacity 0.5s ease;
}

.WorkLink:hover img,
.WorkLink:focus img {
  opacity: 0;
  transition: opacity 0.15s ease;
}

.PostWrapper {
  /* background-color: var(--color-bg-blue); */
  padding: calc(1.333 * var(--s3)) 0 calc(1.5 * var(--s3));

  @media (--large-viewport) {
    padding: calc(1.333 * var(--s4)) 0 calc(1.5 * var(--s4));
  }
}

.Post {
  background-color: var(--color-bg);
  box-shadow: inset 0 0 0 2px var(--color-text), 0.75em 0.75em 0 0 var(--color-text);
  display: block;
  margin: auto;
  padding: calc(1.5 * var(--s3));

  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 4px var(--color-text), 0.375em 0.375em 0 0 var(--color-text);
  }

  &:active {
    box-shadow: inset 0 0 8px var(--color-text), 0.375em 0.375em 0 0 var(--color-text);
  }

  @media (--small-viewport) {
    padding: var(--s4);
  }
}
</style>
