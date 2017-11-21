<template lang="pug">
  .Block--sandwichPadding
    .Container
      .Block--quarter
        ul.Nav-menu.u-marginT0
          c-navlink(
            v-for="item in navLinks",
            :key="item.label",
            :label="item.label",
            :link="item.link",
            :lede="item.lede",
            :currentPage="currentPage"
            :exact="item.exact"
          )
      .Nav-buttons.Meta.--medium.u-textCenter
        c-navbutton(
          v-for="item in navButtons",
          :key="item.label",
          :label="item.label",
          :link="item.link",
        )
</template>


<script scoped>
import NavLink from "~/components/NavLink.vue";
import NavButton from "~/components/NavButton.vue";

export default {
  name: "nav-bottom",
  components: {
    "c-navlink": NavLink,
    "c-navbutton": NavButton
  },
  props: {
    currentPage: String
  },
  computed: {
    // plainNewsletterButton: true,
  },
  data() {
    return {
      navLinks: [
        {
          label: "Overview",
          link: "/",
          lede: "bold, beautiful & simple",
          exact: true
        },
        {
          label: "Work",
          link: "/work",
          lede: "VJ Ray Website"
        },
        {
          label: "Journal",
          link: "/journal",
          lede: "Should designers code?"
        },
        {
          label: "About",
          link: "/about",
          lede: "A designer who codes"
        },
        {
          label: "Contact",
          link: "/contact",
          lede: "Located in Cairns, Australia"
        }
      ],

      navButtons: [
        {
          label: "Email",
          link: "mailto:hi@patternworks.com.au"
        },
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
          label: "© 2018 Callum Flack"
        }
      ]
    };
  }
};
</script>


<style scoped>
@import "../assets/styles/vars.css";

.Nav {
  position: relative;
  top: 0;
}

.Nav-menu ul {
  margin-bottom: 0;
}

.Nav-menu li + li {
  margin-top: var(--s4);
}

.Nav-buttons {
  & a {
    margin-left: 0;
  }
}

.NewsletterWrapper {
  margin-top: 1rem;
  margin-bottom: 3rem;
}
</style>
