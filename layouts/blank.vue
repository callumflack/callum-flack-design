<template lang="pug">
  nuxt(:class="currentPageClass")
</template>

<script>
export default {
  computed: {
    currentPageClass() {
      return `page-${this.$store.state.currentPage}`;
    }
  }
};
</script>
