<template lang="pug">
  div(:class="currentPageClass")
    Nav

    nuxt.b-clearFixedNav.b-pb15

    footer.b-pb4
      .Container
        NewsletterSignupBlock(v-if="showSignup")

        //- .Nav-list
          nuxt-link.Nav-link(to="/about")
            span.Meta.fs-text-xs ©2018 Callum Flack Design
          .Nav-link.Nav-divide •
          nuxt-link.Nav-link(to="/about")
            span.Meta.fs-text-xs Contact

    //- Showreel

</template>

<script>
import Nav from "~/components/Nav.vue";
import NewsletterSignupBlock from "~/components/NewsletterSignupBlock.vue";
/* import Showreel from "~/components/Showreel.vue"; */

export default {
  components: {
    Nav,
    NewsletterSignupBlock
  },
  computed: {
    currentPageClass() {
      return `page-${this.$store.state.currentPage}`;

      /* if (this.$route.name === "blog-page") {
        return "bg-neutral";
      } else {
        return `page-${this.$store.state.currentPage}`;
      } */
    },
    showSignup() {
      if (this.$route.name !== "the-littoral-line") {
        return true;
      }
    }
  }
};
</script>
