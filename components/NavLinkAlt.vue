<template lang="pug">
  nuxt-link.Button.Button--transparent(:class="currentPage", :to='link', :exact="exact") 
    span {{ label }}
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

li {
  display: inline-block;
  font-size: 1rem;
}

li + li {
  margin-left: var(--s3);
}

.link {
}

/*.link.is-active*/
.nuxt-link-active span {
  background-image: linear-gradient(var(--color-text), var(--color-text));
  background-size: 3px 3px;
  background-repeat: repeat-x;
  background-position: 0% 100%;
  padding-bottom: 6px;

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    background-position-y: 96%;
  }
}
</style>
