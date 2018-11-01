<template lang="pug">
  //- hr.Post-endRule.b-mb0.b-mt2
  //- .b-mt3--illusion
  .b-mt2
    //- .ff-title.fw-300(style="font-size:2em") ✺ 
    .u-textCenter
      IconBase(icon-name="icon-camp-fire" height="30" width="30")
        IconSun
    .m-t4.fs-block-sm
      p Ps. I write a bi-monthly email letter about visual design, user experience and website development through the lens of people and attention. You should sign up:
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
.b-mt3--illusion {
  margin-top: calc(2 * 0.7 * var(--rs-block-space));
}

.BlackLittoralIcon {
  & >>> svg {
    border-radius: 999px;
    background-color: var(--c-text);
    color: var(--c-bg);
  }
}
</style>
