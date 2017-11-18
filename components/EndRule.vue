<template lang="pug">
  hr.Rule.Block--top
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
  font-family: var(--font-serif-italic);
  font-size: var(--s-title-1);

  @media (--medium-viewport) {
    font-size: var(--s-title-2);
  }
  @media (--large-viewport) {
    font-size: var(--s-title-3);
  }
}

.Rule:after {
  background-color: var(--color-bg);
  content: "* * *";
  left: 50%;
  letter-spacing: 0.1em;
  padding: var(--s3);
  position: absolute;
  top: 50%;
  transform: translate(-50%, -40%);
}
</style>

