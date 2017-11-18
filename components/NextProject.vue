<template lang="pug">
  footer.u-bgColorWhite(role="contentinfo")
    router-link(:to="next")
      .Block--sandwichPadding
        .Container
          h1.Title.u-sm-size11of12
            span.Title--sub Next project →
            br
            //- span(:style="projectColor") {{ page.title }}.&nbsp;
            span(style="color:rgb(17, 89, 192)") Oceanblue Living.&nbsp;
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

