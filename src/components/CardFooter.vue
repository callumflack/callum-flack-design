<template>
  <section>
    <div class="Sun relative flex justify-center items-center">
      <icon
        name="sun"
        height="2em"
        width="2em"
      />
    </div>
    <div class="Card">
      <div class="p-4 lg:p-6 border-b border-text">
        <!-- <h3 class="Display s-h">Ps.</h3> -->
        <p class="s-2xh Link">
          Ps. You're on
          <saber-link to="/about.html">Callum Flack's website.</saber-link>
          He also writes a bi-monthly email letter about design, UX and the web through the lens of people and attention.
          <saber-link to="/about.html">Here's the archives.</saber-link>
          Since you made it this far, you should probably sign up:
        </p>
      </div>
      <FormNewsletter />
    </div>
  </section>
</template>

<script>
import FormNewsletter from "./FormNewsletter";
// import Vue from "vue";
// import SvgIcon from 'vue-svgicon';
import '../components/icons/sun';

/* Vue.use(SvgIcon, {
  tagName: "icon",
  isOriginalDefault: true,
  defaultWidth: "2em",
  defaultHeight: "2em",
}); */

export default {
  components: {
    FormNewsletter
  },
}
</script>

<style lang="postcss" scoped>
.Sun {
  height: calc(theme(spacing.64) * var(--block-size-ratio));
}

/* .Sun svg {
  @apply border border-text rounded-full p-2;
} */

.Card {
  @apply overflow-hidden;
  @apply border border-text rounded-lg;
  /* @apply bg-brand-highlight; */
}
</style>

