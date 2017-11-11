<template>
  <div :class="['Flex', {align, justify}]">
    <slot />
  </div>
</template>

<script scoped>
export default {
  name: 'flex',
  props: {
    title: Boolean,
    footer: Boolean

    align (string|array) sets align-items
    justify (string|array) sets justify-content
    direction (string|array) sets flex-direction
    wrap (boolean|array) sets flex-wrap: wrap
    column (boolean) shortcut for flex-direction: column

  }
}
</script>

<style scoped>
@media (min-width: 48em) {
  .Block.title {
    padding-top: 40vh;
    padding-top: 192px;
  }

  .Block.footer {
    padding-bottom: 128px;
  }
}
</style>
