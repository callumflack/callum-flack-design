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
        span.Subtitle {{ item.label }}
        span.Subtitle.fw-light.LedeAdjustment {{ item.lede }}

      .Extract-large-inset
        p.Meta2.fw-bold Contact
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
          link: "/blog?essays"
        },
        {
          label: "Projects",
          level: "03",
          link: "/work"
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
        },
        {
          label: "Should we team up?",
          level: "06",
          link: "/about/should-we-team-up"
        }
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

<style scoped>
@import "../assets/styles/variables.css";

.Nav-list {
  /* background-color: var(--c-neutral); */
  /* border-top: 1px solid var(--c-rule); */
}

.Nav-link {
  background-image: none;
  padding-bottom: var(--responsive-space);
  text-decoration: none;
}

.Nav-link:last-of-type {
  margin-bottom: var(--responsive-space);
}

.Nav-link + .Nav-link {
  /* margin-top: var(--responsive-space); */
}

.LedeAdjustment {
  line-height: 0.5;
  margin-left: 0.5rem;
  transform: translateY(0.7rem);
}

/* .Nav-link-level {
  transform: translateY(21px);
  transform: translateY(19px);
} */

.nuxt-link-active {
  color: var(--c-highlight);
}

.nuxt-link-active .LedeAdjustment {
  /* padding-left: 2rem; */
  position: relative;
}

.nuxt-link-active .LedeAdjustment:after {
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

.page-index .nuxt-link-active .LedeAdjustment:after {
  /* content: "— hello, you're welcome!"; */
}
.page-work-page .nuxt-link-active .LedeAdjustment:after {
  /* content: "— view another"; */
}
.page-blog-page .nuxt-link-active .LedeAdjustment:after {
  /* content: "— read another"; */
}
</style>
