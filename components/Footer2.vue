<template lang="pug">
  footer.footer.block--pb7(role="contentinfo")
    .Container
      hr.bg-textLight(style="margin: 0 0 1px 0")
      .u-flex.u-flexJustifyCenter
        div
          c-menulink.Meta(
            style="text-transform: initial"
            label="CFd"
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
          nuxt-link.Meta.link(to="/interesting") 
            span Interesting
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
</style>

