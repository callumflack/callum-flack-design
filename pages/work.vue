<template lang="pug">
  div
    .Block--sandwich
      .Container
        .Title
          | Filter by:&nbsp;
          br
          a.Title--sub(
            v-for="tag in tags"
            @click.prevent="filterProjectsByTag(tag)"
            href="#"
            :class="[{ active: tag === activeTag }]"
          ) {{tag}},&nbsp;

    .Container--tuck
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

const allTagName = "all";

// Functions are defined outside component since asyncData does not have access
// to the component as it's called before initializing the component

const trimTags = tags => tags.map(tag => tag.trim());

function projectTagStringToList(projectTags) {
  const trimmedProjectTags = projectTags.endsWith(",")
    ? projectTags.substring(0, projectTags.length - 1)
    : projectTags;
  return trimTags(trimmedProjectTags.split(","));
}

export default {
  name: "projects",
  components: {
    Cell
  },
  data() {
    return {
      projects: [],
      visibleProjects: [],
      tags: [],
      activeTag: allTagName
    };
  },
  methods: {
    filterProjectsByTag(tag) {
      this.activeTag = tag;

      if (tag === allTagName) {
        this.visibleProjects = this.projects;
        return;
      }

      this.visibleProjects = this.projects.filter(project => {
        if (!project.tags) return false;
        const projectTags = trimTags(project.tags.split(","));
        return projectTags.includes(tag);
      });
    }
  },
  async asyncData({ app, route, payload }) {
    const projects = await app.$content("/projects").getAll();

<<<<<<< HEAD
    const uniqueTags = projects.filter(project => project.tags).reduce((
      tags,
      project
    ) => {
      const projectTags = trimTags(project.tags.split(","));
      const uniqueProjectTags = projectTags.filter(tag => !tags.includes(tag));
=======
    const uniqueTags = projects
      .filter(project => project.tags)
      .reduce((tags, project) => {
        const projectTags = projectTagStringToList(project.tags);
        const uniqueProjectTags = projectTags
          .filter(tag => !tags.includes(tag));
>>>>>>> Ignore tailing comma on string of project tags

      return [...tags, ...uniqueProjectTags];
    },
    [allTagName]);

    uniqueTags.sort();

    return {
      projects,
      visibleProjects: projects,
      tags: uniqueTags
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
