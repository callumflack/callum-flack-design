<template>
  <Wrap :page="page" kind="post">
    <article
      class="Markdown"
      :class="{ 'Block-sm-t': this.$route.path !== '/about.html' }"
      itemprop="articleBody"
    >
      <slot name="default" />
    </article>
    <a class="u-url" :href="page.attributes.permalink" hidden></a>
  </Wrap>
</template>

<script>
import Wrap from "../components/Wrap.vue";

export default {
  components: {
    Wrap,
  },
  props: ["page"],
};
</script>
