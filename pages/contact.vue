<template lang="pug">
  div
    div(role="banner")
      .u-bgColorNeutral
        .Container
          .Block--hero
            .u-sm-size2of3.Grid-cell--center
              figure.Figure.u-textCenter.u-pSpace
                | clock here…
              .Title.u-textCenter The time in Cairns.
    main(role="main")
      .Container
        .Markdown
          p 
            a.u-noVisualLink(href="https://goo.gl/maps/y4EFgqzmxbL2") 
              | 16 Ponticello Street, Whitfield #[br]
              | Cairns 4870, Australia
          ul.u-noVisualList
            c-contactlink(
              v-for="item in contactLinks",
              :key="item.label",
              :label="item.label",
              :link="item.link",
              :linkLabel="item.linkLabel",
            )
          
          p Want to keep in touch with give a great reason to signup:
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
        c-endrule
</template>


<script scoped>
import ContactLink from "~/components/ContactLink.vue";
import FormNews from "~/components/FormNews.vue";
import EndRule from "~/components/EndRule.vue";

export default {
  components: {
    "c-endrule": EndRule,
    "c-contactlink": ContactLink,
    "c-formnews": FormNews
  },
  data() {
    return {
      contactLinks: [
        {
          label: "Email",
          link: "mailto:hi@patternworks.com.au",
          linkLabel: "hi@patternworks.com.au"
        },
        {
          label: "Phone",
          link: "617-0408-767-540",
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
