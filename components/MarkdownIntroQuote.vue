<template lang="pug">
blockquote
  p(v-html="quote")
    em {{ quoteAuthor }}

//- div(:class="space")
  hr.ParagraphSpace(:class="rule")
  p.fs-text-sm.c-textLight(v-html="note")
</template>

<script scoped>
export default {
  props: {
    quote: String,
    quoteAuthor: String
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