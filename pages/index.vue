<template lang="pug">
  div
    .Block--quarterSandwich
      .Hi.u-flex.u-flexAlignCenter
        figure.Hi-image.u-coverImage.Figure--tuck

        //- h1.Title How do you build the future? By design.
    
    c-slide(
      class="",
      v-for="slide in slides",
      :key="slide.label",
      :imageUrl="slide.imageUrl",
      :text="slide.text",
      :alignRight="slide.alignRight",
    )

</template>

<script>
import Slide from "~/components/Slide.vue";
import FormNewsletter from "~/components/form-newsletter.vue";

export default {
  components: {
    "c-slide": Slide,
    "c-formnewsletter": FormNewsletter
  },
  data() {
    return {
      slides: [
        {
          text:
            "I can help you brand, design &amp; build your next digital product.<span>Or revitalise your current one.</span>",
          alignRight: true
        },
        {
          text:
            "I listen to find out what your real challenge is.<span>Then I work with you to change it.</span>",
          imageUrl: "home-story-1.jpg"
        },
        {
          text:
            "Like you, I take the long view.<span>(So we can see more of where our ideas lead us.)</span>"
        },
        {
          text:
            "And then I stack up the details that greatness always requires.",
          imageUrl: "home-story-2.jpg"
        },
        {
          text:
            "I also code.<span>It's the closest I can get to seeing how it works.</span>",
          alignRight: true
        },
        {
          text: "And I write about what I learn in the process.",
          imageUrl: "home-story-1.jpg"
        },
        {
          text:
            "If we choose to work together, I’ll start with no preconceptions."
        }
      ]
    };
  }
};
</script>

<style>
@import "../assets/styles/vars.css";

.Hi {
  background-color: yellow;
}

.Hi-image {
  background-image: url("/images/hi.svg");
  background-size: contain;
  height: 90vh;
  width: 70vw;
}
</style>
