<template>
  <Wrap :page="page" kind="index">
    <div class="Grid-extract--edge bg-brand-bg">
      <div class="container container--list">
        <ul class="Tab-controls">
          <li>
            <button class="Tab-controls--button is-active Meta">
              Archive
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="st-2xh">
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
import Wrap from "../components/Wrap.vue";

export default {
  components: {
    CardRowIssue,
    Wrap
  },
  props: ["page"],
};
</script>
