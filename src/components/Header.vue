<template>
  <header>

    <HeaderNav :siteTitle="siteTitle" :category="category" />

    <!-- <div v-if="!$route.path.includes('blog')" class="Block"> -->
    <div v-if="$route.path === '/'" class="Block">
      <div class="container container--text">
        <h1 v-if="title" class="Display s-m md:w-3/4" >{{ title }}</h1>
        <p v-if="lede" class="Link Text--base text-gray md:w-3/4">
          {{ lede }}
          <saber-link v-if="$route.path === '/'" to="/about.html" class="text-text">
            Learn more &rightarrow;
          </saber-link>
        </p>
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
import HeaderNav from "../components/HeaderNav";

export default {
  components: {
    CardContact,
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

<style lang="postcss" scoped>
.Block {
  padding-top: calc(theme(spacing.20) * var(--block-size-ratio));
}
</style>
