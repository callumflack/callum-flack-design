<template>
  <Wrap :page="page" kind="post">
    <article class="Block-sm-t Markdown" itemprop="articleBody">
      <slot name="default" />
    </article>
    <a class="u-url" :href="page.attributes.permalink" hidden></a>
  </Wrap>
</template>

<script>
import Wrap from '../components/Wrap.vue'

export default {
  components: {
    Wrap,
  },

  props: ['page'],
}
</script>
