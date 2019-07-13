<template>
  <headroom :speed="500">
    <nav class="container container--list">
      <saber-link class="Nav-link w-full" rel="author" to="/" exact>
        <span v-if="$route.path !== '/'" class="Logo-arrow mr-1">&#8592;</span>
        <span style="text-transform:initial">CFd</span>
      </saber-link>
    </nav>
  </headroom>
</template>

<script>
import { headroom } from "vue-headroom";

export default {
  components: {
    headroom
  },
};
</script>

<style lang="postcss">
.headroom--not-top {
  @apply bg-brand-bg border-b;
}
</style>
