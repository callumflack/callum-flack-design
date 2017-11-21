<template lang="pug">
  form(
    action="https://patternworks.us13.list-manage.com/subscribe/post?u=027f0219cdd96399fb792993e&id=f1f20b580e",
    method="post", 
    name="mc-embedded-subscribe-form", 
    @submit.prevent="handleSubmit"
  )
    .Form-group.Meta
      input(
        placeholder="Your email address", 
        type="email", 
        name="EMAIL", 
        value="", 
        v-model="email", 
        required
      )
      div(style="position: absolute; left: -5000px;", aria-hidden="true")
        input(
          type="text", 
          name="b_027f0219cdd96399fb792993e_f1f20b580e", 
          tabindex="-1", 
          value=""
        )
      button(
        :class="buttonClass", 
        type="submit", 
        name="subscribe", 
        :disabled="loading || formSent",
      ) {{buttonText}}
</template>

<script>
export default {
  name: "FormNews",

  data() {
    return {
      name: "",
      email: "",
      message: "",
      formSent: false,
      loading: false
    };
  },

  computed: {
    buttonClass() {
      return ["Button"];
    },
    buttonText() {
      if (this.loading) {
        return "Loading";
      } else if (this.formSent) {
        return "Sent";
      }

      return "Stay in touch";
    }
  },

  methods: {
    async handleSubmit(event) {
      this.loading = true;

      await fetch("https://formspree.io/hi@callumflack.com.au", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message
        })
      });

      this.loading = false;
      this.formSent = true;
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/vars.css";
</style>
