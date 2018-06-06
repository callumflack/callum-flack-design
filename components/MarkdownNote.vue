<template lang="pug">
.HeadingSpace
  hr.u-sm-size1of2.m-l0
  p.c-textLight.note(v-html="note")
</template>

<script scoped>
export default {
  name: "markdown-note",
  props: {
    note: String
  }
};
</script>

<style scoped>
</style>
