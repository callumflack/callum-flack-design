<template lang="pug">
  form(action='https://formspree.io/vince@oceanblueboats.com.au', method='post', @submit.prevent='handleSubmit') 
    .Form-group.Text
      input(placeholder='Your email address', type='email', name='email', v-model='email', required)
      button(:class='buttonClass', type='submit', :disabled='loading || formSent') {{buttonText}}
</template>

<script>
export default {
  name: "form-contact",

  data() {
    return {
      plainNewsletterButton: false,
      name: "",
      email: "",
      message: "",
      formSent: false,
      loading: false
    };
  },

  computed: {
    buttonClass() {
      return [
        "Button",
        {
          "u-bgColorTransparent": this.plainNewsletterButton
        }
      ];
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
