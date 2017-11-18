<template lang="pug">
  c-navbar(:class="navbarClass")
</template>

<script>
import NavBar from "~/components/NavBar.vue";

const transitionScrollPos = 200;

export default {
  name: "NavBarFixed",

  components: {
    "c-navbar": NavBar
  },

  computed: {
    navbarClass() {
      return [
        {
          hidden: this.isNavHidden
        }
      ];
    }
  },

  data() {
    return {
      previousScrollPos: 0,
      windowIsScrolled: false,
      isNavHidden: true
    };
  },

  mounted() {
    if (window.scrollY > transitionScrollPos) {
      this.windowIsScrolled = true;
    }

    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll(event) {
      const scrollPos = window.scrollY;
      const previousScrollPos = this.previousScrollPos;
      this.previousScrollPos = scrollPos;
      const scrolledDown = scrollPos > previousScrollPos;

      this.isNavHidden = scrolledDown || scrollPos < 200;

      this.windowIsScrolled = scrollPos > transitionScrollPos;
    },

    handleNavToggle() {
      this.$store.commit(
        "SET_MODAL_VISIBILITY",
        !this.$store.state.isMobileNavVisible
      );
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/vars.css";

.Navbar {
  background-color: rgba(253, 253, 253, 0.96);
  position: fixed;
  top: 0;
  width: 100%;
}

.Navbar.hidden {
  opacity: 0;
  transform: translateY(-100%);
  transition: background-color var(--transition-duration),
    opacity var(--transition-duration), transform 0s var(--transition-duration);
}
</style>
