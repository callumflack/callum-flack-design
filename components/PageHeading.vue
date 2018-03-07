<template lang="pug">
  div(:class="blockClasses")
    .container.text-scope
      h1.title(v-if="heading", v-html="heading")
      h2.text.m-t0.m-b0(v-if="lede", v-html="lede")
</template>

<script>
export default {
  name: "page-heading",
  props: {
    heading: String,
    lede: String,
    project: Boolean
  },
  computed: {
    blockClasses() {
      return [
        "block--pt7",
        "block--pb5",
        {
          "block--pb7": this.project
        }
      ];
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";
</style>
