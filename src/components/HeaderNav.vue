<template>
  <headroom :speed="500">
    <!-- <nav class="flex"> -->
    <nav class="container container--list">
      <div>
        <saber-link
          v-for="(item, index) in $themeConfig.nav"
          :key="index"
          :to="item.link"
          class="Nav-link Meta font-medium"
        >
          <!-- :class="{ 'is-active': item.text === category }" -->
          <span>
            {{ item.text }}
          </span>
        </saber-link>
      </div>
      <!-- <saber-link class="Nav-link Meta pl-4" rel="author" to="/" exact>
        <template v-if="$route.path !== '/'">
          <span class="Logo-arrow mr-1">&#8592;</span>
        </template>
        <span style="text-transform:initial">CFd</span>
      </saber-link> -->
    </nav>
  </headroom>
</template>

<script>
import { headroom } from "vue-headroom";

export default {
  components: {
    headroom,
  },
  /* props: {
    siteTitle: {
      type: String,
      required: true
    },
    category: {
      type: String
    }
  } */
};
</script>

<style lang="postcss">
.headroom--not-top {
  @apply bg-text text-white;
}
</style>

<style lang="postcss" scoped>
/* .Nav {
  @apply fixed top-0 left-0 w-full;
  backface-visibility: hidden;
} */

.Nav-link {
  @apply inline-flex items-center;
  height: calc(theme(spacing.16) * var(--space-ratio));
}

.Nav-link + .Nav-link {
  margin-left: calc(theme(spacing.4) * var(--space-ratio));
}

.Nav-link span {
  @apply relative;
}
/* .Nav-link span:after {
  @apply absolute w-full h-px bg-transparent left-0;
  content: "";
  transform: translateY(1.9em);
} */

.Nav-logo {
  @apply px-2;
}
/* .Nav-logo:hover,
.router-link-exact-active {
  @apply bg-text text-white;
} */
.Nav-logo + .Nav-logo {
  @apply ml-px;
}

.is-active span:after,
.router-link-exact-active span:after {
  @apply bg-text;
}
</style>
