<template lang="pug">
  .w100
    nuxt-link.project.linkSignal.block--half(:to="link")
      figure.project-image
        img(v-if="image", :src="image")
      .project-text
        h2.title.title--ruled {{ title }}
          span.linkSignal-target &nbsp;→
        p.text(v-html="lede") 
          
        //- p.project-subtext.textscope-reset
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
@import "../assets/styles/vars.css";

.w100:last-child {
  & .project {
    margin-bottom: 0 !important;
  }
}
</style>
