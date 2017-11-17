<template lang="pug">
  span
    a.Button.Button--transparent(:href="link", target="_blank", v-if="link") {{ label }}
    div(v-if="!link")
      .Button.Button--transparent(style="cursor: default") {{ label }}
</template>

<script>
export default {
  name: "NavButton",

  props: {
    label: String,
    link: String
  }
};
</script>

<style scoped>

</style>
