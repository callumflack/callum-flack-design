<template>
  <header class="Nav">
    <nav class="container container--text flex">
      <saber-link class="Nav-link Text--sm" rel="author" to="/" exact>
        <span style="text-transform:initial">
          {{ siteTitle }}
        </span>
      </saber-link>
      <span class="Nav-link"><span>&centerdot;</span></span>
      <saber-link
        :key="index"
        class="Nav-link Text--sm"
        v-for="(navItem, index) in $themeConfig.nav"
        :to="navItem.link"
      >
        <span>
          {{ navItem.text }}
        </span>
      </saber-link>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    siteTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.Nav {
  @apply fixed top-0 left-0 w-full;
  backface-visibility: hidden;
}

.Nav-link {
  @apply inline-flex items-center;
  @apply font-sans font-semibold uppercase tracking-normal;
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
