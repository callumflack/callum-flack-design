<template lang="pug">
nav.Nav-list.f.f-justifyCenter
  div
    nuxt-link.Nav-link(to="/" exact)
      span.Meta.fs-text-sm.fw-50 CFdd
  div
    .Nav-link.Nav-divider •
  div
    nuxt-link.Nav-link(
      v-for="item in navItems"
      :key="item.link"
      :to="item.link"
      :exact="item.exact"
    )
      span.Meta.fs-text-sm.fw-50 {{ item.label }}

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
        {
          label: "About",
          link: "/about"
        },
        {
          label: "The Littoral Line",
          link: "/the-littoral-line"
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

.Logo {
  background-color: var(--c-text);
  color: var(--c-bg) !important;
  padding-right: calc(0.25 * var(--rs-block-space));
  padding-left: calc(0.25 * var(--rs-block-space));
}

.Nav-link {
  align-content: center;
  display: inline-flex;
  height: var(--nav-height);
  padding-top: calc(0.5 * var(--rs-block-space));
  padding-bottom: calc(0.5 * var(--rs-block-space));
}

.Nav-link + .Nav-link {
  margin-left: calc(0.4 * var(--rs-block-space));
}

.Nav-divider {
  margin-left: calc(0.4 * var(--rs-block-space));
  margin-right: calc(0.4 * var(--rs-block-space));
}

.Nav-link,
.Nav-link:hover {
  background-image: initial;
  text-decoration: none;
}

.Nav-link span {
  transform: translateY(3px);
  transform: translateY(0.1875em);
}

.nuxt-link-active {
  border-bottom: 1px solid var(--c-text);
}
</style>
