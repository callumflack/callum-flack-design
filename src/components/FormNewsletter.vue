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
      // buttonMsg: "Yes please",
      buttonMsg: "→",
      focused: false,
      formData: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    /* updateValue(e) {
      this.$emit("input", e.target.value);
    },
    // can also do @blur="isActive = false" on <input>
    onFocus() {
      this.$emit("focus", (this.isActive = true));
      // this.$refs.input.$el.addClass()
    },
    onBlur() {
      this.$emit("blur", (this.isActive = false));
    }, */
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
.Form {
  transition: all 150ms cubic-bezier(0.7, 0, 0.3, 1);
}
/* with duplicated .Link styles */
.Input,
.Button {
  @apply border-0;
  @apply border-b;
  --button-height: 36px !important;
  --button-padding-x: 0;
  --button-color: theme(colors.gray.600);
  border-bottom-color: theme(colors.gray.400);
  transition: all 150ms cubic-bezier(0.7, 0, 0.3, 1);
}
.Input {
  flex-basis: 4.75em;
  transition: flex 200ms ease;
  will-change: flex;
  /* @apply w-auto; */
}
.Button {
  padding-left: 0.25em;
}

.Form:hover > *,
.Form.is-active > * {
  border-bottom-color: theme(colors.black);
}
.Form.is-active .Input {
  --button-color: theme(colors.black);
  flex-basis: 19em;
}
.Form:hover .Button,
.Form.is-active .Button {
  --button-color: theme(colors.black);
}
</style>
