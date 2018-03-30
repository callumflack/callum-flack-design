<template lang="pug">
  nuxt-link.project.LinkSignal.block--mb6(:to="link")
    //- figure.project-image(v-if="image")
      img(:src="image")
    .project-text
      h1.Title {{ title }}
        //- span.LinkSignal-target &nbsp;→
      p.Text(v-html="lede") 
      //- p.project-subtext.TypeScope-reset
        span(v-if="date") {{ date }}
</template>


<script>
export default {
  name: "post",
  components: {},
  props: {
    post: Boolean,
    link: String,
    image: String,
    title: String,
    lede: String,
    date: String
  }
};
</script>


<style scoped>
@import "../assets/styles/variables.css";
</style>
