<template>
  <Wrap :page="page">
    <PageTitle :page="page"></PageTitle>
    <main class="frame frame--article Block2-b">
      <article class="Markdown frame-area-a" itemprop="articleBody">
        <slot name="default" />
      </article>
    </main>
  </Wrap>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import Wrap from "../components/Wrap2";

export default {
  components: {
    PageTitle,
    Wrap,
  },
  props: ["page"],
};
</script>
