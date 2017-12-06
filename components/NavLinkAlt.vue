<template lang="pug">
  li.u-textRight
    nuxt-link(:class="currentPage", :to='link' :exact="exact") {{ label }}
</template>

<script>
export default {
  name: "NavLink",

  props: {
    label: String,
    link: String,
    lede: String,
    exact: Boolean
  },

  computed: {
    currentPage() {
      let classes = ["link", "Meta"];
      if (this.link === this.$store.state.currentPage) {
        classes.push("is-active");
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

.link {
  text-align: right;
  display: block;
  position: relative;
}

.nuxt-link-active .Meta,
.link.is-active .Meta {
  position: relative;
  padding-left: calc(1.5 * var(--s3));
}

.nuxt-link-active .Meta:before,
.link.is-active .Meta:before {
  /* content: "›"; */
  background-color: var(--color-text);
  content: " ";
  display: block;
  height: 0.275em;
  padding-right: 0.25em;
  position: absolute;
  left: 0;
  top: 0.45em;
  width: 0.275em;
}
</style>
