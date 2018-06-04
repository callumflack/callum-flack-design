<template lang="pug">
  nuxt-link.project.LinkSignal.block--mb5(:to="link")
    .project-text
      h1.Subtitle.m-t0
        span.LinkSignal-title {{ title }}
      p.Text(v-html="lede") 
</template>


<script>
export default {
  name: "post-excerpt",
  components: {},
  props: {
    post: Boolean,
    link: String,
    title: String,
    lede: String,
    published: String,
    date: String
  }
};
</script>


<style scoped>
@import "../assets/styles/variables.css";

.RuleMargin {
  margin-bottom: calc(1.25 * var(--s-3a));
}

.TimeMargin {
  margin-bottom: var(--s-3);
}
</style>
