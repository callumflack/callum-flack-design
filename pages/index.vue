<template lang="pug">
div
  c-pagetitle(title="from idea to your people. By design.")

  main(role="main")
    //- c-slide(
      v-for="slide in slides",
      :key="slide.label",
      :imageUrl="slide.imageUrl",
      :figureUrl="slide.figureUrl",
      :hi="slide.hi",
      :heading="slide.heading",
      :text="slide.text",
      :link="slide.link",
      :linkLabel="slide.linkLabel",
      :newsletter="slide.newsletter",
      :alignRight="slide.alignRight",
    //- )
    .Container.Block
      .TypeScope
        p Pause for a moment, and answer this for yourself: “Why perfectly phrased question that gets to the root of design choice immeidately?”

        p Hi, I’m Callum. I build bold, beautiful &amp; simple digital products by design. And I can help you answer this question.

        blockquote
          p “Routinely entrusted with digital product innovation for companies like Apple, Google, Nike, and Facebook, which rarely approach outside firms. Blah blah over three lines.” _—&nbsp;Wyatt Arent, AUM founder_

        p Here’s some examples of how I’ve helped wilful businesses, organisations and individuals create their digital shopfronts…

</template>

<script>
import Slide from "~/components/Slide.vue";
import PageTitle from "~/components/PageTitle.vue";

export default {
  components: {
    "c-pagetitle": PageTitle,
    "c-slide": Slide
  },
  props: {
    title: String
  },
  data() {
    return {
      slides: [
        {
          heading: "Hi, I'm Callum.",
          text: "I build bold, beautiful & simple digital products by design.",
          imageUrl: "hi.svg",
          hi: true
        },
        {
          heading: "Plan, Design & build.",
          text:
            "I can help you brand, design &amp; build your next digital product.<span>Or revitalise your current one.</span>"
        },
        {
          heading: "From Curiousity to understanding.",
          text:
            "I listen to find your real challenge. Then I work with you to change it.",
          imageUrl: "home-story-1.jpg"
        },
        {
          heading: "Speak to the heart.",
          text:
            "People respond when it feels right. That's the sum of designed details working for you.",
          imageUrl: "home-story-2.jpg",
          alignRight: true,
          link: "/work",
          linkLabel: "See work examples →"
        },
        {
          heading: "From idea to the customer.",
          text:
            "I design with code so that your idea becomes a product in customer hands without… ",
          link: "#",
          linkLabel: "Follow me on Github"
        },
        {
          heading: "Translated into simple terms.",
          text:
            "I write about design, technology, business & communicating. Let me give you perspective:",
          imageUrl: "home-story-1.jpg",
          newsletter: true
        },
        {
          heading: "Good design is good business.",
          text:
            "Ask yourself, have you spent a fortune on an app that your customers don’t love?",
          link: "/contact",
          linkLabel: "Let me help"
        }
      ]
    };
  }
};
</script>

<style>
@import "../assets/styles/vars.css";
</style>
