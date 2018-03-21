<template lang="pug">
  nuxt-link.link(
    :class="currentPage"
    :to='link'
    :exact="exact"
    v-html="label"
  ) 
</template>

<script>
export default {
  name: "NavLink",

  props: {
    label: String,
    year: String,
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

.link:after {
  content: "/";
  content: "";
  display: inline-block;
  font-family: var(--ff-stack-sans);
  font-size: 0.9em;
  font-weight: 200;
  margin: 0 var(--s-3);
  position: relative;
  transform: translateY(-2px);
}

.link:last-of-type:after {
  content: initial;
}

.link:last-of-type:before {
  width: 100%;
}

.nuxt-link-active {
  /* padding-left: 0.75rem; */
  position: relative;
}

.nuxt-link-active:before {
  /* content: "→";
  font-family: var(--ff-stack-sans);
  font-size: 0.8em;
  font-weight: 200;
  display: inline-block;
  margin-right: var(--s-2);
  position: relative;
  transform: translateY(-1px); */

  content: "\25FC";
  content: "\25B7";
  content: "\25B6";
  content: "\00B0";
  display: inline-block;
  /* font-family: var(--ff-stack-sans);
  font-size: 1.25em;
  font-weight: 700; */
  left: -0.1875rem;
  left: -9px;
  position: absolute;
  /* line-height: 0.75; */

  /* line-thru */

  /* background-color: currentColor;
  bottom: -15px;
  bottom: 0.475em;
  content: "";
  display: inline-block;
  height: 0.15rem;
  height: 1px;
  position: absolute;
  width: 69%; */
}
</style>