<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="Button Button--outline st-2xh"
  >
    {{ label }}
    <span class="Link--blank">&#8599;</span>
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
a + a {
  @apply ml-2;
}
</style>
