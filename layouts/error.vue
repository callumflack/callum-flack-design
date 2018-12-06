<template lang="pug">
div  
  section.b-ptTitle
    .Container.Header--animate
      h1.Supertitle(v-if="error.statusCode === 404") Unfortunately, I've probably removed that page or stuffed around with it's location. Sorry.
      h1.Supertitle(v-else) An error occurred
      p 
        nuxt-link(to="/") Start again at the home page →
</template>

<script>
// See also: https://github.com/nuxt/nuxt.js/blob/dev/packages/app/template/components/nuxt-error.vue
export default {
  props: ["error"],
  layout: "default" // you can set a custom layout for the error page
};
</script>