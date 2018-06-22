<template lang="pug">
  td.container.nl-container
    .nl-content
      .nl-spacer
        p.Text--sm.c-textLight.u-textCenter(v-if="archive") Just visiting? 
          nuxt-link(to="/newsletter") Subscribe to the Interesting mailing list.
        h1.Title.u-textCenter
          nuxt-link(:to="link", v-html="title")
        h2.m-y0.Text--sm.c-textLight.u-textCenter
          time(:date-time="date") {{ date | moment("MMMM Do, YYYY") }}
          span.MetaSeparator • 
          span {{ readingtime }} minutes
      
      no-ssr
        nuxtent-body.nl-spacer(:body="body")
</template>

<script>
import moment from "vue-moment";
import LazyImage from "~/components/LazyImage.vue";

export default {
  name: "post",
  components: {
    moment,
    "c-image": LazyImage
  },
  props: {
    published: Boolean,
    archive: Boolean,
    link: String,
    title: String,
    date: String,
    readingtime: Number,
    body: Object
  }
};
</script>


<style scoped>
@import "../assets/styles/variables.css";
</style>
