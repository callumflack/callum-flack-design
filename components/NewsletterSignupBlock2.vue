<template lang="pug">
.Block.f
  .Block-cell.w-3x12
    .p-y3.p-x4.u-textLeft
      IconBase.LittoralIcon(icon-name="icon-sun" height="36" width="36")
        IconSun

  .Block-cell.w-sm-9x12
    p.Text.p-t3.p-b6.p-x4.m-b0
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
.Block {
  border: 1px solid var(--c-text);
  border-left: 0;
}
.Block-cell {
  border-left: 1px solid var(--c-text);
  /* padding: var(--s-3) var(--s-3a); */
}

.LittoralIcon {
  & >>> svg {
    border-radius: 999px;
    border: 1px solid var(--c-text);
    padding: 4px;
  }
}
</style>
