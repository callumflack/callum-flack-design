<template>
  <div>
    <h2 class="Heading Heading-4xl font-medium">Callum Flack Design</h2>
    <p class="Space-t Space-sm">{{ about }}</p>
    <p class="Text Link mb-2px">
      <a :href="`mailto:${contact.email}`">
        <span class="Text-contact-type">E: </span>
        <span>{{ contact.email }}</span>
      </a>
    </p>
    <p class="Text Link">
      <a :href="`tel:0${contact.phone.replace(/ /g, '-')}`">
        <span class="Text-contact-type">T: </span>
        <span>+61(0) {{ contact.phone }}</span>
      </a>
    </p>
    <div class="Space-t Space-lg">
      <p class="Text mb-2">{{ signup }}</p>
      <FormNewsletter></FormNewsletter>
    </div>
    <p class="Text-xs text-gray-dark">
      © Callum Flack Design 2015–{{ new Date().getFullYear() }}
    </p>
  </div>
</template>

<script>
import FormNewsletter from "../components/FormNewsletter";

export default {
  components: {
    FormNewsletter,
  },
  props: {},
  data: () => ({
    about: "To discuss new projects, contact Callum:",
    signup: "Keep in touch. Subscribe to new work updates:",
    contact: {
      email: "callum@callumflack.design",
      phone: "408 767 540",
    },
  }),
};
</script>

<style lang="postcss" scoped>
.Text-contact-type {
  @apply inline-block;
  font-size: 85%;
  width: 1.2em;
}
</style>
