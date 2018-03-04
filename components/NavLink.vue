<template lang="pug">
  a.u-block(
    :class="currentPage"
    :href='link'
    target="_blank"
    v-if="external"
  )
    span {{ label }}
  nuxt-link.u-block.ruled(
    :class="currentPage"
    :to='link'
    :exact="exact"
    v-else
  )
    span {{ label }}
</template>

<script>
export default {
  name: "NavLink",

  props: {
    label: String,
    link: String,
    external: Boolean,
    exact: Boolean
  },

  computed: {
    currentPage() {
      let classes = ["link"];
      if (this.link === this.$store.state.currentPage) {
        classes.push("is-active");
      } else if (this.$store.state.isMobileNavVisible) {
        classes.push("");
      } else {
        classes.push("");
      }
      return classes.join(" ");
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/vars.css";

li {
  display: inline-block;
  font-size: 1rem;
}

li + li {
  margin-left: var(--s-3);
}

.link {
}

.ruled {
  border-top: 1px solid var(--color-border);
  padding: var(--s-3) 0;

  &:last-of-type {
    border-bottom: 1px solid var(--color-border);
  }
}

/*.link.is-active
.nuxt-link-active*/
</style>