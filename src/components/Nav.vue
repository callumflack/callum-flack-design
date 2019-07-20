<template>
  <headroom :speed="500">
    <nav class="Nav">
      <div class="container container--text relative">
        <!-- <div class="">
      </div> -->
        <saber-link to="/" exact class="Nav-logo Nav-link Meta font-medium">
          <span style="text-transform:initial">
            CFd
          </span>
        </saber-link>
        <saber-link
          v-for="(item, index) in $themeConfig.nav"
          :key="index"
          :to="item.link"
          class="Nav-link Meta font-medium"
          :class="{ 'is-active': item.text === category }"
        >
          <span>
            {{ item.text }}
          </span>
        </saber-link>
        <!-- <saber-link class="Nav-link Meta pl-4" rel="author" to="/" exact>
        <template v-if="$route.path !== '/'">
          <span class="Logo-arrow mr-1">&#8592;</span>
        </template>
        <span style="text-transform:initial">CFd</span>
      </saber-link> -->
      </div>
    </nav>
  </headroom>
</template>

<script>
import { headroom } from "vue-headroom";

export default {
  components: {
    headroom,
  },
  props: {
    /* siteTitle: {
      type: String,
      required: true
    }, */
    category: {
      type: String,
    },
  },
};
</script>

<style lang="postcss">
.headroom--not-top {
  /* @apply bg-text text-white; */
  /* @apply bg-brand-bg border-b; */
  top: calc(theme(spacing.3) * var(--space-ratio) * -1) !important;
}
</style>

<style lang="postcss" scoped>
/* .Nav {
  @apply fixed top-0 left-0 w-full;
  backface-visibility: hidden;
} */

.Nav {
  @apply bg-brand-bg border-b;
}

.Nav-link {
  @apply inline-flex items-center;
  height: calc((theme(spacing.16) + 0.5rem) * var(--space-ratio));
  padding-top: calc(theme(spacing.3) * var(--space-ratio));
}

.Nav-link + .Nav-link {
  margin-left: calc(theme(spacing.4) * var(--space-ratio));
}

.Nav-link span {
  @apply relative;
}
.Nav-link span:after {
  @apply absolute w-full bg-transparent left-0;
  content: "";
  height: 3px;
  transform: translateY(1.85em);
}

.is-active span:after,
.router-link-exact-active span:after {
  @apply bg-text;
}

/* LOG0 */
.Nav-logo {
  /* @apply absolute; */
  @apply pr-5 mr-1;
  padding-right: calc(theme(spacing.5) * var(--space-ratio) - 1px);
  @apply border-r;
  margin-left: -40px;
}
</style>
