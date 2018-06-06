<template lang="pug">
  nav.Plain.Title
    nuxt-link(to="/" exact) CF/#[span d]
</template>

<script scoped>
export default {
  name: "fixed-menu",
  props: {
    currentPage: String,
    index: Boolean
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";

.Orange {
  align-items: center;
  background-color: var(--c-text);
  /* border-radius: 999px; */
  color: var(--c-bg);
  display: flex;
  justify-content: center;
  padding: 9px 12px 8px;
  position: fixed;
  right: var(--s-4);
  top: var(--s-4);
  z-index: 999;

  height: 60px;
  width: 60px;
  margin-bottom: 0;
  font-size: calc(1.333em * var(--fs-text-unit));
  letter-spacing: 0.01em;

  & span {
    text-transform: initial;
  }

  & a {
    background-image: none;
    text-shadow: none;
  }
}

.Plain {
  position: fixed;
  top: var(--s-4);
  text-align: center;
  width: 100%;
  z-index: 999;

  margin-bottom: 0;
  font-size: calc(1.333em * var(--fs-text-unit));
  letter-spacing: 0.05em;

  & span {
    text-transform: initial;
  }

  & a {
    background-image: none;
    text-shadow: none;
  }
}
</style>
