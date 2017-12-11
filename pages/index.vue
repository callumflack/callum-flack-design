<template lang="pug">
div
  c-pagetitle(title="Cut-through websites for makers & shakers")

  main(role="main")
    .Container
      .TypeScope
        blockquote.left
          p You know what you do inside out but you can't connect with your online audience the way you'd hoped. Or you've nailed your service offering but you can't translate it into a digital shopfront that works. 

        p Hi, I’m Callum. I build bold, beautiful &amp; simple digital experiences by design. I'll help you bridge the gap by understanding your unique situation, designing for emotional connection with your audience, and building a web-based system that still satisifies you and your toughest customers years from now.

        figure.Figure
          nuxt-link(to="/work")
            img.u-width100(src="/images/loop.gif", alt="")

        blockquote
          p Routinely entrusted with digital product innovation for companies like Apple, Google, Nike, and Facebook, which rarely approach outside firms. Blah blah over three lines.” — Wyatt Arent, AUM founder 
        p.TypeScope-reset.u-leftColumn
          nuxt-link.Title.u-noVisualLink.LinkSignal(to="/work") View work #[span.LinkSignal-target →]

        p.Block--halfTop I write about communicating on the web through the lens of design, technology, business and the small, human moments inbetween. It helps me become better at what I do, and I think it can help you too. Here's the latest:

        .Figure
          .PostWrapper
            nuxt-link.Post.u-noVisualLink.LinkSignal.u-sm-size3of4.u-lg-size1of2(to="/journal")
              .Title.u-pSpace Designers should code #[span.LinkSignal-target →]
              p.u-width100 The design of the screens is an arms race in the battle for your attention. How do you make better screens faster? Maybe designers should code? The answer is yes, at least to some degree. The explanation for which reveals deeper issues. 

        p Before the work and the writing comes a great curiosity, a need to find <em>interesting</em>. So I write a newsletter every week about what I've found: it's a heads-up in digital design trends. It's also great way to keep in touch. You should sign-up:

        c-newsletter.Text.u-width50

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
