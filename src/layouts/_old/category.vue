<template>
  <Wrap :page="page" kind="index">
    <h1>
      {{ page.category ? `category: ${page.tag}` : page.title }}
    </h1>
    <div v-for="post in page.posts" :key="post.slug">
      <CardRow :post="post" />
    </div>
  </Wrap>
</template>

<script>
import CardRow from "../components/CardRow.vue";
import Wrap from "../components/Wrap.vue";

export default {
  components: {
    CardRow,
    Wrap,
  },
  props: ["page"],
};
</script>
