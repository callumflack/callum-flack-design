<template lang="pug">
  li
    nuxt-link(:class="currentPage", :to='link' :exact="exact")
      span.Title {{ label }}
      span.Text.Text--italic {{ lede }}
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
      let classes = ["link"];
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
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  z-index: 1;

  &:before {
    background-image: url("/static/images/dot.svg");
    background-repeat: repeat-x;
    background-size: auto 3px;
    bottom: 0;
    content: "";
    position: absolute;
    top: 70.5%;
    width: 100%;
    z-index: -1;
  }

  & span {
    background-color: var(--color-bg);
  }

  & span:first-child {
    padding-right: 0.33em;
  }

  & span:last-child {
    padding-left: 0.33em;
    transform: translateY(0.75em);
  }
}

.nuxt-link-active .Title,
.link.is-active .Title {
  position: relative;
  padding-left: calc(1.5 * var(--s3));
}

.nuxt-link-active .Title:before,
.link.is-active .Title:before {
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
