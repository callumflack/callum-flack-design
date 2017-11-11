<template>
  <nuxt-link :class="currentPage" :to='link'>
    {{ label }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'NavLink',

  props: {
    label: String,
    link: String
  },

  computed: {
    currentPage () {
      let classes = ['link']
      if (this.link === this.$store.state.currentPage) {
        classes.push('is-active')
      } else {
        classes.push('')
      }
      return classes.join(' ')
    }
  }
}
</script>

<style scoped>
@import "../assets/styles/vars.css";

.link {
  border-bottom: 2px solid;
  border-color: transparent;
  /* display: inline-flex; */
}

.nuxt-link-active,
.link.is-active {
  border-bottom-color: var(--color-text);
}
</style>
