<template lang="pug">
  div
    header.block--masthead.p-b0(role="banner")
      .container
        h1.title Callum Flack is a designer who codes.
        p
          | Hi! I'm a multi-skilled, self-sufficient designer and developer who can see the big picture and execute the details. Read 
          nuxt-link(to="/about") about me.
        p Here's a selection of recent projects. I also 
          nuxt-link(to="/journal") blog 
          | about the process.

    //- main.block--pageEnd.block--touch(role="main")
    main.block--touch(role="main")
      .container.nav-mobile-layout
        nav
          c-navlink(
            v-for="item in navLinks"
            :key="item.label"
            :label="item.label"
            :year="item.year"
            :link="item.link"
            :currentPage="currentPage"
            :exact="item.exact"
          )
        .text.text--meta.c-title.block--touch
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
          label: "VJ Ray",
          year: 2017,
          link: "/work/vj-ray"
        },
        {
          label: "Oceanblue Living",
          year: 2017,
          link: "/work/oceanblue-living"
        },
        {
          label: "Primary Healthcare Network",
          year: 2017,
          link: "/work/primary-healthcare-network"
        },
        {
          label: "Album Registry",
          year: 2017,
          link: "/work/album-registry"
        },
        {
          label: "Ward6",
          year: 2017,
          link: "/work/ward6"
        },
        {
          label: "Oceanblue Boats",
          year: 2017,
          link: "/work/oceanblue-boats"
        },
        {
          label: "The Substation",
          year: 2017,
          link: "/work/the-substation"
        },
        {
          label: "Pharma eDetailer apps",
          year: 2017,
          link: "/work/ward6-edetailers"
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
