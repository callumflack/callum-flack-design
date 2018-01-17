<template lang="pug">
//- .formWrapper
form.form(
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
@import "../assets/styles/vars.css";

.form {
  @media (--medium-viewport) {
    width: 50%;
  }
}

input {
  border-bottom: 1px solid var(--color-border);
  box-shadow: none;
  padding-left: 0;

  &:focus {
    border-color: var(--color-title);
  }
}
</style>
