<template lang="pug">
nav.f

  div
    nuxt-link.Nav-link.Nav-logo.Subtitle.u-textCapitalise.p-r2(to="/" exact)
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
          label: "Projects",
          link: "/projects"
        },
        {
          label: "About",
          link: "/about"
        }
        /* {
          label: "LL",
          link: "/the-littoral-line"
        } */
        /* {
          label: "Essays",
          link: "/essays"
        }, */
        /* {
          label: "Should we team up?",
          link: "/about/should-we-team-up"
        } */
      ],
    };
  },
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
};
</script>
