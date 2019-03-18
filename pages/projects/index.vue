
<template lang="pug">
article
  header.b-ptTitle.b-pb1(role="banner")
    .Container
      h1.Supertitle.m-b0.w-sm-10x12
        | A selected archive since 2013.

  main(role="main")
    .Container

      template(
        v-for="(year, index) in reverseProjects"
        v-bind="year"
      )
        h2.Subtitle.Projects-year {{ 2019 - index }}
        .Projects
          ProjectListItem(
            v-for="project in year"
            v-if="project.published !== false"
            v-bind="project"
            v-bind:key="project.link"
            v-bind:internal="project.internal"
            v-bind:link="project.link"
            v-bind:title="project.title"
            v-bind:medium="project.medium"
            v-bind:tags="project.tags"
            v-bind:client="project.client"
          )

</template>

<script>
import ProjectListItem from "~/components/ProjectListItem.vue";
import projects from "~/data/projects.js";

export default {
  components: {
    ProjectListItem
  },
  data() {
    return {
      projects
    };
  },
  computed: {
    /*
      1. turn the object into an array with Object.values() b/c can't order Objects
      2. reverse it
    */
    reverseProjects() {
      return Object.values(this.projects).reverse();
    }
    /* projectsYear() {
      return this.reverseProjects.map(i => 2018 - index);
    } */
    /* filterPublishedProjects() {
      return this.projects.filter(project => project.published !== false);
    } */
  },
  head() {
    return {
      title: `Projects—Callum Flack Design`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Projects—`
        }
      ]
    };
  }
};
</script>

