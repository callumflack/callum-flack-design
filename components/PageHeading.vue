<template lang="pug">
  div(:class="blockClasses")
    .Container
      h1.Title.Title--xl.u-textCenter.u-lg-size10of12.m-xA(
        v-if="titleXl"
        v-html="titleXl"
        :style="titleColor"
        :class="titleClasses"
      )
      h1.Title.u-textCenter.u-lg-size10of12.m-xA(
        v-if="title"
        v-html="title"
        :style="titleColor"
        :class="titleClasses"
      )
      h2.Title--lede.u-textCenter.m-t0.m-b0(
        v-if="lede"
        v-html="lede"
      )
</template>

<script>
export default {
  name: "page-heading",
  props: {
    titleXl: String,
    title: String,
    titleColor: String,
    titleHighlight: Boolean,
    lede: String,
    pageSpace: Boolean
  },
  computed: {
    blockClasses() {
      return [
        "block--matchFixedMenuTop",
        {
          "block--matchFixedMenuBottom": !this.pageSpace,
          "figure--bottomSpace": this.pageSpace
        }
      ];
    },
    titleClasses() {
      return [
        {
          "c-highlight": this.titleHighlight
        }
      ];
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";

.Title + .Title--lede {
  padding-top: var(--s-3);
}
</style>
