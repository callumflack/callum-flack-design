<template lang="pug">
  div
    .u-textCenter
      IconBase(icon-name="icon-camp-fire" height="27" width="27")
        IconSun
    p.m-t4.fs-text-sm.u-textCenter.w-lg-11x12.m-xA
      | Ps. I write a bi-monthly email letter about design, UX and the web through the lens of people and attention. Here's 
      a(href="https://the-littoral-line.callumflack.design/" target="_blank") the archives.
      | &nbsp;You should sign up:
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
.BlackLittoralIcon {
  & >>> svg {
    border-radius: 999px;
    background-color: var(--c-text);
    color: var(--c-bg);
  }
}
</style>
