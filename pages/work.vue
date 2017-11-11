<template lang="pug">
  div
    .Block.Block--tags
      .Container.u-textCenter
        a(
          v-for="tag in tags"
          @click.prevent="filterProjectsByTag(tag)"
          href="#"
        ) #[span.Button.Button--transparent.Button--small {{tag}}]     

    Cell(
      v-for="project in visibleProjects"
      :key="project.title"
      feature,
      :link="project.permalink",
      :tags="project.tags",
      :title="project.title",
      :headline="project.headline",
      :lede="project.lede",
      :image="project.heroImage",
    )

    .Block
      .Container.Container--large
        .Grid.Grid--withGutter
          Cell(
            v-for="project in visibleProjects"
            :key="project.title"
            :link="project.permalink",
            :tags="project.tags",
            :title="project.title",
            :headline="project.headline",
            :lede="project.lede",
            :image="project.heroImage",
          )
</template>

<script>
import Cell from '~/components/Cell.vue'

export default {
  name: 'projects',
  components: {
    Cell
  },
  data () {
    return {
      projects: [],
      visibleProjects: [],
      tags: []
    }
  },
  methods: {
    filterProjectsByTag (tag) {
      this.visibleProjects = this.projects
        .filter(project => project.tags)
        .filter(project => {
          const projectTags = project.tags.split(',')

          return projectTags.includes(tag)
        })
    }
  },
  async asyncData ({ app, route, payload }) {
    const projects = await app.$content('/projects').getAll()
    const tags = []

    projects
      .filter(project => project.tags)
      .map(project => {
        const projectTags = project.tags.split(',')

        projectTags.map(tag => {
          tag = tag.trim()

          if (!tags.includes(tag)) {
            tags.push(tag)
          }
        })
      })

    tags.sort()

    return {
      projects,
      visibleProjects: projects,
      tags
    }
  }
}
</script>

<style>

</style>
