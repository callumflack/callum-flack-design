<template lang="pug">
  div
    header.block--pt7(role="banner")
      .container
        .journal-scope
          h1.heading Callum Flack is a designer + developer.
          p.nav-space
            | Since 2000, I've helped owners and creators design and build interfaces that merge brand with product. I'll counsel you on the big picture. I'll execute the details that seamless, authentic experiences are made of. I also 
            nuxt-link(to="/journal") blog
            | &nbsp;about this process. Read 
            nuxt-link(to="/about") about
            | &nbsp;me. Interested? Please <a class="icon-targetblank" target="_blank" href="mailto:callum@patternworks.com.au">email</a>.
      //- c-pageheading(
      //-   heading="Callum Flack is a designer + developer."
      //-   :lede="page.lede"
      //-   projectScope
      //-   projectSpace
      //- )

    main.block--pb7(role="main")
      .container
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
          label: "Should designers code?",
          year: "2018",
          link: "/journal/designers-should-code"
        },
        {
          label: "Oceanblue Living",
          year: "2016",
          link: "/work/oceanblue-living"
        },
        {
          label: "Album Registry",
          year: "2017",
          link: "/work/album-registry"
        },
        {
          label: "VJ Ray",
          year: "2017",
          link: "/work/vj-ray"
        },
        {
          label: "All projects",
          year: "→",
          link: "/work"
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
@import "../assets/styles/variables.css";

.nav-space {
  margin-bottom: calc(1.5 * var(--s-3)) !important;

  @media (--md) {
    margin-bottom: calc(1.5 * var(--s-3b)) !important;
  }
}

.nav-mobile-layout {
  @media (max-width: 1135px) {
    align-items: flex-end;
    display: flex;
    justify-content: flex-end;
    text-align: right;

    & .block--py7 {
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
