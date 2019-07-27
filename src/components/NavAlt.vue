<template>
  <headroom :speed="500">
    <nav class="flex justify-between px-12">
      <saber-link class="Nav-link Title" rel="author" to="/" exact>
        <!-- <span class="Logo-arrow mr-1">&#8592;</span> -->
        <span style="text-transform:initial">CFd</span>
      </saber-link>
      <saber-link v-if="$route.path !== '/'" class="Nav-link Title" to="/" exact>
        <span class="Logo-arrow mr-1">&#215;</span>
        <span style="text-transform:initial">Close</span>
      </saber-link>
    </nav>
  </headroom>
</template>

<script>
import { headroom } from "vue-headroom";

export default {
  components: {
    headroom,
  },
};
</script>

<style lang="postcss">
/* .headroom--not-top {
  @apply bg-brand-bg border-b;
} */

nav {
  /* @apply absolute; */
}
</style>
