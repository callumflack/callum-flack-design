<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="Button Button--outline st-2xh"
  >
    {{ label }}
    <span class="Blank">&#8599;</span>
  </a>
</template>

<script>
export default {
  props: {
    link: String,
    label: String,
  }
}
</script>

<style lang="postcss" scoped>
.Blank {
  @apply inline-block;
  font-size: 80%;
  margin-left: 0.5em;
  transform: translateY(-1px);
}

a + a {
  @apply ml-2;
}
</style>
