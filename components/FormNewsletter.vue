<template lang="pug">
.FormWrapper
  form.FormStroke(
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
      button.Button.Button--outline(
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

.FormWrapper {
  background-color: var(--color-highlight);
  background-color: var(--color-text);
  padding: 4px;

  @media (--small-viewport) {
    padding: 5px;
  }
}

.FormStroke {
  background-color: var(--color-bg);
  padding: 2px;

  @media (--small-viewport) {
    padding: 3px;
  }
}
</style>
