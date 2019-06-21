<template lang="pug">
  div(@click="close", :class="modalClasses")
    .Page
      .Container.h-auto
        //- .f.f-childrenCenter
        .Extract-hero.u-relative
          .AspectRatio.AspectRatio--8x5
            .AspectRatio-object.bg-text
              iframe(
                src="https://player.vimeo.com/video/261113972?background=1"
                width="100%"
                height="100%"
                frameborder="0"
                allowTransparency="true"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen>
              )
          .toggle(@click="close")
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
        /* "Modal f f-childrenCenter", */
        "Modal",
        {
          "is-hidden": !this.isVisible,
          "is-transitioning": this.delayTransition
        }
      ];
    },
    isVisible: function() {
      return this.$store.state.isModalVisible;
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
  transform: translate(0, 0);
  transition: opacity 500ms var(--thisalso), transform 0s 0s;
  z-index: 99;

  &:hover,
  &:focus {
    /* cursor: url("../static/images/icon-close.png"), auto; */
    cursor: pointer;
  }

  & > div {
    height: 100vh;
  }
}

.Modal.is-hidden {
  opacity: 0;
  transform: translate(100vw, 100vh);
  transition: opacity 150ms var(--thisalso);
}

.Modal,
.Modal.is-transitioning {
  /* transition: opacity 150ms var(--thisalso), transform 150ms var(--thisalso); */
}

/* 

  modal theme

 */

.Modal {
  background-color: rgba(230, 47, 13, 0.96);
  background-color: var(--c-highlight);
  background-color: var(--c-border);
  background-color: var(--c-bg);
  background-color: rgba(0, 0, 0, 0.96);
}

.Modal /deep/ {
  & .Text {
    background-image: linear-gradient(var(--c-border), var(--c-border)),
      linear-gradient(var(--c-border), var(--c-border)), linear-gradient(currentColor, currentColor);
  }
}

/* 
  
  fake close icon

 */

.toggle {
  cursor: pointer;
  position: fixed;
  right: calc(0.5 * var(--grid-gutter));
  top: calc(0.5 * var(--grid-gutter));
  z-index: 100;

  @media (--sm) {
    /* right: calc(-0.25 * var(--grid-gutter));
    top: calc(-1.75 * var(--grid-gutter)); */
  }
  @media (--mdl) {
    position: absolute;
    right: calc(-2 * var(--grid-gutter));
    top: calc(-2 * var(--grid-gutter));
  }
}

.icon-close {
}
.icon-close svg {
  fill: var(--c-bg);
  height: calc(0.75 * 44px);
  width: calc(0.75 * 44px);

  @media (--sm) {
    height: 44px;
    width: 44px;
  }
}
</style>
