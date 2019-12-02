<template>
  <!-- Button Button--outline -->
  <div class="Space-lg-t">
    <a
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="Button Button--outline relative"
    >
      {{ label }} &#8599;
      <!-- <span class="Link--blank">&#8599;</span> -->
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
    label: String,
  },
};
</script>

<style lang="postcss" scoped>
/* a {
  @apply inline-block font-sans font-medium;
} */

a + a {
  @apply ml-4;
}

.Link--blank {
  @apply absolute m-0;
  right: -1.1em;
  top: 0.75em;
}
</style>
