<template lang="pug">
  footer.u-bgColorWhite(role="contentinfo")
    nuxt-link(:to="next")
      .Block--sandwichPadding
        .Container
          h1.Title.u-sm-size11of12
            span.Title--sub Next →
            br
            //- span(:style="projectColor") {{ page.title }}.&nbsp;
            span Oceanblue Living
</template>

<script>
export default {
  name: "NextProject",
  props: {
    next: String
    // projectColor: String,
    // title: String
  }
};
</script>

<style>

</style>

