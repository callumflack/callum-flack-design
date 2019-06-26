<template>
  <headroom :speed="500">
    <nav class="container container--text flex justify-between">
      <div>
        <saber-link
          v-for="(navItem, index) in $themeConfig.nav"
          :key="index"
          :to="navItem.link"
          class="Nav-link Meta"
        >
          <span>
            {{ navItem.text }}
          </span>
        </saber-link>
      </div>
      <saber-link class="Nav-link Meta" rel="author" to="/" exact>
        <span style="text-transform:initial">
          {{ siteTitle }}
        </span>
      </saber-link>
    </nav>
  </headroom>
</template>

<script>
import { headroom } from 'vue-headroom'

export default {
  components: {
    headroom
  },
  props: {
    siteTitle: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang="postcss">
.headroom--not-top {
  @apply bg-brand-bg border-b;
}
</style>

<style lang="postcss" scoped>
/* .Nav {
  @apply fixed top-0 left-0 w-full;
  backface-visibility: hidden;
} */

.Nav-link {
  @apply inline-flex items-center;
  height: calc(theme(spacing.24) * var(--space-ratio));
  background-image: none !important;
  text-shadow: none !important;
}

.Nav-link,
.Nav-link:hover {
  @apply no-underline;
}

.Nav-link + .Nav-link {
  margin-left: calc(theme(spacing.4) * var(--space-ratio));
}

.Nav-link span {
  @apply border-b border-transparent pb-2px;
}

.Nav-link:hover span,
.router-link-active span {
  @apply border-black;
}
</style>

