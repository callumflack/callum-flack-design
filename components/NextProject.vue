<template lang="pug">
  footer.u-bgColorWhite(role="contentinfo")
    router-link(:to="project.permalink")
      .Block--sandwichPadding
        .Container
          h1.Title.u-sm-size11of12
            span.Title--sub Next →
            br
            span(:style="projectColor") {{ project.title }}
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

