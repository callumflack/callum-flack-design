<template lang="pug">
  a.Project-item.Text.f(
    :href="link"
    target="_blank"
  )
    span.m-r4 {{ title }}
    span.fs-italic.c-text-light {{ tags }}

</template>

<script scoped>
export default {
  components: {},
  props: {
    title: String,
    tags: String,
    link: String
  }
};
</script>
