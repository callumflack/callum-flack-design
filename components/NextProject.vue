<template lang="pug">
  footer.bg-white(role="contentinfo")
    router-link(:to="project.permalink", v-if="project")
      .block--my6
        .container
          h1.heading.u-sm-size11of12
            span.heading--sub Next →
            br
            span(:style="projectColor") {{ project.heading }}
    router-link(to="/work", v-else)
      .block--my6
        .container
          h1.heading.u-sm-size11of12
            span.heading--sub Next →
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
      return this.project.projectColor ? `color: ${this.project.projectColor}` : "";
    }
  }
};
</script>

<style>

</style>

