<template>
  <div class="columns">
    <div>
      <slot name="col-1"></slot>
    </div>
    <div>
      <slot name="col-2"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.columns {
  column-count: 2;
  column-gap: var(--spacing5);
}
.columns h2 {
  @apply mt-0 !important;
}
</style>
