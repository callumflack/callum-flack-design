<template lang="pug">
  .Block--sandwich
    .Container
      //- hr.Block--quarter
      .Block--half
        ul.Nav-menu
          //- li
            a(href="/") #[span.Title Index] #[span.Text.--italic Start again from Home]
          li
            a(href="/work") #[span.Title Work] #[span.Text.--italic VJ Ray Website]
          //- li
            a(href="") #[span.Title Method] #[span.Text.--italic How to create value]
          li
            a(href="") #[span.Title Journal] #[span.Text.--italic Should designers code?]
          li
            a(href="/about") #[span.Title About] #[span.Text.--italic Since 1998 and counting]
          li
            a(href="") #[span.Title Contact] #[span.Text.--italic Working from Cairns, Australia]
      .Block--quarter
        .Nav-buttons.Meta.--medium.u-textCenter
          a.Button.Button--transparent(href="#") Email
          a.Button.Button--transparent(href="#") Twitter
          a.Button.Button--transparent(href="#") Github
          a.Button.Button--transparent(href="#") Instagram
          a.Button.Button--transparent(href="#") AngelList
          a.Button.Button--transparent(href="#") LinkedIn
      .Meta.--medium.u-textCenter
        | © 2018 Callum Flack

          
</template>


<script scoped>
import NavLink from "~/components/NavLink.vue";

export default {
  name: "nav-bottom",
  components: {
    NavLink
  },
  props: {
    currentPage: String
  },
  data() {
    return {
      plainNewsletterButton: true,

      navLinks: [
        {
          label: "Work",
          link: "/work"
        },
        {
          label: "Journal",
          link: "/journal"
        },
        {
          label: "About",
          link: "/about"
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

.Nav-menu a {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  position: relative;

  &:before {
    background-image: url("/static/images/dot.svg");
    background-repeat: repeat-x;
    background-size: auto 3px;
    bottom: 0;
    content: "";
    position: absolute;
    top: 63%;
    width: 100%;
    z-index: -1;
  }

  & span {
    background-color: var(--color-bg);
  }

  & span:first-child {
    padding-right: 0.33em;
  }

  & span:last-child {
    padding-left: 0.33em;
    transform: translateY(0.575em);
  }
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
