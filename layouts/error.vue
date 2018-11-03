<template lang="pug">
.Content
  section.b-pt1.b-pb3
    .Container.Header--animate
      .c-block-bg
        .w-sm-10x12.m-xA
          h1.Title.fw-regular.u-textCenter(v-if="error.statusCode === 404") Page not found
          h1.Title.fw-regular.u-textCenter(v-else) An error occurred
          p.ff-title.u-textCenter 
            nuxt-link(to="/") Start again at the home page →
</template>

<script>
// See also: https://github.com/nuxt/nuxt.js/blob/dev/packages/app/template/components/nuxt-error.vue
export default {
  props: ["error"],
  layout: "default" // you can set a custom layout for the error page
};
</script>