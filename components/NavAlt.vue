<template lang="pug">
  .Container
    .Block--sandwich
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
      .u-sm-size5of12.Grid-cell--center.u-marginT4(v-if="newsletter")
        p.TypeScope-reset.u-textCenter
          | Ps. I write a letter to my internet friends every week about design and technology. You should sign up:
        c-newsletter.u-marginT3
    
</template>


<script scoped>
import Logo from "~/components/Logo.vue";
import NavLink from "~/components/NavLinkAlt.vue";
import NavButton from "~/components/NavButton.vue";
import Newsletter from "~/components/FormNewsletter.vue";

export default {
  name: "nav-bottom",
  components: {
    "c-logo": Logo,
    "c-navlink": NavLink,
    "c-navbutton": NavButton,
    "c-newsletter": Newsletter
  },
  props: {
    currentPage: String,
    starred: Boolean,
    divider: Boolean,
    newsletter: Boolean
  },
  computed: {
    // plainNewsletterButton: true,
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
          label:
            "hi<span class='icon icon-at'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 34'><path d='M24.1,24.26a11,11,0,0,1-10.16,6.6c-4.56,0-7.44-1.44-9.28-4.68a15.44,15.44,0,0,1-1.72-7.4c0-8.88,5.48-15.64,12.6-15.64,5.4,0,9.52,4.72,9.52,10.88,0,5.48-3.48,10.6-7.12,10.6a2.48,2.48,0,0,1-2.56-2c-1.28,1.6-2.08,2.12-3.12,2.12C10,24.74,8.38,22.38,8.38,19c0-4.8,3.08-9.64,6.08-9.64a3.08,3.08,0,0,1,2.88,2.12l.4-1.48h2.8L18,20.18a4.68,4.68,0,0,1-.2.8,4.62,4.62,0,0,0-.08.64.73.73,0,0,0,.72.76c2.12,0,4.36-4.28,4.36-8.36,0-4.92-3.16-8.84-7.16-8.84-5.84,0-10.2,5.76-10.2,13.52,0,6.52,3.08,10,8.68,10a9,9,0,0,0,7.84-4.48ZM16.1,16a6.32,6.32,0,0,0,.32-1.72c0-1.28-.56-2.16-1.32-2.16-1.68,0-3.56,4-3.56,7.44,0,1.68.52,2.64,1.36,2.64A1.92,1.92,0,0,0,14.46,21a7.32,7.32,0,0,0,1-2.68Z'/></svg></span>patternworks.com.au",
          link: "mailto:hi@patternworks.com.au"
        },
        {
          label: "+610 408 767 540",
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
