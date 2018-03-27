<template lang="pug">
  main.block--matchFixedMenu.block--pb7(role="main")
    .container.container--md
      .project-filter
        .u-flex.u-flexJustifyBetween
          .text.m-a0 Filter by: 
            //- form
              select
                option(value='1') 1
                option(value='2') 2
                option(value='3') 3
                option(value='4') 4
                option(value='5') 5
          .text.c-textLight.m-a0
            a.u-noVisualLink(
              v-for="(tag, index) in tags"
              @click.prevent="filterProjectsByTag(tag)"
              href="#"
              :class="[{ 'c-text': tag === activeTag }]"
            )
              span {{ tag }}
              //- span(v-if="index !== tags.length - 1") ,&nbsp;
              //- span(v-else) .

      c-project(
        v-if="project.featured"
        v-for="project in visibleProjects"
        post
        :key="project.heading"
        :link="project.permalink"
        :heading="project.heading"
        :lede="project.lede"
        :image="project.thumbImage"
        :cloudinary="project.thumbInCloudinary"
        :year="project.year"
        :tags="project.tags"
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
import PageHeading from "~/components/PageHeading.vue";
import Project from "~/components/Project3.vue";

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
    "c-project": Project,
    "c-pageheading": PageHeading
  },
  head() {
    return {
      title: "Work – Callum Flack Design",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Selected digital design & development projects by Callum Flack"
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
    const projects = await app.$content("/projects").getAll();

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
