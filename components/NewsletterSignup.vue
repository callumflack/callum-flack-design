<template lang="pug">
  header.Hero.CoverImage(role="banner")
    c-pageheading.u-posRelative(
      titleXl="interesting"
    )
    .container.u-posRelative.block--pb7
      c-signup(reverse)
</template>

<script>
import PageHeading from "~/components/PageHeading.vue";
import NewsletterSignupForm from "~/components/NewsletterSignupForm.vue";

export default {
  name: "newsletter-signup",
  components: {
    "c-pageheading": PageHeading,
    "c-signup": NewsletterSignupForm
  }
};
</script>

<style scope>
@import "../assets/styles/variables.css";

.Hero:before {
  background-color: rgba(0, 0, 0, 0.7);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}

.Hero {
  background-color: var(--c-text);
  background-image: url(/images/_slump.jpg);
  background-image: url(/images/_overcast-night.jpg);
  background-image: url(/images/_spys.jpg);
  background-position-y: 80%;
  position: relative;
}

.Hero p,
.Hero {
  color: var(--c-bg);
}
</style>
