<template lang="pug">
  a.Meta.Button.Button--outline(:href="link") {{ label }}
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

</style>
