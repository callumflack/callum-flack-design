<template>
  <Wrap :page="page" kind="post">
    <article class="Block-sm-t Markdown" itemprop="articleBody">
      <slot name="default"/>
    </article>
    <!-- <a class="u-url" :href="page.attributes.permalink" hidden></a> -->
  </Wrap>
</template>

<script>
import formatDate from '../utils/formatDate'
import Aspect from '../components/Aspect.vue'
import Wrap from '../components/Wrap.vue'

export default {
  components: {
    Aspect,
    Wrap,
  },

  props: ['page'],

  methods: {
    formatDate
  }
}
</script>
