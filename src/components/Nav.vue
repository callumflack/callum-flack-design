<template>
  <headroom :speed="500">
    <nav class="Nav">
      <div class="container container--text relative">
        <saber-link to="/" exact class="Nav-logo Nav-link Meta">
          <span style="text-transform:initial">
            CFd
          </span>
        </saber-link>
        <saber-link
          v-for="(item, index) in $themeConfig.nav"
          :key="index"
          :to="item.link"
          class="Nav-link Meta"
          :class="{ 'is-active': item.text === category }"
        >
          <span>
            {{ item.text }}
          </span>
        </saber-link>
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
    category: {
      type: String,
    },
  },
};
</script>

<style lang="postcss">
.headroom--not-top {
  top: calc(theme(spacing.3) * var(--space-ratio) * -1) !important;
}
</style>

<style lang="postcss" scoped>
.Nav {
  @apply bg-brand-bg border-b;
}

.Nav-link {
  @apply inline-flex;
  height: calc((theme(spacing.16) + 0.5rem) * var(--space-ratio));
}

.Nav-link + .Nav-link {
  margin-left: calc(theme(spacing.4) * var(--space-ratio));
}

.Nav-link span {
  @apply relative h-full;
  @apply inline-flex items-center;
  padding-top: calc(theme(spacing.3) * var(--space-ratio));
}
.Nav-link span:after {
  @apply absolute w-full bg-transparent left-0 bottom-0;
  content: "";
  height: 3px;
  transform: translateY(1px);
}

.is-active span:after,
.router-link-exact-active span:after {
  @apply bg-text;
}

/* LOG0 */
.Nav-logo {
  @apply mr-1;
  @apply border-r;
  padding-right: calc(theme(spacing.5) * var(--space-ratio) - 1px);
}
@media (min-width: 657px) {
  .Nav-logo {
    margin-left: -40px;
  }
}
</style>
