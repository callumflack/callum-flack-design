<template lang="pug">
.p-t2
  form.Text(v-if="!formSubmitted" @submit.prevent="handleSubmit")
    .form-group
      input.Meta(v-model="email" name="EMAIL" type="email" placeholder="Add your email" id="email")
      button.Button.Meta(type="submit" name="subscribe") {{buttonText}} 
  //- p(v-if="errorMessage && !successMessage") {{ errorMessage }}
  //- p(v-if="successMessage") {{ successMessage }}
</template>

<script>
// https://gist.github.com/chrsgrffth/fa69fa9874871c8b52afc01d1a881e6d
// const FORMSPREE_ID = "xjrqnwax";

export default {
  name: "NewsletterSignupForm",
  props: {
    /* your mailchimp form action */
    action: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      email: "",
      response: {},
      formSubmitted: false,
      errorMessage: null,
      successMessage: null
    };
  },
  computed: {
    buttonText() {
      // if (this.loading) {
      //   return "Loading";
      // } else if (this.formSent) {
      //   return "Sent";
      // }
      return "Subscribe";
    }
  },
  mounted() {
    // We need to receive jsonp from Mailchimp.
    // So we update the action string.
    return (this.action = this.action.replace("/post?", "/post-json?").concat("&c=?"));
  },
  methods: {
    // subscribe(e) {
    //   const params = $(e.currentTarget).serialize();

    //   return $.ajax({
    //     type: "POST",
    //     url: this.action,
    //     data: params,
    //     dataType: "jsonp",
    //     success: res => {
    //       if (res.result === "success") {
    //         return (this.successMessage = res.msg);
    //       } else {
    //         this.errorMessage = res.msg;

    //         // Mailchimp returns error messages prefixed with numbers (ie "0 - Message"), so we'll
    //         // strip that out for the end user.
    //         return (this.errorMessage = this.errorMessage.substring(
    //           this.errorMessage.indexOf("-") + 1,
    //           this.errorMessage.length
    //         ));
    //       }
    //     }
    //   });
    // },

    async handleSubmit() {
      // const url = `https://formspree.io/${FORMSPREE_ID}`;
      const url = this.action;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.email
        })
      }).then(response => response.json());

      this.formSubmitted = true;
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";

.form {
}

.form input {
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
