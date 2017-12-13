<template lang="pug">
div
  c-pagetitle(title="Selected articles")
  main(role="main")
    .Container
      .Grid.Grid--alignCenter.Grid--withTinyGutter
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";

export default {
  name: "journal",
  components: {
    "c-pagetitle": PageTitle
  },
  data() {
    return {
      posts: [],
    };
  },
  async asyncData({ app, route, payload }) {
    const posts = await app.$content("/posts").getAll();

    return {
      posts,
    };
  }
};
</script>

<style scope>
@import "../../assets/styles/vars.css";

.Grid-cell:nth-child(even) {
  @media (--small-viewport) {
    margin-top: var(--s4);
  }
}
</style>
