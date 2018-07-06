<template lang="pug">
  a(
    v-if="targetBlank"
    href="link"
    target="_blank"
  )
  nuxt-link(
    v-else
    :class="currentPage"
    :to="link"
    :exact="exact"
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
    targetBlank: Boolean,
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

.link {
  background-image: none;
  display: inline-block;
  padding-top: var(--s-3b);
  padding-bottom: var(--s-3b);
  text-decoration: none;

  @media (--sm) {
    padding-top: var(--s-4a);
    padding-bottom: var(--s-4a);
  }

  &:hover {
    color: var(--c-text);
  }
}

.link + .link {
  margin-left: var(--s-3b);
}

.link:last-of-type:after {
  /* content: initial; */
}

.link:last-of-type:before {
  /* width: 100%; */
}

.nuxt-link-active span {
  position: relative;
}

.nuxt-link-active span:before {
  background-color: currentColor;
  content: "";
  display: inline-block;
  height: 0.15rem;
  height: 1px;
  left: 0;
  right: 0;
  bottom: -2px;
  position: absolute;
}
</style>