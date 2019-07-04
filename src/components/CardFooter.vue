<template>
  <section class="Grid-extract--edge bg-brand-neutral">
    <div class="container container--text">
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
    </div>
  </section>
</template>

<script>
import FormNewsletter from "./FormNewsletter";

export default {
  components: {
    FormNewsletter
  },
}
</script>

<style lang="postcss" scoped>
.Card {
  @apply overflow-hidden;
  @apply border border-text rounded-lg;
  /* @apply bg-brand-highlight; */
}
</style>

