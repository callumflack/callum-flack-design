<template lang="pug">
  .NewsletterHero.CoverImage(role="banner")
    .block--pt7.block--matchFixedMenuBottom.u-posRelative
      h1.Title.u-textCenter.u-lg-size10of12.m-xA interesting
    .Container.u-posRelative.block--pb7
      c-signup
</template>

<script>
import NewsletterSignupForm from "~/components/NewsletterSignupForm.vue";

export default {
  name: "newsletter-signup",
  components: {
    "c-signup": NewsletterSignupForm
  }
};
</script>