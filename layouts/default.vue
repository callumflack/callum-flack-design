<template lang="pug">
  div(:class="currentPageClass")
    Nav

    nuxt(:class="contentNavSpace")

    footer.b-pb1.bg-neutral
      //- .Container
        .Extract-md
          hr.bg-text
      .Container.p-t6
        NewsletterSignupBlock
        .Nav-list.f.f-justifyCenter
          nuxt-link.Nav-link(to="/about")
            span.Meta.fs-text-xs ©2018 Callum Flack Design
          //- .Nav-link.Nav-divide •
          //- nuxt-link.Nav-link(to="/about")
            span.Meta.fs-text-xs Get in touch

    Showreel

</template>

<script>
import Nav from "~/components/Nav.vue";
import NewsletterSignupBlock from "~/components/NewsletterSignupBlock.vue";
import Showreel from "~/components/Showreel.vue";

export default {
  components: {
    Nav,
    NewsletterSignupBlock,
    Showreel
  },
  computed: {
    currentPageClass() {
      return `page-${this.$store.state.currentPage}`;
    },
    contentNavSpace() {
      if (this.$route.name === "about") {
        return "Page";
      } else {
        return "Page";
      }
      /* if (this.$route.name !== "the-littoral-line") {
        return "b-pb3";
      } */
    }
  },
  data() {
    return {
      contacts: [
        /* {
          label: "callum@callumflack.design",
          link: "mailto:callum@callumflack.design"
        }, */
        /* {
          label: "+61(0) 408 767 540",
          link: "tel:610-408-767-540"
        }, */
        {
          label: "@callumflack",
          link: "https://twitter.com/callumflack"
        },
        {
          label: "Cairns, Australia",
          link: "https://www.instagram.com/p/BXbsNdrAt-v"
        }
      ]
    };
  }
};
</script>

<style lang="postcss">
@import "../assets/styles/variables.css";

/* .Page {
  background-color: var(--c-bg);
  min-height: 100vh;
  padding-top: var(--fixed-menu-height);
  position: relative;
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: 3;
} */

/* .footer-spacer {
  display: none;
  height: 100vh;

  @media (--md) {
    display: block;
  }
} */
</style>
