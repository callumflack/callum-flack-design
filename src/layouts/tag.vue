<template>
  <Wrap :page="page" kind="index">
    <h1>
      {{ page.tag ? `Tag: ${page.tag}` : page.title }}
    </h1>
    <div v-for="post in page.posts" :key="post.slug">
      <CardRow :post="post" />
    </div>

    <!-- <div
        class="pagination"
        v-if="page.pagination && (page.pagination.hasNext || page.pagination.hasPrev)"
      >
        <router-link
          class="prev-link"
          :to="page.pagination.prevLink"
          v-if="page.pagination.hasPrev"
        >← Previous</router-link>
        <router-link
          class="next-link"
          :to="page.pagination.nextLink"
          v-if="page.pagination.hasNext"
        >Next →</router-link>
      </div>-->

    <!-- <p class="feed-subscribe" v-if="$feed">
        <a :href="$feed.permalink">Subscribe</a>
      </p>-->
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
