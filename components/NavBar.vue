<template lang="pug">
  
  nav.Nav
    .Container
      .Nav-inner.Meta.u-flexJustifyBetween
        div
          nuxt-link(to='/') Page title
        div
          a(href="#", @click.prevent="handleNavToggle") Menu
          //- button.icon-wrap.-btn
            span.icon
              //- svg(xmlns="http://www.w3.org/2000/svg", version="1.1", x="0", y="0", width="30", height="16", viewbox="0 0 30 16", xml:space="preserve")
              //-   rect(width="30", height="1.5")
              //-   rect(y="7", width="30", height="1.5")
              //-   rect(y="14", width="30", height="1.5")
              svg(xmlns="http://www.w3.org/2000/svg", version="1.1", x="0", y="0", width="30", height="10", viewbox="0 0 30 10", xml:space="preserve")
                rect(width="30", height="1.5")
                rect(y="8", width="30", height="1.5")

</template>
  

<script scoped>
export default {
  name: "nav-top-alt",
  computed: {
    isVisible: function() {
      return this.$store.state.isMobileNavVisible;
    }
  },

  methods: {
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

.Nav {
  background-color: rgba(253, 253, 253, 0.96);
  opacity: 1;
  padding-top: 3rem;
  transform: translateY(0);
  transition: opacity var(--transition-duration),
    transform 250ms var(--transition-duration);
  z-index: 99;

  &.hidden {
    opacity: 0;
    transform: translateY(-100%);
    transition: opacity var(--transition-duration),
      transform 250ms var(--transition-duration);
  }
}

.Nav-inner {
  border-bottom: 1px solid var(--color-text);
  display: flex;
  padding-bottom: var(--s3);
}

.-btn {
  background: 0 0;
  border: none;
  cursor: pointer;
  -webkit-appearance: none;
  transition: color 400ms ease, background-color 400ms ease,
    border-color 400ms ease;

  &:focus {
    outline: none;
  }
}

.icon-wrap {
  cursor: pointer;
  display: inline-block;
  margin: -20px;
  padding: 20px;
}

.icon {
  cursor: pointer;
  display: inline-block;
  height: 10px;
  line-height: 1;
  position: relative;
  text-align: center;
  transform: translateY(2px);
  width: 30px;
}

.icon svg {
  fill: #121212;
  transition: fill 400ms ease;
}

.nuxt-link-active {
}

.nuxt-link-exact-active {
}
</style>
