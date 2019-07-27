<template>
  <Wrap :page="page" kind="index">
    <IndexStaticSubnav></IndexStaticSubnav>
    <div class="st-m">
      <CardRowIssue
        v-for="(issue, index) in page.attributes.issues"
        :key="index"
        :issue="issue"
      />
    </div>
  </Wrap>
</template>

<script>
import CardRowIssue from "../components/CardRowIssue.vue";
import IndexStaticSubnav from "../components/IndexStaticSubnav.vue";
import Wrap from "../components/Wrap.vue";

export default {
  components: {
    CardRowIssue,
    IndexStaticSubnav,
    Wrap,
  },
  props: ["page"],
};
</script>
