<template lang="pug">
nav.Nav-list
  hr.bg-rule(style="height:1px", :class="hideHorizontalRule")
  .Container.Container--verticalRule
    //- .Extract-super(:class="hideHorizontalRule")
      hr.bg-rule(style="height:1px")
    .Extract-large.b-py3
      nuxt-link.Nav-link.f(
        v-for="item in navItems"
        :key="item.link"
        :to="item.link"
        :exact="item.exact"
      )
        .Extract-large-unit.Title.Nav-link-level.fw-500
          span {{ item.level }}
        .Title.Nav-link-label.fw-500 {{ item.label }}
        .Title.Nav-link-lede.fw-300(v-if="item.lede") 
          span — 
          | {{ item.lede }}

      .Extract-large-inset
        //- p.Meta.fw-500.rm-b2 Contact
        .Meta.fw-400.c-text.rm-b1 Contact
        .Meta.fw-400.c-textLight.rm-b1(
          v-for="contact in navContacts"
          :key="contact.link"
        )
          //- a.Text.fs-text-sm.flh-loose(:href="contact.link" target="_blank") {{ contact.label }}
          a(:href="contact.link" target="_blank") {{ contact.label }}

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
        {
          label: "Intro",
          level: "0.",
          link: "/",
          exact: true
        },
        {
          label: "Blog",
          level: "1.",
          link: "/blog"
        },
        {
          label: "Essays",
          level: "2.",
          link: "/essays"
        },
        {
          label: "Projects",
          level: "3.",
          link: "/projects"
        },
        {
          label: "The Littoral Line",
          level: "4.",
          lede: "a mailing list",
          link: "/the-littoral-line"
        },
        {
          label: "About",
          level: "5.",
          link: "/about"
        }
        /* {
          label: "Should we team up?",
          level: "6",
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

/* .Nav-list {
  background-color: var(--c-neutral);
  border-top: 1px solid var(--c-rule);
} */

.Nav-link {
  background-image: none;
  padding-bottom: calc(1 * var(--rs-block-space));
  text-decoration: none;

  @media (--lg) {
    padding-bottom: calc(0.333 * var(--rs-block-space));
  }
}

.Nav-link:last-of-type {
  margin-bottom: calc(0.5 * var(--rs-block-space));

  @media (--lg) {
    margin-bottom: calc(0.5 * var(--rs-block-space));
  }
}

/* .Nav-link + .Nav-link {
  margin-top: var(--rs-block-space);
} */

.Nav-link,
.Nav-link:hover {
  background-image: initial;
}

.Nav-link-level {
  display: none;

  @media (--lg) {
    display: inline;
  }

  & span {
    display: inline-block;
    /* margin-left: calc(0.25 * var(--rs-space)); */
    text-align: center;
    width: 70px;
  }
}

.Nav-link-label {
  font-weight: 500;
}

.Nav-link-lede {
  display: none;
  line-height: 0.5;
  margin-left: 0.5rem;
  transform: translateY(0.7rem);

  @media (--md) {
    display: inline;
  }
}

.Nav-link-level,
.Nav-link-label {
  margin-bottom: 0;
}

.nuxt-link-active {
  /* show it as unselectable */
  cursor: initial;
  /* color: var(--c-link); */
  /* never make it red */
  color: var(--c-text) !important;
}

.nuxt-link-active .Nav-link-lede {
  /* padding-left: 2rem; */
  position: relative;
}

/* .nuxt-link-active .Nav-link-lede:after { */
.nuxt-link-active .Nav-link-label:after {
  /* content: "— you're here"; */
  content: "⚑";
  content: "✳";
  content: "*";
  display: inline-block;
  /* font-family: var(--ff-lede), var(--ff-stack-serif);
  font-weight: 400;
  font-style: italic;
  font-family: var(--ff-title), var(--ff-stack-sans);
  font-weight: 200;
  font-style: initial; */

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
  font-family: var(--ff-title), var(--ff-stack-sans);
  font-weight: 100; 
  left: -5rem;
  position: absolute;*/
  left: 0;
  top: -0.125rem;
  /* right: -0.125rem; */
  /* bottom: 12px; */
  position: relative;

  border-color: transparent;
  border-left-color: currentColor;
  border-style: solid;
  /* border-width: 9px; */
  border-width: 0.28125em;
  /* content: ""; */
  display: inline-block;
  height: 0;
  width: 0;
}
</style>
