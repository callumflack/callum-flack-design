<template>
  <!-- Button Button--outline -->
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="st-2xh relative"
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

.Link--blank {
  @apply absolute;
  right: -1em;
  top: 0.5em;
}
</style>
