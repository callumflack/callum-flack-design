<template lang="pug">
  hr.Rule.Subheading.--italic.Block--top
</template>

<script>
export default {
  name: "EndRule"
};
</script>

<style scoped lang="css">
@import "../assets/styles/vars.css";

.Rule {
  background-color: var(--color-border);
  background-color: transparent;
}

.Rule:after {
  background-color: var(--color-bg);
  content: "—";
  left: 50%;
  padding: var(--s3);
  position: absolute;
  top: 50%;
  transform: translate(-50%, -40%);
}
</style>

