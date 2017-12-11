<template lang="pug">
  div
    c-pagenavbar(:title="title")
    c-pagenavbarfixed(:title="title")
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
    title: String
  }
};
</script>
