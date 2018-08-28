<template lang="pug">
.Container
  header.b-pb3(role="header")
    h1.Supertitle Selected projects
    //- p.Subheading.fw-regular We ask our clients to identify key performance goals and collaborate directly with us in a process of iterative design, rapid prototyping, ongoing testing, and optimization.
    //- .Project-filter
      .u-flex.u-flexJustifyBetween
        .Meta.m-a0 Filter by: 
        .Meta.c-textLight.m-a0
          a.u-linkClean(
            v-for="(tag, index) in tags"
            @click.prevent="filterProjectsByTag(tag)"
            href="#"
            :class="[{ 'c-highlight': tag === activeTag }]"
          )
            span {{ tag }}
            //- span(v-if="index !== tags.length - 1") ,&nbsp;
            //- span(v-else) .

  main(role="main")
    .Extract-super
      .mo-FlexGridWrapper
        .FlexGrid.FlexGrid--noGrow
          ProjectExcerpt(
            v-if="project.published && project.category === 'projects'"
            v-for="project in visibleProjects"
            :cloudinary="project.thumbInCloudinary"
            :image="project.thumbImage"
            :lede="project.lede"
            :link="project.permalink"
            :key="project.permalink"
            :tags="project.tags"
            :title="project.title"
            :year="project.year"
          )

    <svg class='u-hiddenVisually'>
      <filter id='blur' color-interpolation-filters='sRGB' x='0' y='0' height='100%' width='100%'>
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
import ProjectExcerpt from "~/components/ProjectExcerpt.vue";

const allTagName = "All";

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
    ProjectExcerpt
  },
  head() {
    return {
      title: "Work – Callum Flack Design",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Selected digital design & development projects by Callum Flack since 2014"
        }
      ]
    };
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
  async asyncData({ app }) {
    /* const projects = await app.$content("/projects").getAll(); */
    const projects = await app.$content("/posts").getAll();

    const uniqueTags = projects.filter(project => project.tags).reduce(
      (tags, project) => {
        const projectTags = projectTagStringToList(project.tags);
        const uniqueProjectTags = projectTags.filter(tag => !tags.includes(tag));

        return [...tags, ...uniqueProjectTags];
      },
      [allTagName]
    );

    uniqueTags.sort();

    return {
      projects,
      visibleProjects: projects,
      tags: uniqueTags
    };
  }
};
</script>

<style scope lang="css">
@import "../../assets/styles/variables.css";
</style>
