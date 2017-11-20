<template lang="pug">
  div
    div(role="banner")
      .u-bgColorNeutral
        .Container
          .Block--sandwich
            .u-sm-size2of3.Grid-cell--center
              figure.Figure.u-textCenter.u-pSpace
                c-clock
              .Title.u-textCenter Cairns Time.
    main(role="main")
      .Container.Block
        .Markdown
          p
            a.u-noVisualLink(href="https://goo.gl/maps/y4EFgqzmxbL2")
              | 16 Ponticello Street, Whitfield #[br]
              | Cairns 4870, Australia
          ul.u-noVisualList.u-noNegativeTopAlign
            c-contactlink(
              v-for="item in contactLinks",
              :key="item.label",
              :label="item.label",
              :link="item.link",
              :linkLabel="item.linkLabel",
            )

          p.u-pSpace Want to keep in touch with give a great reason to signup:
          c-formnews.u-pSpace

          //- p Find me elsewhere on the internet:
          //- ul
            c-contactlink(
              v-for="item in socialLinks",
              :key="item.label",
              :label="item.label",
              :link="item.link",
              :linkLabel="item.linkLabel",
            )
    footer.u-bgColorWhite(role="contentinfo")
      c-nav
</template>



<script scoped>
import ContactLink from "~/components/ContactLink.vue";
import FormNews from "~/components/FormNews.vue";
import Nav from "~/components/Nav.vue";
import Clock from "~/components/Clock.vue";

export default {
  components: {
    "c-nav": Nav,
    "c-contactlink": ContactLink,
    "c-formnews": FormNews,
    "c-clock": Clock
  },
  data() {
    return {
      contactLinks: [
        {
          label: "Email",
          link: "mailto:callum@patternworks.com.au",
          linkLabel: "callum@patternworks.com.au"
        },
        {
          label: "Phone",
          link: "tel:617-0408-767-540",
          linkLabel: "+617(0) 408 767 540"
        },
        {
          label: "Skype",
          link: "https://github.com/callumflack",
          linkLabel: "callumflack"
        }
      ],

      socialLinks: [
        {
          link: "https://twitter.com/callumflack",
          linkLabel: "Twitter"
        },
        {
          link: "https://instagram.com/callumflack",
          linkLabel: "Instagram"
        },
        {
          link: "https://github.com/callumflack",
          linkLabel: "Github"
        },
        {
          link: "https://www.linkedin.com/in/callumflack",
          linkLabel: "LinkedIn"
        },
        {
          link: "https://angel.co/callum-flack",
          linkLabel: "Angel List"
        }
      ]
    };
  },
  props: {}
};
</script>

<style scoped>

</style>
