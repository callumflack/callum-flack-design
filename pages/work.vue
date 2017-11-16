<template lang="pug">
  div
    .Block--hero
      .Container.u-textCenter
        .Meta
          //- | Filter by:&nbsp;
          a(
            v-for="tag in tags"
            @click.prevent="filterProjectsByTag(tag)"
            href="#"
          ) #[span.Button.Button--transparent.Button--small {{tag}}]

    .GridWrapper
      .Grid.Grid--alignCenter.Grid--withProjects
        Cell(
          v-if="project.featured"
          v-for="project in visibleProjects"
          :key="project.title"
          feature,
          :link="project.permalink",
          :tags="project.tags",
          :year="project.year",
          :title="project.title",
          :headline="project.headline",
          :lede="project.lede",
          :image="project.thumbImage",
        )

        Cell(
          v-for="project in visibleProjects"
          :key="project.title"
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
import Cell from "~/components/Cell.vue";

export default {
  name: "projects",
  components: {
    Cell
  },
  data() {
    return {
      projects: [],
      visibleProjects: [],
      tags: []
    };
  },
  methods: {
    filterProjectsByTag(tag) {
      this.visibleProjects = this.projects
        .filter(project => project.tags)
        .filter(project => {
          const projectTags = project.tags.split(",");

          return projectTags.includes(tag);
        });
    },
  },
  async asyncData({ app, route, payload }) {
    const projects = await app.$content("/projects").getAll();

    const uniqueTags = projects
      .filter(project => project.tags)
      .reduce((tags, project) => {
        const projectTags = project.tags.split(",");

        projectTags.map(tag => {
          const trimmedTag = tag.trim();

          if (!tags.includes(trimmedTag)) {
            tags.push(trimmedTag);
          }
        });

        return tags;
      }, []);

    uniqueTags.sort();

    return {
      projects,
      visibleProjects: projects,
      tags: uniqueTags,
    };
  }
};
</script>

<style scopde lang="css">
@import "../assets/styles/vars.css";

.GridWrapper {
  margin: 0 var(--tuck);

  @media (--medium-viewport) {
  }

  @media (--large-viewport) {
    margin: 0 var(--tuck-lg);
  }
}
</style>
