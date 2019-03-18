<template lang="pug">
.Block.f
  .Block-cell.w-2x12
    .p-y3.p-x4.u-textLeft
      IconBase.LittoralIcon(icon-name="icon-sun" height="40" width="40")
        IconSun

  .Block-cell.w-sm-10x12
    p.Text.p-t3.p-b7.p-x4.m-b0(v-if="introTextToggle")
      | Ps. I write a bi-monthly email letter about design, UX and the web through the lens of people and attention. Here's
      nuxt-link(to="/the-littoral-line") the archives.
      | &nbsp;You should sign up:
    p.Text.p-t3.p-b7.p-x4.m-b0(v-else)
      | I write an email letter once or twice a month about visual design, user experience and website development through the lens of people and attention. I find and align the interesting "inbetween things" that wash up in this particular tidal zone, so to speak. It's called the Littoral Line.

    NewsletterSignupForm

</template>

<script>
import IconBase from "~/components/IconBase.vue";
import IconSun from "~/components/icons/IconSun.vue";
import NewsletterSignupForm from "~/components/NewsletterSignupForm.vue";

export default {
  name: "NewsletterSignupBlock",
  components: {
    IconBase,
    IconSun,
    NewsletterSignupForm
  },
  computed: {
    introTextToggle() {
      if (this.$route.name !== "the-littoral-line") {
        return true;
      }
    }
  }
};
</script>

<style lang="postcss">
@import "../assets/styles/variables";

.Block {
  /* themeable */
  --c-block: var(--c-text);
  --bg-block: var(--c-bg);

  background-color: var(--bg-block);
  border: 1px solid var(--c-block);
  border-left: 0;
  color: var(--c-block);
}

.Block-cell {
  border-left: 1px solid var(--c-block);
}

.LittoralIcon {
  margin-top: 0.25em;

  & svg {
    @media (--mo) {
      height: 24px;
      width: 24px;
    }

    border-radius: 999px;
    border: 1px solid var(--c-block);
    padding: 4px;
  }
}

.Form {
  border-top: 1px solid var(--c-block);
}

.Form input {
  --input-bg-color-focus: var(--bg-block);
  color: var(--c-block);
}
</style>
