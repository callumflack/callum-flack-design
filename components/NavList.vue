<template lang="pug">
nav.f

  div
    nuxt-link.Nav-link.Nav-logo.Title.fs-text.u-textCapitalise.p-r2(to="/" exact)
      span CFd

  //- .Nav-link.Text.m-x4 /

  .Nav-list
    nuxt-link.Nav-link.Text.m-l4(
      v-for="item in navItems"
      :key="item.link"
      :to="item.link"
      :exact="item.exact"
    )
      span {{ item.label }}

</template>

<script scoped>
import NavLink from "~/components/NavLink.vue";

export default {
  components: {
    NavLink
  },
  props: {},
  computed: {
    hideHorizontalRule() {
      if (this.$store.state.isMobileNavVisible) {
        return "u-hiddenVisually";
      }
      if (this.$route.name === "the-littoral-line") {
        return "u-hiddenVisually";
      }
      // if (this.$route.name === "index") {
      //   return "u-hiddenVisually";
      // }
    }
  },
  data() {
    return {
      navItems: [
        /* {
          label: "Intro",
          link: "/",
          exact: true
        }, */
        {
          label: "Blog",
          link: "/blog"
        },
        {
          label: "Clients",
          link: "/projects"
        },
        /* {
          label: "Newsletter",
          link: "/the-littoral-line"
        }, */
        {
          label: "About",
          link: "/about"
        }
        /* {
          label: "Essays",
          link: "/essays"
        }, */
        /* {
          label: "Should we team up?",
          link: "/about/should-we-team-up"
        } */
      ],
      navContacts: [
        {
          label: "callum@callumflack.design",
          link: "mailto:callum@callumflack.design"
        },
        /* {
          label: "+61(0) 408 767 540",
          link: "tel:610-408-767-540"
        }, */
        {
          label: "@callumflack",
          link: "https://twitter.com/callumflack"
        },
        {
          label: "Cairns, Australia",
          link: "https://www.instagram.com/p/BXbsNdrAt-v"
        }
      ]
    };
  }
};
</script>
