<template lang="pug">
  .Container
    .Block--halfSandwich
      .Block--halfSandwich.u-textCenter(v-if="divider")
        c-logo
      nav.Title.u-textCenter
        a.Button.Button--transparent(href="#", @click.prevent="handleNavToggle", v-if="starred")
          span.icon.icon-logo
            c-logo
        c-navlink(
          v-for="item in navLinks",
          :key="item.label",
          :label="item.label",
          :link="item.link",
          :currentPage="currentPage"
          :exact="item.exact"
        )
      .Title.u-textCenter
        c-navbutton(
          v-for="item in navContacts",
          :key="item.label",
          :label="item.label",
          :link="item.link",
        )
      .Title.u-textCenter
        c-navbutton(
          v-for="item in navButtons",
          :key="item.label",
          :label="item.label",
          :link="item.link",
        )
</template>


<script scoped>
import Logo from "~/components/Logo.vue";
import NavLink from "~/components/NavLinkAlt.vue";
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
          lede: "Digital craftsmanship",
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
        }
      ],

      navContacts: [
        {
          label: "callum@okok.design",
          link: "mailto:hi@patternworks.com.au"
        },
        {
          label: "+61 408 767 540",
          link: "tel:610-408-767-540"
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

.Nav {
  position: relative;
  top: 0;
}

.Nav-menu {
  margin: 0;
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
