<template lang="pug">
div
  c-pagetitle(title="Cut-through websites<br>for makers & shakers")

  main(role="main")
    .Container
      .TypeScope
        p.Text--large You know what you do inside out, but you can't connect with your online audience the way you'd hoped.
        p.u-noTextIndent Hi, I’m Callum. I build bold, beautiful &amp; simple digital experiences by design. I'll help you bridge the gap by understanding your unique situation, designing for emotional connection with your audience, and building a web-based system that still satisifies you and your toughest customers years from now.

        figure.Figure
          nuxt-link.WorkLink.LinkSignal.u-noVisualLink(to="/work")
            .FlexEmbed
              .FlexEmbed-ratio.FlexEmbed-ratio--15by10
              .FlexEmbed-content
                .u-posPin.u-flex.u-flexAlignItemsCenter.u-bgColorText
                  .u-flexExpand
                    .Title.u-colorWhite View the work #[span.LinkSignal-target →]
                img.u-width100.u-posRelative(src="/images/loop.gif", alt="")

        blockquote
          p Routinely entrusted with digital product innovation for companies like Apple, Google, Nike, and Facebook, which rarely approach outside firms. Blah blah over three lines.” — Wyatt Arent, AUM founder 
        //- p.TypeScope-reset.u-leftColumn
          nuxt-link.Title.u-noVisualLink.LinkSignal(to="/work") View work #[span.LinkSignal-target →]
        
        //- .Block--halfTop
        h1 The difference: focus & knowhow
        p 
          | Get direct access to a multi-skilled, self-sufficient digital strategist, designer and programmer. The difference is I'm interested and curious to know about you, your valuable service and how it resonates with your market. My job is to translate your vision into digital, then design it in code. 
        p
          | It's just you and 
          nuxt-link(to="/about") me.
          |  Because there's no middlemen and no outsourcing, nothing is lost in translation. So we'll spend more time stacking the details that make authentic audience interactions happen (the ones that build your business so you can keep doing what you do best).
          

        p I also write about designing communications and services on the web through the lens of the human moments connecting them. It helps me become better at what I do, and I think it can help you too. Here's the latest:

        .Figure
          .PostWrapper
            nuxt-link.Post.u-noVisualLink.LinkSignal.u-sm-size3of4.u-lg-size1of2(to="/journal")
              h1.Title.u-marginT0 Designers should code #[span.LinkSignal-target →]
              p.u-width100 The design of the screens is an arms race in the battle for your attention. How do you make better screens faster? Maybe designers should code? The answer is yes, at least to some degree. The explanation for which reveals deeper issues. 

        p The work is fed by constant curiosity. I write a newsletter every week about what I've found: it's a heads-up for designing online connections. It's also great way to keep in touch. You should sign-up:

        c-newsletter.Text.u-width50.u-pSpace

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
  box-shadow: inset 0 0 0 2px var(--color-text), 0.75rem 0.75rem 0 0 var(--color-text);
  display: block;
  margin: auto;
  padding: var(--s4);

  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 4px var(--color-text), 0.5rem 0.5rem 0 0 var(--color-text);
  }

  &:active {
    box-shadow: inset 0 0 8px var(--color-text), 0.5rem 0.5rem 0 0 var(--color-text);
  }
}
</style>
