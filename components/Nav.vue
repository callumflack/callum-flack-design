<template lang="pug">
  .Container
    .Space
      nav.Title
        c-navlink(
          v-for="item in navLinks"
          :key="item.label"
          :label="item.label"
          :link="item.link"
          :currentPage="currentPage"
          :exact="item.exact"
        )
      .Text.Text--meta.u-colorTitle.Block--touch
        c-navlink(
          v-for="item in navContacts"
          :key="item.label"
          :label="item.label"
          :link="item.link"
          external
        )
      //- .Text--small.u-marginT2
        c-navlink(
          v-for="item in navButtons",
          :key="item.label",
          :label="item.label",
          :link="item.link",
        )
</template>


<script scoped>
import NavLink from "~/components/NavLink.vue";
import NavButton from "~/components/NavButton.vue";

export default {
  name: "nav-bottom",
  components: {
    "c-navlink": NavLink,
    "c-navbutton": NavButton
  },
  props: {
    currentPage: String
  },
  data() {
    return {
      navLinks: [
        {
          label: "Index",
          link: "/",
          exact: true
        },
        {
          label: "Work",
          link: "/work"
        },
        {
          label: "Journal",
          link: "/journal/designers-should-code"
        },
        {
          label: "About",
          link: "/about"
        }
      ],

      navContacts: [
        {
          label: "callum@patternworks.com.au",
          link: "mailto:callum@patternworks.com.au"
        },
        {
          label: "+61 408 767 540",
          link: "tel:610-408-767-540"
        },
        {
          label: "@callumflack",
          link: "https://twitter.com/callumflack"
        }
      ],

      navButtons: [
        {
          label: "Twitter",
          link: "https://twitter.com/callumflack"
        },
        {
          label: "Github",
          link: "https://github.com/callumflack"
        },
        {
          label: "LinkedIn",
          link: "https://www.linkedin.com/in/callumflack"
        },
        {
          label: "Instagram",
          link: "https://www.linkedin.com/in/callumflack"
        }
      ]
    };
  }
};
</script>


<style scoped>
@import "../assets/styles/vars.css";
</style>
