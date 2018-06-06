<template lang="pug">
  footer.footer.block--pb7(role="contentinfo")
    .container
      hr.bg-textLight
      .u-flex.u-flexJustifyCenter
        div
          c-menulink.Meta(
            label="CF/D"
            link="/"
            exact
          )
        .Meta.LinkSeparator •
        div
          //- c-menulink.Meta(
          //-   v-for="item in footerLinks"
          //-   :key="item.label"
          //-   :label="item.label"
          //-   :link="item.link"
          //- )
          a.Meta.link(target="_blank" href="mailto:callum@callumflack.design") Email
          a.Meta.link(target="_blank" href="https://twitter.com/callumflack") Twitter
</template>

<script>
import MenuLink from "~/components/MenuLink.vue";

export default {
  components: {
    "c-menulink": MenuLink
  },
  data() {
    return {
      footerLinks: [
        {
          label: "Email",
          link: "mailto:callum@callumflack.design",
          targetBlank: true
        },
        {
          label: "Twitter",
          link: "https://twitter.com/callumflack",
          targetBlank: true
        }
      ]
    };
  }
};
</script>

<style lang="postcss">
@import "../assets/styles/variables.css";

.nuxt-link-active span:before {
  content: initial;
}

.link {
  background-image: none;
  display: inline-block;
  padding-top: var(--s-3b);
  padding-bottom: var(--s-3b);
  text-decoration: none;

  @media (--sm) {
    padding-top: var(--s-4a);
    padding-bottom: var(--s-4a);
  }
}

.link + .link {
  margin-left: var(--s-3b);
}
</style>

