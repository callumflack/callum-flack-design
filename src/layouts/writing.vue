<template>
  <Wrap :page="page">
    <IndexStaticSubnav></IndexStaticSubnav>
    <div class="st-m">
      <CardRow
        v-for="post in allWriting"
        :key="post.attributes.permalink"
        :post="post"
      ></CardRow>
    </div>
  </Wrap>
</template>

<script>
import CardRow from "../components/CardRow";
import IndexStaticSubnav from "../components/IndexStaticSubnav";
import Wrap from "../components/Wrap";

export default {
  components: {
    CardRow,
    IndexStaticSubnav,
    Wrap,
  },
  props: ["page"],
  computed: {
    allWriting() {
      return this.page.posts.filter(x => x.attributes.category === "writing");
    },
    // allWritingByYear() {
    //   // helper function to get the year value from an item
    //   const year = item => tinydate(item.attributes.date, {YYYY});
    // },
    // featuredWriting() {
    //   return this.allWriting.filter(x => x.attributes.tags.includes("featured"));
    // },
  },
};
</script>
