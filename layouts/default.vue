<template lang="pug">
  div(:class="currentPageClass")
    Nav

    nuxt(:class="contentNavSpace")

    footer.b-pb3
      .Container
        //- hr
        .Nav-list.f.f-justifyCenter
          .Nav-link
            span.Meta.fs-text-xs Callum Flack Design
          nuxt-link.Nav-link(
            v-for="item in contacts"
            :key="item.link"
            :to="item.link"
          )
            span.Meta.fs-text-xs {{ item.label }}

    Showreel

</template>

<script>
import Nav from "~/components/Nav.vue";
import Showreel from "~/components/Showreel.vue";

export default {
  components: {
    Nav,
    Showreel
  },
  computed: {
    currentPageClass() {
      return `page-${this.$store.state.currentPage}`;
    },
    contentNavSpace() {
      if (this.$route.name === "about") {
        return "Page--about";
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
