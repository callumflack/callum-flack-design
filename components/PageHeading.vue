<template lang="pug">
  div(:class="blockClasses")
    .container
      div(:class="scopeClasses")
        h1.heading(v-if="heading", v-html="heading")
        p.text.m-t0.m-b0(v-if="lede", v-html="lede")
</template>

<script>
export default {
  name: "page-heading",
  props: {
    heading: String,
    lede: String,
    projectSpace: Boolean,
    projectScope: Boolean
  },
  computed: {
    blockClasses() {
      return [
        "block--pt7",
        {
          "block--pb7": this.projectSpace,
          "block--pb5": !this.projectSpace
        }
      ];
    },
    scopeClasses() {
      return [
        {
          "project-scope": this.projectScope,
          "journal-scope": !this.projectScope
        }
      ];
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";
</style>
