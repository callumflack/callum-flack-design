<template lang="pug">
  a.Text.Button.Button--outline.c-title.icon-targetBlank(:href="link", target="_blank") {{ label }}
</template>

<script scoped>
export default {
  name: "markdown-button",
  props: {
    link: String,
    label: String
  }
};
</script>

<style scoped>
a + a {
  margin-left: 12px;
}
</style>
