<template lang="pug">
nav.Nav-list
  .Container
    .Extract-edge(:class="hideHorizontalRule")
      hr
    .Extract-large.b-py4
      nuxt-link.Nav-link.f(
        v-for="item in navItems"
        :key="item.link"
        :to="item.link"
        :exact="item.exact"
      )
        span.Extract-large-unit.Subtitle--light.Nav-link-level {{ item.level }}
        span.Subtitle.Nav-link-label {{ item.label }}
        span.Subtitle.fw-light.Nav-link-lede {{ item.lede }}

      .Extract-large-inset
        p.Meta.fw-bold Contact
        div(
          v-for="contact in navContacts"
          :key="contact.link"
        )
          a.Text.fs-text-sm.flh-loose(:href="contact.link" target="_blank") {{ contact.label }}
</template>

<script scoped>
import NavLink from "~/components/NavLink.vue";

export default {
  name: "nav-bottom",
  components: {
    NavLink
  },
  props: {},
  computed: {
    hideHorizontalRule() {
      if (this.$store.state.isMobileNavVisible) {
        return "u-hiddenVisually";
      }
      if (this.$route.name === "interesting") {
        return "u-hiddenVisually";
      }
    }
  },
  data() {
    return {
      navItems: [
        {
          label: "Home",
          level: "00",
          link: "/",
          exact: true
        },
        {
          label: "Blog",
          level: "01",
          link: "/blog"
        },
        {
          label: "Essays",
          level: "02",
          link: "/essays"
        },
        {
          label: "Projects",
          level: "03",
          link: "/projects"
        },
        {
          label: "Interesting",
          level: "04",
          lede: "— it's a mailing list",
          link: "/interesting"
        },
        {
          label: "About",
          level: "05",
          link: "/about"
        }
        /* {
          label: "Should we team up?",
          level: "06",
          link: "/about/should-we-team-up"
        } */
      ],
      navContacts: [
        {
          label: "callum@callumflack.design",
          link: "mailto:callum@callumflack.design"
        },
        {
          label: "+61(0) 408 767 540",
          link: "tel:610-408-767-540"
        },
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

/* .Nav-list {
  background-color: var(--c-neutral);
  border-top: 1px solid var(--c-rule);
} */

.Nav-link {
  background-image: none;
  padding-bottom: calc(1 * var(--responsive-space));
  text-decoration: none;

  /* @media (--lg) {
    padding-bottom: var(--responsive-space);
  } */
}

.Nav-link:last-of-type {
  margin-bottom: calc(0.5 * var(--responsive-space));

  @media (--lg) {
    margin-bottom: var(--responsive-space);
  }
}

/* .Nav-link + .Nav-link {
  margin-top: var(--responsive-space);
} */

.Nav-link-lede {
  display: none;
  line-height: 0.5;
  margin-left: 0.5rem;
  transform: translateY(0.7rem);

  @media (--md) {
    display: inline;
  }
}

.Nav-link-level {
  display: none;

  @media (--lg) {
    display: inline;
  }
}

.Nav-link,
.Nav-link:hover {
  background-image: initial;
}

.Nav-link-label {
  margin-bottom: 0;
}

.nuxt-link-active {
  /* show it as unselectable */
  cursor: initial;
  /* never make it red */
  color: var(--c-text) !important;
}

.nuxt-link-active .Nav-link-lede {
  /* padding-left: 2rem; */
  position: relative;
}

.nuxt-link-active .Nav-link-lede:after {
  /* content: "— you're here"; */
  /* content: "✳"; */
  display: inline-block;

  font-family: var(--ff-lede), var(--ff-stack-serif);
  font-weight: 400;
  font-style: italic;
  font-family: var(--ff-heading), var(--ff-stack-sans);
  font-weight: 200;
  font-style: initial;

  margin-left: 0.25rem;
  position: relative;
}

.page-blog .nuxt-link-active,
.page-blog-page .nuxt-link-active {
  /* show as selectable if in the blog */
  cursor: pointer !important;
  &:hover {
    color: var(--c-link) !important;
  }
}
.page-index .nuxt-link-active .Nav-link-lede:after {
  /* content: "— hello, you're welcome!"; */
}
.page-work-page .nuxt-link-active .Nav-link-lede:after {
  /* content: "— view another"; */
}
.page-blog-page .nuxt-link-active .Nav-link-lede:after {
  /* content: "— read another"; */
}

.nuxt-link-active .Nav-link-label {
  position: relative;
}
.nuxt-link-active .Nav-link-label:before {
  /* content: "➔";
  content: "⚑";
  content: "✳";
  content: "✺";
  content: "——";
  content: "↳";
  display: inline-block;
  font-family: var(--ff-heading), var(--ff-stack-sans);
  font-weight: 100; 
  left: -5rem;
  position: absolute;*/
  left: 0;
  margin-right: 0.125rem;
  top: -0.125rem;
  position: relative;

  border-color: transparent;
  border-left-color: currentColor;
  border-style: solid;
  /* border-width: 9px; */
  border-width: 0.28125em;
  content: "";
  display: inline-block;
  height: 0;
  width: 0;
}
</style>
