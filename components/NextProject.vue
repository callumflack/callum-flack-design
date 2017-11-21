<template lang="pug">
  footer.u-bgColorWhite(role="contentinfo")
    router-link(:to="project.permalink", v-if="project")
      .Block--sandwichPadding
        .Container
          h1.Title.u-sm-size11of12
            span.Title--sub Next →
            br
            span(:style="projectColor") {{ project.title }}
    router-link(to="/work", v-else)
      .Block--sandwichPadding
        .Container
          h1.Title.u-sm-size11of12
            span.Title--sub Next →
            br
            span View all work
</template>

<script>
export default {
  name: "NextProject",
  props: {
    project: Object
  },
  computed: {
    projectColor() {
      return this.project.projectColor
        ? `color: ${this.project.projectColor}`
        : "";
    }
  }
};
</script>

<style>

</style>

