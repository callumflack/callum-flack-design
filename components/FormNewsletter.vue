<template lang="pug">
div
  form(
    action="https://patternworks.us13.list-manage.com/subscribe/post?u=027f0219cdd96399fb792993e&id=f1f20b580e",
    method="post", 
    name="mc-embedded-subscribe-form", 
    target='_blank', 
    novalidate=''
  )
    .Form-group
      input(
        placeholder="Your email address", 
        type="email", 
        name="EMAIL", 
        value="", 
        required
      )
      div(style="position: absolute; left: -5000px;", aria-hidden="true")
        input(
          type="text", 
          name="b_027f0219cdd96399fb792993e_f1f20b580e", 
          tabindex="-1", 
          value=""
        )
      button.Button.Button--transparent(
        type="submit", 
        name="subscribe", 
      ) {{buttonText}}
</template>

<script>
export default {
  name: "FormNews",

  computed: {
    buttonText() {
      // if (this.loading) {
      //   return "Loading";
      // } else if (this.formSent) {
      //   return "Sent";
      // }

      return "Stay in touch";
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/vars.css";
</style>
