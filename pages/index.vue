<template lang="pug">
  main(role="main")
    .Block--quarterTop
      c-slide(
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
      )
</template>

<script>
import Slide from "~/components/Slide.vue";

export default {
  components: {
    "c-slide": Slide
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
          heading: "design with code.",
          text:
            "It's the closest I can get to knowing how it works.<br>Nothing beats the craft of doing.",
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
