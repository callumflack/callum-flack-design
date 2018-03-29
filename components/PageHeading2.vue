<template lang="pug">
  div(:class="blockClasses")
    .container.container--sm
      h1.Super(
        v-if="title"
        v-html="title"
      )
      h1.Title(
        v-if="heading"
        v-html="heading"
      )
      h2.Text.m-t0.m-b0(v-if="lede", v-html="lede")
</template>

<script>
export default {
  name: "page-heading",
  props: {
    title: String,
    heading: String,
    lede: String,
    projectSpace: Boolean,
    projectScope: Boolean
  },
  computed: {
    blockClasses() {
      return [
        "block--pb7",
        "block--matchFixedMenu",
        {
          // "block--matchFixedMenu": this.projectSpace,
          // "block--pb5": !this.projectSpace,
          x: !this.projectSpace
        }
      ];
    },
    scopeClasses() {
      return [
        {
          TypeScope: this.projectScope,
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
