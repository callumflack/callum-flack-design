<template lang="pug">
div
  //- header.b-pb2(role="header")
    .Container
      //- h1.Supertitle.u-textCenter Selected projects since 2014
      //- p.Subheading.fw-400 We ask our clients to identify key performance goals and collaborate directly with us in a process of iterative design, rapid prototyping, ongoing testing, and optimization.
      .Project-filter
        .f
          .Meta.m-a0 Filter by:
          .Meta.c-text-light.m-l2 Note
          .Meta.c-text-light.m-l2 Essay
          .Meta.c-text-light.m-l2 Project
            //- a.u-linkClean(
            //-   v-for="(tag, index) in tags"
            //-   @click.prevent="filterProjectsByTag(tag)"
            //-   href="#"
            //-   :class="[{ 'c-highlight': tag === activeTag }]"
            //- )
            //-   span {{ tag }}
              //- span(v-if="index !== tags.length - 1") ,&nbsp;
              //- span(v-else) .

  main.Container.b-pt075(role="main")
    PostExcerpt(
      v-if="post.published && post.category !== 'project'"
      v-for="post in posts"
      :key="post.title"
      :title="post.title"
      :date="post.date"
      :category="post.category"
      :readingTime="post.readingTime"
      :lede="post.lede"
      :permalink="post.permalink"
    )

</template>

<script>
import PostExcerpt from "~/components/PostExcerpt.vue";

/* const trimTags = tags => tags.map(tag => tag.trim());

function projectTagStringToList(projectTags) {
  const trimmedProjectTags = projectTags.endsWith(",")
    ? projectTags.substring(0, projectTags.length - 1)
    : projectTags;
  return trimTags(trimmedProjectTags.split(","));
} */

export default {
  name: "Blog",
  components: {
    PostExcerpt
  },
  data() {
    return {
      posts: []
    };
  },
  /* computed: {
    mostRecentPost() {
      return this.posts.filter(post => post.mostRecentPost === true);
    },
    everyOtherPost() {
      return this.posts.filter(post => post.mostRecentPost !== true);
    }
  }, */
  async asyncData({ app }) {
    const posts = await app.$content("/posts").getAll();

    return {
      posts
    };
  },
  head() {
    return {
      title: "Callum Flack Design • Blog",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Articles by Callum Flack Design about design, user experience, code and the 'things inbetween' that inform their success"
        },
        // Twitter Card
        { name: "twitter:title", content: `Callum Flack Design • Blog` },
        {
          name: "twitter:description",
          content:
            "Articles by Callum Flack Design about design, user experience and code in the context of human attention and utility."
        }
      ]
    };
  }
};
</script>
