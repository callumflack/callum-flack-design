<template>
  <Wrap :page="page">
    <header class="frame frame--lede Block2-t">
      <h1 class="Text-sm frame-area-a">{{ page.title }}</h1>
      <p class="Block2-sm-t frame-area-b">{{ page.lede }}</p>
    </header>
    <main class="frame frame--article Block2">
      <article
        class="Markdown frame-area-a"
        :class="{ 'Block-sm-t': this.$route.path !== '/about' }"
        itemprop="articleBody"
      >
        <slot name="default" />
      </article>
    </main>
  </Wrap>
</template>

<script>
import Wrap from "../components/Wrap2";

export default {
  components: {
    Wrap,
  },
  props: ["page"],
};
</script>
