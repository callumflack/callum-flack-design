<template lang="pug">
  NavTop(:class="{hidden: isNavHidden}")
</template>

<script>
import NavTop from '~/components/NavTopAlt.vue'

const transitionScrollPos = 200

export default {
  name: 'NavTopFixed',

  components: {
    NavTop
  },

  data () {
    return {
      previousScrollPos: 0,
      windowIsScrolled: false,
      isNavHidden: true
    }
  },

  mounted () {
    if (window.scrollY > transitionScrollPos) {
      this.windowIsScrolled = true
    }

    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll (event) {
      const scrollPos = window.scrollY
      const previousScrollPos = this.previousScrollPos
      this.previousScrollPos = scrollPos
      const scrolledDown = scrollPos > previousScrollPos

      this.isNavHidden = scrolledDown || scrollPos < 200

      this.windowIsScrolled = scrollPos > transitionScrollPos
    }
  }
}
</script>

<style scoped>
.Nav {
  position: fixed;
  top: 0;
}
</style>
