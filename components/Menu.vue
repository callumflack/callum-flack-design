<template lang="pug">
  .FixedMenu(:class="navBar")
    .container
      //- nav.Nav
      nav.Nav.u-flex.u-flexJustifyBetween
        div
          c-menulink.heading(
            label="CFd"
            link="/"
            exact
          )
        div
          c-menulink.heading(
            v-for="item in menuLinks"
            :key="item.label"
            :label="item.label"
            :year="item.year"
            :link="item.link"
            :currentPage="currentPage"
            :exact="item.exact"
          )
</template>

<script scoped>
import MenuLink from "~/components/MenuLink.vue";

/*

  Fixed menu functions taken from:
  https://blog.christopherianmurphy.com/2017/05/expand-collapse-navbar/
  https://codepen.io/Splode/pen/WjQewW

*/

export default {
  name: "fixed-menu",
  components: {
    "c-menulink": MenuLink
  },
  props: {
    currentPage: String,
    index: Boolean
  },
  data() {
    return {
      // Classes assigned to nav on scroll
      navBar: {
        collapse: false,
        open: false
      },
      // Used to keep track of scroll position
      scrollState: 0,
      // Menu list
      menuLinks: [
        // {
        //   label: "cFd",
        //   link: "/",
        //   exact: true
        // },
        {
          label: "Work",
          link: "/work"
        },
        {
          label: "Blog",
          link: "/journal"
        },
        {
          label: "About",
          link: "/about"
        }
      ]
    };
  },
  methods: {
    scrollDetect(home, down, up) {
      // Current scroll position
      const currentScroll = this.scrollTop();
      if (this.scrollTop() === 0) {
        home();
      } else if (currentScroll > this.scrollState) {
        down();
      } else {
        up();
      }
      // Set previous scroll position
      this.scrollState = this.scrollTop();
    },
    // Returns current scroll position
    scrollTop() {
      return window.scrollY;
    },
    // Called when scroll is in initial position
    scrollHome() {},
    // Called when scrolled down
    scrollDown() {
      this.navBar.collapse = true;
      this.navBar.open = false;
    },
    // Called when scolled up
    scrollUp() {
      this.navBar.collapse = false;
      this.navBar.open = true;
    }
  },
  created() {
    // https://nuxtjs.org/faq/window-document-undefined
    if (process.browser) {
      window.addEventListener("scroll", () => {
        this.scrollDetect(this.scrollHome, this.scrollDown, this.scrollUp);
      });
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";

.FixedMenu {
  /* background-color: var(--c-bg); */
  /* height: 73px; */
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}

.collapse {
  animation: collapse 0.5s ease forwards;
}

.open {
  animation: open 0.5s ease forwards;
  background-color: rgba(253, 253, 253, 0.96);
  background-color: rgba(255, 255, 255, 0.96);
}

@keyframes collapse {
  from {
    opacity: 1;
    top: 0;
  }
  to {
    opacity: 0;
    top: -122px;
  }
}

@keyframes open {
  from {
    opacity: 0;
    top: -122px;
  }
  to {
    opacity: 1;
    top: 0;
  }
}

.Nav {
  border-bottom: 0.15rem solid var(--c-text);
  border-bottom: 1px solid var(--c-text);
  padding-bottom: calc(0.5 * var(--s-3));
  padding-top: var(--s-4);
  /* padding-bottom: var(--s-4); */

  font-size: calc((16 / (var(--s-text-unit) * 16)) * var(--s-nav));
}

.nav-space {
  margin-bottom: calc(1.5 * var(--s-3)) !important;

  @media (--md) {
    margin-bottom: calc(1.5 * var(--s-4)) !important;
  }
}

.nav-mobile-layout {
  @media (max-width: 1135px) {
    align-items: flex-end;
    display: flex;
    justify-content: flex-end;
    text-align: right;

    & .block--py7 {
      padding-bottom: var(--grid-gutter);
    }

    & a + a {
      margin-top: 4px;
    }
  }
  @media (min-width: 1136px) and (max-width: 1281px) {
    align-items: flex-start;
    display: flex;
    left: calc((100 - 90) * 0.5vw);
    right: auto;
  }
}
</style>
