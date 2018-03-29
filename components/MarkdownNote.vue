<template lang="pug">
.HeadingSpace
  hr
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
