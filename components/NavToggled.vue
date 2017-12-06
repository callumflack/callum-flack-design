<template lang="pug">
  div(@click="close", :class="navClass")
    c-nav
</template>

<script>
import Navbar from "~/components/NavBar.vue";
import Nav from "~/components/Nav.vue";

export default {
  name: "NavToggled",

  components: {
    "c-navbar": Navbar,
    "c-nav": Nav
  },

  computed: {
    navClass() {
      return [
        "Modal",
        {
          hidden: !this.isVisible, // u-hiddenVisually?
          "delay-transition": this.delayTransition
        }
      ];
    },

    isVisible: function() {
      return this.$store.state.isMobileNavVisible;
    },

    currentPage: function() {
      return this.$store.state.currentPage;
    }
  },

  data() {
    return {
      navLinks: [
        {
          label: "The home page",
          link: "/"
        },
        {
          label: "The history",
          link: "/the-history"
        },
        {
          label: "The factory",
          link: "/the-factory"
        },
        {
          label: "The process",
          link: "/the-process"
        },
        {
          label: "The boat builders",
          link: "/the-boat-builders"
        },
        {
          label: "The designs",
          link: "/the-designs"
        },
        {
          label: "The location",
          link: "/contact-us"
        }
      ],
      delayTransition: false
    };
  },

  methods: {
    applyDelayTransition(event) {
      if (event.target.getAttribute("href") === this.$route.path) {
        return;
      }

      this.delayTransition = true;

      setTimeout(() => {
        this.delayTransition = false;
      }, 1000);
    },

    close() {
      this.$store.commit("SET_MODAL_VISIBILITY", false);
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/vars.css";

.Modal {
  background-color: #fff;
  bottom: 0;
  left: 0;
  opacity: 1;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateY(0);
  transition: opacity var(--transition-duration), transform 0s 0s;
  z-index: 15;

  /* account for the navbar */
  padding-top: 98px;
}

.Modal.hidden {
  opacity: 0;
  transform: translateY(100vh);
  transition: opacity var(--transition-duration), transform 0s var(--transition-duration);
}

.Modal.delay-transition {
  transition: opacity var(--transition-duration) var(--transition-delayed),
    transform 0s var(--transition-delayed);
}
</style>
