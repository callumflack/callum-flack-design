<template lang="pug">
  nuxt-link(
    :class="classes"
    :to="link"
    :exact="exact"
  )
    span {{ label }}
</template>

<script>
export default {
  name: "NavLink",
  props: {
    label: String,
    year: String,
    link: String,
    block: Boolean,
    external: Boolean,
    exact: Boolean
  },
  computed: {
    classes() {
      return [
        "Nav-link",
        {
          "Nav-link--block": this.block
        }
      ];
    }
    /* currentPage() {
      let classes = ["link"];
      if (this.link === this.$store.state.currentPage) {
        classes.push("is-active");
      } else if (this.$store.state.isMobileNavVisible) {
        classes.push("");
      } else {
        classes.push("");
      }
      return classes.join(" ");
    } */
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";
</style>