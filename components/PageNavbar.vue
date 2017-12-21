<template lang="pug">
header.Navbar
  .Column
    .Container
      .Inner
        //- .InnerSpace
          h3.Title(v-html="section")
        .Space
          //- h3.Text--meta.Text--medium.SubSpace(v-if="title", v-html="title")
          h3.Title.SubSpace(v-if="title", v-html="title")
          //- p.Massive(v-if="massive", v-html="massive")
          h1.Massive.u-marginT3(v-if="massive", v-html="massive")
          p.Subtitle.u-marginT3(v-if="lede", v-html="lede")
</template>


<script scoped>
import Logo from "~/components/Logo.vue";

export default {
  name: "page-navbar",
  components: {
    "c-logo": Logo
  },
  props: {
    section: String,
    massive: String,
    title: String,
    lede: String
  },
  computed: {
    isVisible: function() {
      return this.$store.state.isMobileNavVisible;
    }
  },

  methods: {
    handleNavToggle() {
      this.$store.commit("SET_MODAL_VISIBILITY", !this.$store.state.isMobileNavVisible);
    },

    hideNav() {
      this.$store.commit("SET_MODAL_VISIBILITY", false);
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/vars.css";

.Navbar {
  background-color: transparent;
  opacity: 1;
  position: relative;
  transform: translateY(0);
  transition: opacity var(--transition-duration),
    transform 250ms var(--transition-duration);
  width: 100%;
  z-index: 1;

  &.hidden {
    opacity: 0;
    transform: translateY(-100%);
    transition: opacity var(--transition-duration),
      transform 250ms var(--transition-duration);
  }
}

.Navbar a {
  white-space: initial !important;
  z-index: 99;
}

.SubSpace {
  margin-bottom: var(--s3);

  @media (--small-viewport) {
    margin-bottom: var(--s4);
  }
}

.nuxt-link-active {
}

.nuxt-link-exact-active {
}
</style>
