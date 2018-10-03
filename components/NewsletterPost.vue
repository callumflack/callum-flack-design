<template lang="pug">
  td.container.nl-container
    .nl-content
      .nl-spacer
        p.Text--sm.c-textLight.u-textCenter(v-if="archive") Just visiting? 
          nuxt-link(to="/newsletter") Subscribe to the Interesting mailing list.
        h1.Title.u-textCenter {{ title }}
        h2.m-y0.Text--sm.c-textLight.u-textCenter
          time(:date-time="date") {{ date | moment("MMMM Do, YYYY") }}
          span.MetaSeparator • 
          span {{ readingTime }} minutes
      
      no-ssr
        nuxtent-body.nl-spacer(:body="body")
</template>

<script>
import moment from "vue-moment";

export default {
  components: {
    moment
  },
  props: {
    published: Boolean,
    archive: Boolean,
    title: String,
    date: String,
    readingTime: Number,
    body: String
  }
};
</script>


<style scoped>
@import "../assets/styles/variables.css";
</style>
