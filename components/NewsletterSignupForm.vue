<template lang="pug">
  form.form.Text(
    action="https://design.us18.list-manage.com/subscribe/post?u=b6d465003f797d00bb8c2a7a0&id=3eb35e7129",
    method="post", 
    name="mc-embedded-subscribe-form", 
    target='_blank', 
    novalidate
  )
    .form-group
      input(
        placeholder="Add your email", 
        type="email", 
        name="EMAIL", 
        value=""
      )
      div(style="position: absolute; left: -5000px;", aria-hidden="true")
        input(
          type="text", 
          name="b_b6d465003f797d00bb8c2a7a0_3eb35e7129", 
          tabindex="-1", 
          value=""
        )
      button.Button.Button--transparent.Text(
        type="submit", 
        name="subscribe", 
      ) {{ buttonText }} 
      // #[span.LinkSignal-target →]
</template>

<script>
export default {
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

<style lang="postcss" scoped>
@import "../assets/styles/variables.css";
@import "../assets/styles/variables-dynamic.css";

.form-group {
  background-color: var(--c-white);
  border-top: 1px solid var(--c-text);
  display: flex;
  flex-direction: column;
  width: 100%;

  & * + * {
    margin: 0;
    margin-top: -1px;
  }

  @media (--sm) {
    flex-direction: row;

    & * + * {
      margin-left: -1px;
      margin-top: 0;
    }
  }
}

.form input {
  /* border-bottom: 1px solid var(--c-text); */
  box-shadow: none;
  color: var(--c-text);

  &:focus {
    /* border-color: var(--c-text); */
  }
}
</style>
