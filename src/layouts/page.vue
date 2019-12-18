<template>
  <Wrap :page="page">
    <!-- :invert="$route.path === '/about'" -->
    <PageTitle :page="page"></PageTitle>
    <main class="frame frame--article">
      <article class="Markdown frame-area-a" itemprop="articleBody">
        <slot name="default" />
      </article>
    </main>
  </Wrap>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import Wrap from "../components/Wrap";

export default {
  components: {
    PageTitle,
    Wrap,
  },
  props: ["page"],
};
</script>
