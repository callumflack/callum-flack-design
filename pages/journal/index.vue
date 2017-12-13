<template lang="pug">
div
  c-pagetitle(title="Selected articles")
  main(role="main")
    .Container
      .Grid.Grid--alignCenter.Grid--withTinyGutter
        c-project(
          v-if="project.featured"
          v-for="project in visibleProjects"
          :key="project.title"
          featured,
          :link="project.permalink",
          :tags="project.tags",
          :year="project.year",
          :title="project.title",
          :headline="project.headline",
          :lede="project.lede",
          :image="project.thumbImage",
        )
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import Project from "~/components/Project.vue";

export default {
  name: "journal",
  components: {
    "c-project": Project,
    "c-pagetitle": PageTitle
  },
  data() {
    return {
      projects: []
    };
  },
  async asyncData({ app, route, payload }) {
    const projects = await app.$content("/projects").getAll();

    return {
      projects
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
