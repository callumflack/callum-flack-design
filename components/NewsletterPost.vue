<template lang="pug">
  td.Container.nl-container
    .nl-content
      //- .nl-spacer
        p.fs-text-sm.c-textLight.u-textCenter(v-if="archive") Just visiting? 
          nuxt-link(to="/the-littoral-line") Subscribe to The Littoral Line mailing list.
        h1.Title.u-textCenter 
          IconBase(icon-name="icon-sun")
            IconSun
          | {{ title }}
        h2.m-y0.Text--sm.c-textLight.u-textCenter
          span LL01
          span.MetaSeparator • 
          time(:date-time="date") {{ date | moment("MMMM Do, YYYY") }}
          span.MetaSeparator • 
          span {{ readingTime }} minutes
      
      no-ssr.Scope-post
        nuxtent-body.nl-spacer(:body="body")
</template>

<script>
import moment from "vue-moment";
import IconBase from "~/components/IconBase.vue";
import IconSun from "~/components/icons/IconSun.vue";

export default {
  name: "post",
  components: {
    moment,
    IconBase,
    IconSun
  },
  props: {
    published: Boolean,
    archive: {
      type: Boolean,
      default: true
    },
    link: String,
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
