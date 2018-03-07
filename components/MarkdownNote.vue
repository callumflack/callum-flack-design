<template lang="pug">
  p.block--mt4.text.text--meta.text-noIndent(v-html="note")
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
