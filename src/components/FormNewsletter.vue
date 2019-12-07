<template>
  <div class="md:w-5/6">
    <form class="Form" @submit.prevent="handleSubmit">
      <!-- flex-1 -->
      <input
        v-model="formData.email"
        class="Input Text"
        type="email"
        name="email"
        placeholder="Subscribe to project updates"
        required
      />
      <button class="Button Button--invisible Text">{{ buttonMsg }}</button>
    </form>
    <!-- <div v-if="buttonMsg" class="Form-validation is-good Input">
      <icon name="check-circle" class="mr-1" />
      <span>Thanks! You're all signed up.</span>
      <span>{{ buttonMsg }}</span>
    </div>-->
    <div v-if="errorMsg" class="Form-validation is-bad Input">
      <icon name="info" class="mr-1" />
      <span>{{ errorMsg }}</span>
    </div>

    <!-- test substack -->
    <!-- <iframe
      width="100%"
      height="320"
      src="https://thelittoralline.substack.com/embed"
      frameborder="0"
      scrolling="no"
    ></iframe>-->
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
      // buttonMsg: "Yes please",
      buttonMsg: "→",
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
        body: JSON.stringify(body),
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
      this.buttonMsg = "Sending…";

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
        this.buttonMsg = response.msg;
      } catch (error) {
        this.buttonMsg = "Oh no";
        this.errorMsg = "Something went wrong… Please email us about this!";
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
/* with duplicated .Link styles */
.Input,
.Button {
  --button-height: 36px !important;
  --button-padding-x: 0;
  --button-color: theme(colors.gray.600);
  border-bottom-color: currentColor;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgba(0, 0, 0, 0);
  transition: all 150ms cubic-bezier(0.7, 0, 0.3, 1);
}
.Input {
  @apply border-b;
  @apply w-auto;
}
.Form:hover .Input,
.Form:hover .Button {
  border-bottom-color: theme(colors.black);
}
.Input:hover,
.Input:focus {
  --button-color: theme(colors.black);
  border-bottom-color: theme(colors.black);
}
.Button:hover,
.Button:focus {
  --button-color: theme(colors.black);
}
</style>
