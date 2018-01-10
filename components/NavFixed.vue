<template lang="pug">
.Fixed
  .Column
    .Inner
      nav.Title.Text--meta.u-flex.u-flexJustifyBetween
        c-navlink(
          v-for="item in navLinks"
          :key="item.label"
          :label="item.label"
          :link="item.link"
          :currentPage="currentPage"
          :exact="item.exact"
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
  data() {
    return {
      navLinks: [
        {
          label: "Patternworks",
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
      ]
    };
  }
};
</script>


<style scoped>
@import "../assets/styles/vars.css";

.Fixed {
  padding: var(--s3);
  position: fixed;
  width: 100%;
  z-index: 4;

  @media (--small-viewport) {
    padding: var(--s3) 0;
  }
}

hr {
  background-color: var(--color-text);
  height: 1px;
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
</style>
