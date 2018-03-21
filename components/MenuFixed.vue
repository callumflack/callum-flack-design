<template lang="pug">
  .fixed-menu.p-y4(:class="navBar")
</template>

<script scoped>
/*

  Taken from:
  https://blog.christopherianmurphy.com/2017/05/expand-collapse-navbar/
  https://codepen.io/Splode/pen/WjQewW

*/

export default {
  name: "fixed-menu",
  data() {
    return {
      // Classes assigned to nav on scroll
      navBar: {
        collapse: false,
        open: false
      },
      // Used to keep track of scroll position
      scrollState: 0
      // Menu list
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
    window.addEventListener("scroll", () => {
      this.scrollDetect(this.scrollHome, this.scrollDown, this.scrollUp);
    });
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";

.fixed-menu {
  position: fixed;
  top: 0;
  width: 100%;
  height: 73px;
}

.collapse {
  animation: collapse 0.5s ease forwards;
}

.open {
  animation: open 0.5s ease forwards;
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
</style>
