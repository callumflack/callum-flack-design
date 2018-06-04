<template lang="pug">
  nuxt-link(
    :class="currentPage"
    :to='link'
    :exact="exact"
  )
    span {{ label }}
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

.link {
  background-image: none;
  text-decoration: none;
}

.link + .link {
  margin-left: var(--s-3b);
}

.link:after {
  /* content: "/";
  content: "";
  display: inline-block;
  font-family: var(--ff-stack-sans);
  font-size: 0.9em;
  font-weight: 200;
  margin: 0 var(--s-3);
  position: relative;
  transform: translateY(-2px); */
}

.link:last-of-type:after {
  /* content: initial; */
}

.link:last-of-type:before {
  /* width: 100%; */
}

.nuxt-link-active span {
  /* font-family: var(--ff-text-medium), var(--ff-stack-serif); */
  /* font-weight: 500; */
  /* padding-left: 0.75rem; */
  position: relative;
  /* text-decoration: underline; */
}

.nuxt-link-active span:before {
  /* pointer */

  /* content: "→";
  font-family: var(--ff-stack-sans);
  font-size: 0.8em;
  font-weight: 200;
  display: inline-block;
  margin-right: var(--s-2);
  position: relative;
  transform: translateY(-1px); */

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

  /* signal */

  /* content: "\25FC";
  content: "\25B7";
  content: "\25B6";
  content: "\00B0";
  content: "*";
  content: "";
  display: inline-block;
  left: -0.1875rem;
  left: -10px;
  position: absolute; */

  /* signal */

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