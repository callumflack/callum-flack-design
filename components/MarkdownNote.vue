<template lang="pug">
.heading-space
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
