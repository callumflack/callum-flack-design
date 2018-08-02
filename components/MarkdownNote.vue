<template lang="pug">
.HeadingSpace
  hr.ParagraphSpace
  p.fs-text-sm.c-textLight(v-html="note")
</template>

<script scoped>
export default {
  props: {
    note: String
  }
};
</script>

<style scoped>
</style>
