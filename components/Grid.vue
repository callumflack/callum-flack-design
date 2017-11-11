<template lang="pug">
  div(:class="classes")
    slot
</template>


<script scoped>
export default {
  name: 'grid',
  computed: {
    classes () {
      return ['Grid', {
        'Grid--withGutter': this.gutter,
        'Grid--withGutterSm': this.gutterSm,
        'Grid--fit': this.fit,
        'u-flexAlignItemsStretch': this.fill
      }]
    }
  },
  props: {
    gutter: Boolean,
    gutterSm: String,
    fit: Boolean,
    fill: Boolean
  }
}
</script>


<style >

</style>
