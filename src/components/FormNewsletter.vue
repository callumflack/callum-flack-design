<template>
  <div>
    <form class="Form" :class="{ 'is-active': focused }" @submit.prevent="handleSubmit">
      <!-- flex-1 -->
      <input
        v-model="formData.email"
        class="Input Text"
        type="email"
        name="email"
        placeholder="Your email"
        required
        @focus="focused = true"
        @blur="focused = false"
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
      buttonMsg: "→",
      focused: false,
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

<style lang="postcss">
/*
  REVERSE THEME SETUP
  must be <html> to target with class
  requires new vars to avoid button.css clashes
*/
html {
  --form-button-color: theme(colors.gray.600);
  --form-placeholder-color: theme(colors.gray.600);
  --form-border-color: theme(colors.gray.400);
  --form-active-color: theme(colors.black);
}
</style>

<style lang="postcss" scoped>
.Form {
  transition: all 150ms cubic-bezier(0.7, 0, 0.3, 1);
}
/* with duplicated .Link styles */
.Form .Input,
.Form .Button {
  @apply border-0;
  @apply border-b;
  --button-height: 36px !important;
  --button-padding-x: 0;
  --button-color: var(--form-button-color);
  --button-border-color: var(--form-border-color);
  transition: all 150ms cubic-bezier(0.7, 0, 0.3, 1);
}
.Form .Input {
  flex-basis: 4.75em;
  transition: flex 200ms ease;
  will-change: flex;
}
.Form .Input::placeholder {
  /* color: var(--input-placeholder-color); */
  --input-placeholder-color: var(--form-placeholder-color);
}
.Form .Button {
  padding-left: 0.25em;
}

.Form:hover > *,
.Form.is-active > * {
  /* border-bottom-color: theme(colors.black); */
  --button-border-color: var(--form-active-color);
}
.Form.is-active .Input {
  --button-color: var(--form-active-color);
  flex-basis: 19em;
}
.Form:hover .Button,
.Form.is-active .Button {
  --button-color: var(--form-active-color);
}
</style>
