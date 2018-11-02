<template lang="pug">
  form.form.Meta.p-t2(
    action="https://design.us18.list-manage.com/subscribe/post?u=b6d465003f797d00bb8c2a7a0&id=3eb35e7129",
    method="post", 
    name="mc-embedded-subscribe-form", 
    target='_blank', 
    novalidate=''
  )
    .form-group
      input.Meta(
        placeholder="Add your email", 
        type="email", 
        name="EMAIL", 
        value="", 
        required
      )
      div(style="position: absolute; left: -5000px;", aria-hidden="true")
        input(
          type="text", 
          name="b_b6d465003f797d00bb8c2a7a0_3eb35e7129", 
          tabindex="-1", 
          value=""
        )
      button.Button.Meta(
        type="submit", 
        name="subscribe", 
      ) {{buttonText}} 
      // #[span.LinkSignal-target →]
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

      return "Subscribe";
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";

.form {
}

.form input {
  background-color: var(--c-white);
  border: 1px solid var(--c-text);
  box-shadow: none;
  color: var(--c-text);

  &:focus {
    border-color: var(--c-text);
  }
}

.form input + button {
}
</style>
