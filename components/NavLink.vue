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
    .u-flex.u-flexJustifyBetween
      span.text {{ label }}
      span.text(v-if="year") {{ year }}
</template>

<script>
export default {
  name: "NavLink",

  props: {
    label: String,
    year: Number,
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
@import "../assets/styles/variables.css";

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
  border-top: 1px solid;
  border-bottom: 0 solid;
  border-color: var(--c-rule);
  padding: var(--s-3a) 0 var(--s-3a);

  &:last-of-type {
    border-bottom-width: 1px;
  }
}

.footer .ruled {
  border-color: var(--c-gray);
}

/*.link.is-active
.nuxt-link-active*/
</style>