<template lang="pug">
div
  c-pagetitle(title="Selected projects")
  main(role="main")
    //- .Block--sandwich
      .Container
        .Meta
          | Filter projects by:&nbsp;
          br
          a(
            v-for="(tag, index) in tags"
            @click.prevent="filterProjectsByTag(tag)"
            href="#"
            :class="[{ 'is-active': tag === activeTag }]"
          )
            span.Title-visualLink {{tag}}
            span(v-if="index !== tags.length - 1") ,&nbsp;
            span(v-else) .

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

    <svg class='u-hiddenVisually'>
      <filter id='gray' color-interpolation-filters='sRGB' x='0' y='0' height='100%' width='100%'>
        <feGaussianBlur stdDeviation="33" />
        //- Clip edge artifacts:
        //- https://stackoverflow.com/questions/24416564/svg-blur-filter-edge-artifacts
        <feComponentTransfer>
          <feFuncA type="discrete" tableValues="1 1"/>
        </feComponentTransfer>
      </filter>
    </svg>
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import Project from "~/components/Project.vue";

const allTagName = "all";

// Functions are defined outside component since asyncData does not have access
// to the component because it's called before initializing the component

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
    "c-project": Project,
    "c-pagetitle": PageTitle
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

    const uniqueTags = projects.filter(project => project.tags).reduce((
      tags,
      project
    ) => {
      const projectTags = projectTagStringToList(project.tags);
      const uniqueProjectTags = projectTags.filter(tag => !tags.includes(tag));

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

<style scope>
@import "../../assets/styles/vars.css";

.GridWrapper {
  margin-left: calc(2 * var(--grid-gutter));
  margin-right: calc(2 * var(--grid-gutter));
}

.Grid-cell:nth-child(even) {
  margin-top: var(--s4);
}
</style>
