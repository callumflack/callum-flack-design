<template lang="pug">
nav.Nav-list.f.f-justifyCenter
  div
    nuxt-link.Nav-link.Logo(to="/" exact)
      span.Meta.Meta--nav.fs-text-sm CFd
  div
    .Nav-link.Nav-divider •
  div
    nuxt-link.Nav-link(
      v-for="item in navItems"
      :key="item.link"
      :to="item.link"
      :exact="item.exact"
    )
      span.Meta.Meta--nav.fs-text-sm {{ item.label }}

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

<style lang="postcss" scoped>
@import "../assets/styles/variables.css";
</style>
