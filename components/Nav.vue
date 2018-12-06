<template lang="pug">
  NavFixedOnScroll.Nav.Nav--animate.z-1.u-relative
    .Container
      NavList

</template>

<script>
import NavList from "~/components/NavList";
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
      this.$store.commit(
        "SET_MOBILENAV_VISIBILITY",
        !this.$store.state.isModalVisible
      );
      // this.navBar.static = this.$store.state.isModalVisible;
      /* to NavFixedOnScroll via $emit: */
      this.$emit("emitMobileNavIsToggled");
    }
  }
};
</script>
