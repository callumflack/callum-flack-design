<template lang="pug">
  div
    header(role="banner")
      c-pageheading(
        heading="Design for the experience of delight."
        link="/"
        lede="Callum Flack is a code-based designer who obsesses over the user experience. He helps individuals, groups and businesses to connect with and serve their audience."
      )
    main(role="main")
      .container.nav-mobile-layout
        .block--masthead
          nav.title
            c-navlink(
              v-for="item in navLinks"
              :key="item.label"
              :label="item.label"
              :link="item.link"
              :currentPage="currentPage"
              :exact="item.exact"
            )
          .text.text--meta.color-title.block--touch
            c-navlink(
              v-for="item in navContacts"
              :key="item.label"
              :label="item.label"
              :link="item.link"
              external
            )
</template>

<script scoped>
import PageHeading from "~/components/PageHeading.vue";
import NavLink from "~/components/NavLink.vue";
import NavButton from "~/components/NavButton.vue";

export default {
  name: "nav-bottom",
  components: {
    "c-pageheading": PageHeading,
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
          label: "Home",
          link: "/",
          exact: true
        },
        {
          label: "Work",
          link: "/work"
        },
        {
          label: "Journal",
          link: "/journal"
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

.nav-mobile-layout {
  @media (max-width: 1135px) {
    align-items: flex-end;
    display: flex;
    justify-content: flex-end;
    text-align: right;

    & .block--masthead {
      padding-bottom: var(--grid-gutter);
    }

    & a + a {
      margin-top: 4px;
    }
  }
  @media (min-width: 1136px) and (max-width: 1281px) {
    align-items: flex-start;
    display: flex;
    left: calc((100 - 90) * 0.5vw);
    right: auto;
  }
}
</style>
