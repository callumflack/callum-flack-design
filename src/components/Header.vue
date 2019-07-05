<template>
  <header id="top">
    <HeaderNav :site-title="siteTitle" :category="category" />

    <!-- <div v-if="!$route.path.includes('blog')" class="Block"> -->
    <!-- home intro -->
    <div v-if="$route.path === '/'" class="Block">
      <div class="container container--text">
        <div class="lg:w-3/4">
          <h1 v-if="title" class="Display s-m">{{ title }}</h1>
          <p v-if="lede" class="Link Text--base text-gray s-h">
            {{ lede }}
            <saber-link v-if="$route.path === '/'" to="/about.html" class="text-text">
              Learn more &rightarrow;
            </saber-link>
          </p>
          <p v-if="newsletter" class="Link Text--base text-gray s-h">
            {{ newsletter }}
            <saber-link to="/about.html">
              Here's the archive.
            </saber-link>
          </p>
          <div class="w-full">
            <FormNewsletter />
          </div>
        </div>
      </div>
    </div>

    <!-- about card -->
    <div v-if="$route.path === '/about.html'" class="Block">
      <div class="container container--text">
        <CardContact :title="title" :lede="lede" />
      </div>
    </div>
  </header>
</template>

<script>
import CardContact from "../components/CardContact";
import FormNewsletter from "../components/FormNewsletter";
import HeaderNav from "../components/HeaderNav";

export default {
  components: {
    CardContact,
    FormNewsletter,
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
    newsletter: {
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

<style lang="postcss" scoped>
.Block {
  padding-top: calc(theme(spacing.20) * var(--block-size-ratio));
}
</style>
