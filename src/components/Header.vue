<template>
  <header :class="headerClasses">

    <HeaderNav :siteTitle="siteTitle" :category="category" />

    <div v-if="!$route.path.includes('blog')" class="Block">
      <div class="container container--text">
        <h1
          v-if="title"
          class="Title s-m md:w-2/3"
        >{{ title }}</h1>
        <p
          v-if="lede"
          class="Text--sm text-gray md:w-2/3"
        >
          {{ lede }}
          <saber-link v-if="$route.path === '/'" to="/about.html" class="text-text">
            Learn more &rightarrow;
          </saber-link>
        </p>
      </div>
    </div>

    <div v-if="$route.path === '/about.html'" class="ContactCard">
      <div class="container container--list">
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
    },
    category: {
      type: String,
      required: false
    },
  },
  computed: {
    headerClasses() {
      return [{
        "with-contactCard": this.$route.path === '/about.html'
        // "bg-brand-header": !this.$route.path.includes('blog')
      }]
    }
  }
}
</script>

<style lang="postcss">

</style>


<style lang="postcss" scoped>
.Header {
  @apply bg-brand-header;
}

/* .Header * {
  @apply text-white;
} */

.Block {
  padding-top: calc(theme(spacing.20) * var(--block-size-ratio));
}

.with-contactCard {
  @apply relative;
  margin-bottom: calc(theme(spacing.20) * var(--block-size-ratio));
}

.with-contactCard .Block {
  padding-bottom: calc(theme(spacing.40) * var(--block-size-ratio));
}

.ContactCard {
  @apply absolute w-full;
  transform: translateY(-50%);
}
</style>
