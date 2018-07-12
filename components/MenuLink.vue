<template lang="pug">
  a(
    v-if="targetBlank"
    href="link"
    target="_blank"
  )
  nuxt-link(
    v-else
    :class="currentPage"
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
    link: String,
    external: Boolean,
    targetBlank: Boolean,
    exact: Boolean
  },
  computed: {
    currentPage() {
      let classes = ["link"];
      if (this.link === this.$store.state.currentPage) {
        classes.push("is-active");
      } else if (this.$store.state.isMobileNavVisible) {
        classes.push("");
      } else {
        classes.push("");
      }
      return classes.join(" ");
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";
</style>