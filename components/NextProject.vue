<template lang="pug">
  footer.bgcolor-white(role="contentinfo")
    router-link(:to="project.permalink", v-if="project")
      .block
        .container
          h1.title.u-sm-size11of12
            span.title--sub Next →
            br
            span(:style="projectColor") {{ project.title }}
    router-link(to="/work", v-else)
      .block
        .container
          h1.title.u-sm-size11of12
            span.title--sub Next →
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

