<template lang="pug">
  li
    span(v-if="label") {{ label }}:&nbsp;
    a(:href="link", target="_blank") {{ linkLabel }}
</template>

<script>
export default {
  name: "ContactLink",

  props: {
    label: String,
    link: String,
    linkLabel: String
  }
};
</script>

<style scoped>

</style>
