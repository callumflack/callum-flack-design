<template lang="pug">
  nuxt-link.project.linkSignal.block--mb6(:to="link")
    //- figure.project-image(v-if="image")
      img(:src="image")
    .project-text
      h1.heading {{ heading }}
        //- span.linkSignal-target &nbsp;→
      p.text(v-html="lede") 
        
      //- p.project-subtext.project-scope-reset
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
    heading: String,
    lede: String,
    date: String
  }
};
</script>


<style scoped>
@import "../assets/styles/variables.css";
</style>
