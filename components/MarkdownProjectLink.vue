<template lang="pug">
.u-block.project-link
  a.title.icon-targetblank(:href="link", target="_blank") {{ label }}
</template>

<script scoped>
export default {
  name: "markdown-project-link",
  props: {
    link: String,
    label: String
  }
};
</script>

<style scoped>
@import "../assets/styles/vars.css";

a + a {
  margin-left: 12px;
}
</style>
