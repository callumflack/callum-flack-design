<template lang="pug">
  NavFixedOnScroll.Nav.Nav--animate.u-relative
    //- .Container.Container--lg
    .GutterInsetX
      NavList

</template>

<script>
import IconBase from "~/components/IconBase.vue";
import IconHamburger from "~/components/icons/IconHamburger.vue";
import IconHamburgerClose from "~/components/icons/IconHamburgerClose.vue";
import NavList from "~/components/NavList2";
/* import NavMobile from "~/components/NavMobile"; */
import NavFixedOnScroll from "~/components/NavFixedOnScroll.vue";

export default {
  components: {
    NavList,
    NavFixedOnScroll
  },
  computed: {
    isMobileNavVisible: function() {
      return this.$store.state.isMobileNavVisible;
    }
  },
  methods: {
    handleNavToggle() {
      this.$store.commit("SET_MOBILENAV_VISIBILITY", !this.$store.state.isMobileNavVisible);
      // this.navBar.static = this.$store.state.isMobileNavVisible;
      /* to NavFixedOnScroll via $emit: */
      this.$emit("emitMobileNavIsToggled");
    }
  }
};
</script>

<style scoped>
.Nav {
  backface-visibility: hidden;
  /* background-color: var(--c-white); */
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
</style>