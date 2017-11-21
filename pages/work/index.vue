<template lang="pug">
div
  main(role="main")
    MarkdownSlick(images="/images/oceanblueliving-photography.jpg,/images/oceanblueliving-visual-system.png")

    .Block--sandwich
      .Container
        .Title
          | Filter projects by:&nbsp;
          br
          a.Title--sub(
            v-for="(tag, index) in tags"
            @click.prevent="filterProjectsByTag(tag)"
            href="#"
            :class="[{ 'is-active': tag === activeTag }]"
          )
            span.Title-visualLink {{tag}}
            span(v-if="index !== tags.length - 1") ,&nbsp;
            span(v-else) .

    .Container--tuck
      .Grid.Grid--alignCenter.Grid--withLargeGutter
        c-cell(
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
  footer.u-bgColorWhite(role="contentinfo")
    c-nav
</template>

<script>
import Cell from "~/components/Cell.vue";
import Nav from "~/components/Nav.vue";
import MarkdownSlick from "~/components/MarkdownSlick.vue";

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
    "c-cell": Cell,
    "c-nav": Nav,
    MarkdownSlick
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

<style scopde lang="css">
@import "../../assets/styles/vars.css";

.GridWrapper {
  margin-left: var(--grid-gutter);
  margin-right: var(--grid-gutter);
}
</style>
