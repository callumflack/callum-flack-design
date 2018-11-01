<template lang="pug">
  div(:class="navBar")
    slot
</template>

<script>
/*

  Fixed menu functions taken from:
  https://blog.christopherianmurphy.com/2017/05/expand-collapse-navbar/
  https://codepen.io/Splode/pen/WjQewW

*/
export default {
  components: {},
  props: {},
  data() {
    return {
      // Classes assigned to nav on scroll
      navBar: {
        collapse: false,
        open: false,
        static: false
      },
      // Used to keep track of scroll position
      scrollState: 0
    };
  },
  /* computed: {
    fixMobileNav() {
      // could also add class to body with
      // height: 100%; overflow:hiddden?
      return this.$store.state.isModalVisible && `animation:initial;`;
    }
  }, */
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
    scrollHome() {
      this.navBar.open = false;
    },

    // Called when scrolled down
    scrollDown() {
      this.navBar.collapse = true;
      this.navBar.open = false;
    },

    // Called when scrolled up
    scrollUp() {
      this.navBar.collapse = false;
      this.navBar.open = true;
    }
  },
  watch: {
    $route(to, from) {
      this.navBar.collapse = false;
      this.navBar.open = false;
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
.collapse {
  animation: collapse 0.15s ease-in-out 0.4s forwards;
}

.open {
  animation: open 0.5s ease-in-out forwards;
  /* box-shadow: 0 9px 25px 0 rgba(0, 0, 0, 0.25), 0 19px 70px 0 rgba(0, 0, 0, 0.1); */
  /* box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15); */
  /* border-bottom: 1px solid var(--c-text); */
}

.static {
  animation: initial;
}

@keyframes collapse {
  from {
    opacity: 1;
    /* background-color: var(--c-white); */
    /* border-bottom: 1px solid transparent; */
  }
  to {
    opacity: 0;
    /* background-color: transparent; */
    /* border-bottom: 1px solid transparent; */
  }
}

@keyframes open {
  from {
    opacity: 0;
    background-color: transparent;
    border-bottom: 1px solid transparent;
  }
  to {
    opacity: 1;
    background-color: var(--c-bg);
    border-bottom: 1px solid var(--c-text);
  }
}
</style>
