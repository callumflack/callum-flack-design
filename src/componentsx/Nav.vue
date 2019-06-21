<template lang="pug">
  headroom(:speed="500")
    .Container
      NavList

</template>

<script>
import { headroom } from "vue-headroom";
import NavList from "~/components/NavList";

/*  */
export default {
  components: {
    headroom,
    NavList
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

<style>
.headroom {
  background-color: rgba(255, 255, 255, 0.96);
  background-color: rgba(251, 250, 248, 0.96);
  /* background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.96) 90%,
    transparent
  ); */
}
</style>

