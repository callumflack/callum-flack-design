<template lang="pug">
div
  .u-textLeft
    IconBase(icon-name="icon-sun" height="32" width="32")
      IconSun

  p.Text.m-t4
    | Ps. I write a bi-monthly email letter about design, UX and the web through the lens of people and attention. Here's 
    a(href="https://the-littoral-line.callumflack.design/" target="_blank") the archives.
    | &nbsp;You should sign up:

  .w-sm-3x4
    NewsletterSignupForm

</template>

<script>
import IconBase from "~/components/IconBase.vue";
import IconSun from "~/components/icons/IconSun.vue";
import NewsletterSignupForm from "~/components/NewsletterSignupForm.vue";

export default {
  components: {
    IconBase,
    IconSun,
    NewsletterSignupForm
  }
};
</script>

<style lang="postcss" scoped>
.LittoralIcon {
  & >>> svg {
    border-radius: 999px;
    border: 1px solid var(--c-text);
    padding: 6px;
  }
}
</style>
