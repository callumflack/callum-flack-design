<template lang="pug">
  .FlexEmbed
    div(:class="ratioClasses")
    .FlexEmbed-content
      video(:class="screenClasses", autoplay="", loop="")
        source(
          :src="src",
          type="video/mp4"
        )
        | Your browser does not support the video tag. Please upgrade your browser.
</template>


<script scoped>
export default {
  name: "movie",
  computed: {
    ratioClasses() {
      return [
        "FlexEmbed-ratio",
        {
          iphone: this.iphone,
          ipad: this.ipad,
          ipadLandscape: this.ipadLandscape,
          laptop: this.laptop
        }
      ];
    },
    screenClasses() {
      return [
        "screen",
        {
          "screen--iphone": this.iphone
        }
      ];
    }
  },
  props: {
    iphone: Boolean,
    ipad: Boolean,
    ipadLandscape: Boolean,
    laptop: Boolean,
    src: String
  }
};
</script>


<style scoped>
@import "../assets/styles/variables.css";

.iphone {
  padding-bottom: 205.81395%;
}
.ipad {
  padding-bottom: 126.953125%;
} /*1024 x 1300 not 1366*/
.ipadLandscape {
  padding-bottom: 74.75%;
} /*75.21*/
.laptop {
  padding-bottom: 69.25%;
}

.frame {
  border: 1px solid var(--c-border);
}

.screen {
  width: 100%;
}

.screen--iphone {
  margin-top: 25.25%;
  width: 87.2093%;
}
</style>
