<template>
  <footer class="Block-lg flex relative" :class="blockColorClass">
    <saber-link :to="link" exact class="Meta block h-full" :class="homeLinkClass">
      <template v-if="$route.path === '/'">
        <span class="Logo-arrow mr-1">&#8593;</span>
        <span>up</span>
      </template>
      <template v-else>
        <span class="Logo-arrow mr-1">&#8592;</span>
        <span style="text-transform:initial">CFd</span>
      </template>
    </saber-link>
    <a
      v-if="$route.path.includes('blog')"
      :href="`https://twitter.com/${this.$siteConfig.social.twitter}`"
      target="_blank"
      rel="noopener noreferrer"
      class="Meta block h-full w-1/2 pl-2"
    >
      <span style="text-transform:initial">Tw</span>
      <span class="Logo-arrow ml-1">&#8594;</span>
    </a>
  </footer>
</template>

<script>
export default {
  props: {
    kind: String,
  },
  computed: {
    blockColorClass() {
      return this.kind === "index" && "bg-brand-neutral";
    },
    homeLinkClass() {
      return this.$route.path.includes("blog")
        ? "text-right w-1/2 pr-2"
        : "text-center w-full";
    },
    link() {
      return this.$route.path === "/" ? "#top" : "/";
    },
  },
};
</script>
