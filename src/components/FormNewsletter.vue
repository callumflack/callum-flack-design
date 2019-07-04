<template>
  <div class="w-full">
    <form class="Form" @submit.prevent="handleSubmit">
      <!-- <input
        v-model="formData.name"
        class="Input flex-1"
        type="text"
        name="name"
        placeholder="Your Name"
        required
      /> -->
      <input
        v-model="formData.email"
        class="Input flex-1"
        type="email"
        name="email"
        placeholder="Your email"
        required
      />
      <button class="Button Button--outline rounded-none">
        {{ successMsg }}
      </button>
    </form>
    <!-- <div v-if="successMsg" class="Form-validation is-good Input">
      <icon name="check-circle" class="mr-1" />
      <span>Thanks! You're all signed up.</span>
      <span>{{ successMsg }}</span>
    </div> -->
    <div v-if="errorMsg" class="Form-validation is-bad Input">
      <icon name="info" class="mr-1" />
      <span>{{ errorMsg }}</span>
    </div>
  </div>
</template>

<script>
/*
  https://github.com/jamesqquick/Learn-Build-Teach-Site/blob/master/src/components/newsletter.js
*/
export default {
  data() {
    return {
      subscribed: false,
      errorMsg: null,
      successMsg: "Sign up",
      formData: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    async subscribeToNewsletter(body) {
      const response = await fetch("/.netlify/functions/subscribe", {
        method: "post",
        body: JSON.stringify(body)
      });
      const json = await response.json();

      if (response.status !== 200) {
        // Return message from server
        return new Error(json.msg);
      }

      return json;
    },
    async handleSubmit() {
      this.errorMsg = "";
      this.successMsg = "";

      try {
        const response = await this.subscribeToNewsletter({
          email: this.formData.email,
          name: this.formData.name,
        });

        if (response instanceof Error) {
          this.errorMsg = response.message;
          return;
        }

        this.email = "";
        this.name = "";
        this.subscribed = true;
        this.successMsg = response.msg;
      } catch (error) {
        this.errorMsg = "Something went wrong… Please email us about this!";
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.Input {
  @apply border border-text rounded-l border-r-0;
}
.Button {
  @apply rounded-r;
}
</style>
