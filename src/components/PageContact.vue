<template>
  <div>
    <h2 class="Heading Heading-4xl font-medium">Callum Flack Design</h2>
    <p class="Space-t">{{ about }}</p>
    <p class="Text Link">
      <a :href="`mailto:${contact.email}`">
        <span>Type: </span>
        <span>{{ contact.email }}</span>
      </a>
    </p>
    <p class="Text Link">
      <a :href="`tel:0${contact.phone.replace(' ', '-')}`">
        <span>Talk: </span>
        <span>+61(0) {{ contact.phone }}</span>
      </a>
    </p>
    <div class="Space-y">
      <p>Keep in touch. Subscribe to project updates:</p>
      <FormNewsletter class=""></FormNewsletter>
    </div>
    <p class="Text-xs">© Callum Flack Design 2015–{{ new Date().getFullYear() }}</p>
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
    lede:
      "CF/BPH is a co-op between Callum Flack and Barry Phillip Hall. We work remotely from Cairns, Australia and Christchurch, New Zealand respectively. Good work starts with knowing you and your imagined tomorrow <span class='tracking-hyphen'>——</span> contact Callum to discuss new projects:",
    contact: {
      email: "callum@callumflack.design",
      phone: "408 767 540",
    },
  }),
};
</script>
