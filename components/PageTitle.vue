<template lang="pug">
  div
    c-pagenavbar(:title="title", :lede="lede")
    //- c-pagenavbarfixed(:title="title")
</template>

<script>
import PageNavbar from "~/components/PageNavbar.vue";
import PageNavbarFixed from "~/components/PageNavbarFixed.vue";

export default {
  name: "page-title",
  components: {
    "c-pagenavbar": PageNavbar,
    "c-pagenavbarfixed": PageNavbarFixed
  },
  props: {
    title: String,
    lede: String
  }
};
</script>

<style scoped>
@import "../assets/styles/vars.css";

.Space {
  margin-bottom: 0;

  @media (--small-viewport) {
    margin-bottom: var(--s2);
  }
}
</style>

