<template lang="pug">
  .u-inlineBlock.m-t1.fs-scale-reset
    a.Button.Meta.icon-targetBlank.icon-targetBlank--withinButton(:href="link", target="_blank") {{ label }}
</template>

<script scoped>
export default {
  props: {
    link: String,
    label: String
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";

/* .Button {
  transform: translateX(-2px);
} */
</style>
