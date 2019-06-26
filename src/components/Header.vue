<template>
  <header class="bg-brand-header" :class="aboutPageClass">
    <nav class="Nav">
      <div class="container container--text flex justify-between">
        <!-- <span class="Nav-link"><span>&centerdot;</span></span> -->
        <div>
          <saber-link
            :key="index"
            class="Nav-link Meta"
            v-for="(navItem, index) in $themeConfig.nav"
            :to="navItem.link"
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
      </div>
    </nav>

    <div v-if="!$route.path.includes('posts')" class="Block--header">
      <div class="container container--text">
        <h1
          v-if="title"
          class="Display Display--post text-center s-h"
        >{{ title }}</h1>
        <p
          v-if="lede"
          v-html="lede"
          class="text-center w-2/3 mx-auto s-h"
        ></p>
      </div>
    </div>

    <div v-if="$route.path === '/about.html'" class="ContactCard">
      <div class="container container--text">
        <ContactCard v-if="$route.path === '/about.html'" />
      </div>
    </div>

  </header>
</template>

<script>
import ContactCard from "../components/ContactCard";

export default {
  components: {
    ContactCard
  },
  props: {
    siteTitle: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
      default: "Page title"
    },
    lede: {
      type: String,
      required: false
    }
  },
  computed: {
    aboutPageClass() {
      return this.$route.path === '/about.html' && "with-ContactCard";
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

.Block--header {
  padding-top: calc(theme(spacing.40) * var(--block-size-ratio));
  padding-bottom: calc(theme(spacing.20) * var(--block-size-ratio));
}

.with-ContactCard {
  @apply relative;
  margin-bottom: calc(theme(spacing.20) * var(--block-size-ratio));
}

.with-ContactCard .Block--header {
  padding-bottom: calc(theme(spacing.32) * var(--block-size-ratio));
}

.ContactCard {
  @apply absolute w-full;
  transform: translateY(-50%);
}
</style>
