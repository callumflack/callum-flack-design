<template lang="pug">
  li
    nuxt-link(:class="currentPage", :to='link')
      span.Title {{ label }}
      span.Text.--italic {{ lede }}
</template>

<script>
export default {
  name: "NavLink",

  props: {
    label: String,
    link: String,
    lede: String
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
    transform: translateY(0.7em);
  }
}

.nuxt-link-active .Title,
.link.is-active .Title {
  position: relative;
  padding-left: calc(1.5 * var(--s3));
}

.nuxt-link-active .Title:before,
.link.is-active .Title:before {
  content: "›";
  display: block;
  position: absolute;
  left: 0;
  top: -0.125em;
}
</style>
