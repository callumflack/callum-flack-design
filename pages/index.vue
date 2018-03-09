<template lang="pug">
  c-nav
</template>

<script>
import Nav from "~/components/Nav.vue";

export default {
  layout: "index",
  components: {
    "c-nav": Nav
  }
};
</script>

<style>
@import "../assets/styles/variables.css";
</style>
