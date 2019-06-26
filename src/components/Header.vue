<template>
  <header :class="headerClasses">

    <HeaderNav :siteTitle="siteTitle" />

    <div v-if="!$route.path.includes('posts')" class="Block">
      <div class="container container--text">
        <h1
          v-if="title"
          class="Display Display--post text-center s-h"
        >{{ title }}</h1>
        <p
          v-if="lede"
          v-html="lede"
          class="font-medium text-center w-2/3 mx-auto s-h"
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
import HeaderNav from "../components/HeaderNav";

export default {
  components: {
    ContactCard,
    HeaderNav
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
    headerClasses() {
      return [{
        "with-ContactCard": this.$route.path === '/about.html',
        "bg-brand-header": !this.$route.path.includes('posts')
      }]
    }
  }
}
</script>

<style lang="postcss" scoped>
.Block {
  padding-top: calc(theme(spacing.20) * var(--block-size-ratio));
}

.with-ContactCard {
  @apply relative;
  margin-bottom: calc(theme(spacing.20) * var(--block-size-ratio));
}

.with-ContactCard .Block {
  padding-bottom: calc(theme(spacing.32) * var(--block-size-ratio));
}

.ContactCard {
  @apply absolute w-full;
  transform: translateY(-50%);
}
</style>
