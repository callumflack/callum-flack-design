<template lang="pug">
p
  a.Button(:href="link", target="_blank") {{ label }}
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
@import "../assets/styles/variables.css";

a + a {
  margin-left: 12px;
}
</style>
