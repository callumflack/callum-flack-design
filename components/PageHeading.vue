<template lang="pug">
  div(:class="blockClasses")
    .container
      //- div(:class="scopeClasses")
      .u-size5of6(:class="scopeClasses")
        h1.Heading(
          v-if="heading"
          :projectColor="headingColor"
          v-html="heading"
        )
        //- p.Text.italic.u-textCenter.m-t0.m-b0(v-if="lede", v-html="lede")
        h2.Text.m-t0.m-b0(v-if="lede", v-html="lede")
</template>

<script>
export default {
  name: "page-heading",
  props: {
    heading: String,
    lede: String,
    projectColor: Boolean,
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
    },
    headingColor() {
      return ["style='color: `${projectColor}`'"];
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";
</style>
