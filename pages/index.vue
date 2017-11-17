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
          text: "I build futures by design.",
          imageUrl: "hi.svg",
          hi: true
        },
        {
          heading: "Bold, beautiful & simple.",
          text:
            "I can help you brand, design &amp; build your next digital product.<span>Or revitalise your current one.</span>"
        },
        {
          heading: "Curious to understand.",
          text:
            "I listen to find your real challenge. Then I work with you to change it.",
          imageUrl: "home-story-1.jpg"
        },
        {
          heading: "Like you, I take the long view.",
          text:
            "From the top of the mountain, we can see more of where ideas can lead.",
          alignRight: true
        },
        {
          heading: "Beauty makes emotion.",
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
          heading: "I write about it.",
          text:
            "About design, technology, business, communicating. Learn with me?",
          imageUrl: "home-story-1.jpg",
          newsletter: true
        },
        {
          heading: "Good design is good business.",
          text:
            "Ask yourself, have you spent a fortune on an app that your customers don’t love?",
          link: "/contact",
          linkLabel: "find a better way"
        }
      ]
    };
  }
};
</script>

<style>
@import "../assets/styles/vars.css";
</style>
