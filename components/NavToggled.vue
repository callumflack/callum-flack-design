<template lang="pug">
  div(@click="close", :class="modalClasses")
    nav-list
    // .toggle
      span.u-icon.icon-close
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27">
          <g><rect y="12.74" width="27" height="1.5" transform="translate(13.51 32.57) rotate(-135)"/><rect y="12.74" width="27" height="1.5" transform="translate(-5.58 13.5) rotate(-45)"/></g>
        </svg>

</template>

<script>
import NavList from "~/components/NavList.vue";

export default {
  components: {
    NavList
  },
  computed: {
    modalClasses() {
      return [
        "Modal",
        {
          "is-hidden": !this.isVisible,
          "is-transitioning": this.delayTransition
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

<style lang="postcss" scoped>
@import "../assets/styles/variables.css";

.Modal {
  bottom: 0;
  left: 0;
  opacity: 1;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateY(0);
  transition: opacity var(--transition-duration), transform 0s 0s;
  z-index: 99;

  &:hover,
  &:focus {
    cursor: url("../static/images/icon-close.png"), auto;
  }

  & > div {
    height: 100vh;
  }

  /* theme */
  @media (--mo) {
    padding-top: calc(0.75 * var(--responsive-space));
  }
}

.Modal.is-hidden {
  opacity: 0;
  transform: translateY(100vh);
  transition: opacity var(--transition-duration), transform 0s var(--transition-duration);
}

.Modal.is-transitioning {
  transition: opacity var(--transition-duration) var(--transition-delayed),
    transform 0s var(--transition-delayed);
}

/* 

  modal theme

 */

.Modal {
  background-color: rgba(230, 47, 13, 0.96);
  background-color: var(--c-highlight);
  background-color: var(--c-border);
}

.Modal /deep/ {
  /* & .Nav-link:hover,
  & .Nav-list .nuxt-link-active {
    color: var(--c-bg);
  } */

  & .Text {
    background-image: linear-gradient(var(--c-border), var(--c-border)),
      linear-gradient(var(--c-border), var(--c-border)), linear-gradient(currentColor, currentColor);
  }
}

/* 
  
  fake close icon

 */

.toggle {
  position: fixed;
  right: calc(0.5 * var(--grid-gutter));
  top: calc(0.5 * var(--grid-gutter));
  z-index: 100;

  @media (--sm) {
    right: var(--grid-gutter);
    top: var(--grid-gutter);
  }
  @media (max-width: 1135px) {
    display: none;
  }
}

.icon-close svg {
  height: calc(0.75 * 27px);
  width: calc(0.75 * 27px);

  @media (--sm) {
    height: 27px;
    width: 27px;
  }
}
</style>
