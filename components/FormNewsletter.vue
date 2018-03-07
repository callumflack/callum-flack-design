<template lang="pug">
div
  h2.title.title--ruled Subscribe
  p I send an occassional email newsletter with notes of the stories and links about designing great interfaces that I've found worthwhile, and why they resonate. You should sign up:
  //- .formWrapper
  form.form.text(
    action="https://patternworks.us13.list-manage.com/subscribe/post?u=027f0219cdd96399fb792993e&id=f1f20b580e",
    method="post", 
    name="mc-embedded-subscribe-form", 
    target='_blank', 
    novalidate=''
  )
    .form-group
      input(
        placeholder="Your email", 
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
      button.Button.Button--transparent.linkSignal(
        type="submit", 
        name="subscribe", 
      ) {{buttonText}} #[span.linkSignal-target →]
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
@import "../assets/styles/variables.css";

.form {
  @media (--medium-viewport) {
    width: 50%;
  }
}

.form input {
  border-bottom: 1px solid var(--c-border);
  box-shadow: none;
  padding-left: 0;

  &:focus {
    border-color: var(--c-text);
  }
}

.form .Button {
  @media (max-width: 512px) {
    text-align: right;
    padding-right: 0;
  }
}
</style>
