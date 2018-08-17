<template lang="pug">
div
  p Once or twice a month I write an email letter about "things inbetween"—the stories, ideas and links that I've found curious, resonating, <em>interesting</em>. 
  p While the subject matter is unapologetically broad, the lenses are wonder, design, writing and internet tech. It's for folks hungry to connect dots.
  form.form.Text.p-t2(
    action="https://design.us18.list-manage.com/subscribe/post?u=b6d465003f797d00bb8c2a7a0&id=3eb35e7129",
    method="post", 
    name="mc-embedded-subscribe-form", 
    target='_blank', 
    novalidate=''
  )
    .form-group
      input(
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
      button(
        :class="buttonClasses", 
        type="submit", 
        name="subscribe", 
      ) {{buttonText}} 
      // #[span.LinkSignal-target →]
</template>

<script>
export default {
  name: "FormNews",
  props: {
    reverse: Boolean
  },
  computed: {
    buttonClasses() {
      return [
        "Button",
        "Meta",
        {
          "Button--reverse": this.reverse
        }
      ];
    },
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
  border-bottom: 1px solid var(--c-text);
  box-shadow: none;
  color: var(--c-text);
  padding-left: 0;

  &:focus {
    border-color: var(--c-text);
  }
}
</style>
