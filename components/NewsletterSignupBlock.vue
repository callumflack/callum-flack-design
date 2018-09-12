<template lang="pug">
  .NewsletterHero.CoverImage(role="banner")
    .block--pt7.block--matchFixedMenuBottom.u-posRelative
      h1.Title.u-textCenter.u-lg-size10of12.m-xA interesting
    .Container.u-posRelative.block--pb7
      NewsletterSignupForm
      NewsletterSignupLede
      c-signup
</template>

<script>
import NewsletterSignupForm from "~/components/NewsletterSignupForm.vue";
import NewsletterSignupLede from "~/components/NewsletterSignupLede.vue";

export default {
  components: {
    NewsletterSignupForm,
    NewsletterSignupLede
  }
};
</script>