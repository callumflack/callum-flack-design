<template lang="pug">
  nav.NavTop.Nav.Title
    nuxt-link(to='/') 
      | C.F.
    .u-flex.u-flexExpandLeft.u-flexAlignItemsCenter
      NavLink(
        class="",
        v-for="item in navLinks",
        :key="item.label",
        :label="item.label",
        :link="item.link",
        :currentPage="currentPage"
      )
</template>
  

<script scoped>
import Container from '~/components/Container.vue'
import NavLink from '~/components/NavLink.vue'

export default {
  name: 'nav-top',
  components: {
    Container,
    NavLink
  },
  props: {
    currentPage: String
  },
  data () {
    return {
      navLinks: [
        {
          label: 'Work',
          link: '/work'
        }, {
          label: 'Journal',
          link: '/journal'
        }, {
          label: 'About',
          link: '/about'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import "../assets/styles/vars.css";

.NavTop {
  display: flex;
  opacity: 1;
  padding: 18px 30px;
  position: absolute;
  top: 0;
  transform: translateY(0);
  transition: 
    opacity var(--transition-duration),
    transform 250ms var(--transition-duration);
  width: 100%;
  z-index: 99;

  &.hidden {
    opacity: 0;
    transform: translateY(-100%);
    transition: 
      opacity var(--transition-duration),
      transform 250ms var(--transition-duration);
  }
}
</style>
