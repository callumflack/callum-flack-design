<template lang="pug">
  NavFixedOnScroll.Nav.Nav--animate.z-1.u-relative
    //- hr.NavRule.bg-text
    //- .GutterInsetX
    .Container.Container--lg
      NavList

</template>

<script>
import NavList from "~/components/NavList2";
import NavFixedOnScroll from "~/components/NavFixedOnScroll.vue";

export default {
  components: {
    NavList,
    NavFixedOnScroll
  },
  computed: {
    isModalVisible: function() {
      return this.$store.state.isModalVisible;
    }
  },
  methods: {
    handleNavToggle() {
      this.$store.commit("SET_MOBILENAV_VISIBILITY", !this.$store.state.isModalVisible);
      // this.navBar.static = this.$store.state.isModalVisible;
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
}

.NavRule {
  height: 3px;
}
</style>