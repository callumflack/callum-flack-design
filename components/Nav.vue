<template lang="pug">
  div
    header.block--pt7(role="banner")
      .container
        .journal-scope
          h1.title Callum Flack is a designer + developer.
          p
            | I help owners and creators design and build interfaces that merge brand with product. I'll counsel you on the big picture. I'll execute the details that seamless, authentic experiences are made of. I 
            nuxt-link(to="/journal") blog
            | &nbsp;about this process.
            
          p.nav-space I've been a professional designer since 2000. Read more  
            nuxt-link(to="/about") about
            | &nbsp;me. Need specialist digital design help? Please <a class="icon-targetblank" target="_blank" href="mailto:callum@patternworks.com.au">email</a>.
          
          //- p Below is a list of recent projects and posts since 2014, draw from an 
            nuxt-link(to="/work") archive
            | .

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
        //- p.text--meta 
          nuxt-link(to="/work") View work archive
        
        //- .text.text--meta.c-title.block--mt4
          c-navlink(
            v-for="item in navContacts"
            :key="item.label"
            :label="item.label"
            :link="item.link"
            external
          )
      //- .block--mt4
        .container.text-scope
          //- p The best way to contact me is by <a class="icon-targetblank" target="_blank" href="mailto:callum@patternworks.com.au">email</a>.
           or <a class="icon-targetblan" target="_blank" href="https://twitter.com/callumflack">Twitter</a>
          //- p.text--meta.c-textLight Looking for digital design advice and execution? Get in touch by <a class="icon-targetblank" target="_blank" href="mailto:callum@patternworks.com.au">email</a>.
          //- p.text--meta.c-textLight Looking for digital design advice and execution? <a class="icon-targetblank" target="_blank" href="mailto:callum@patternworks.com.au">Please email</a>.
          //- p Interested? <a class="icon-targetblank" target="_blank" href="mailto:callum@patternworks.com.au">Please email me</a>.
          p Need specialist advice? <a class="icon-targetblank" target="_blank" href="mailto:callum@patternworks.com.au">Please email me</a>.
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
