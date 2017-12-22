<template lang="pug">
  .Column
    .Container
      .Inner
        .Space
          nav.Title
            c-navlink(
              v-for="item in navLinks",
              :key="item.label",
              :label="item.label",
              :link="item.link",
              :currentPage="currentPage"
              :exact="item.exact"
            )
          .Text.u-marginT4
            c-navlink(
              v-for="item in navContacts",
              :key="item.label",
              :label="item.label",
              :link="item.link",
              exact
            )
          //- .Text--small.u-marginT2
            c-navlink(
              v-for="item in navButtons",
              :key="item.label",
              :label="item.label",
              :link="item.link",
            )
</template>


<script scoped>
import Logo from "~/components/Logo.vue";
import NavLink from "~/components/NavLink.vue";
import NavButton from "~/components/NavButton.vue";

export default {
  name: "nav-bottom",
  components: {
    "c-logo": Logo,
    "c-navlink": NavLink,
    "c-navbutton": NavButton
  },
  props: {
    currentPage: String,
    starred: Boolean,
    divider: Boolean
  },
  data() {
    return {
      navLinks: [
        {
          label: "Index",
          link: "/",
          exact: true
        },
        {
          label: "Work",
          link: "/work"
        },
        {
          label: "Journal",
          link: "/journal/designers-should-code"
        },
        {
          label: "About",
          link: "/about"
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

hr {
  background-color: var(--color-text);
  height: 1px;
  /* margin-bottom: calc(1.333 * var(--s4)); */
  margin-bottom: calc(0.85 * var(--s5));

  @media (--small-viewport) {
    width: 50%;
  }
  @media (--medium-viewport) {
    margin-bottom: var(--s6);
  }
  @media (--large-viewport) {
    margin-bottom: var(--s7);
  }
}

.Pin {
  align-items: center;
  background-color: var(--color-text);
  display: flex;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100vw;
}

.Massive a + a,
.Subtitle a + a,
.Title a + a {
  /* padding-top: var(--s3); */
}

.Text a + a {
  padding-top: var(--s1);

  @media (--small-viewport) {
    padding-top: 0;
  }
}

.NewsletterWrapper {
  margin-top: 1rem;
  margin-bottom: 3rem;
}
</style>
