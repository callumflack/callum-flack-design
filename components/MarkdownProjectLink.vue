<template lang="pug">
  a.Button.icon-targetBlank.icon-targetBlank--withinButton(:href="link", target="_blank") {{ label }}
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
</style>
