<template lang="pug">
div(:class="space")
  hr.ParagraphSpace(:class="rule")
  p.fs-text-sm.c-textLight(v-html="note")
</template>

<script scoped>
export default {
  props: {
    note: String,
    notFirstNote: Boolean
  },
  computed: {
    space() {
      return !this.notFirstNote && "HeadingSpace";
    },
    rule() {
      return this.notFirstNote && "bg-transparent";
    }
  }
};
</script>