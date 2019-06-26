<template>
  <Wrap :page="page">

      <div class="Block-sm-t Markdown" itemprop="articleBody">
        <slot name="default"/>
      </div>

      <!-- <a class="u-url" :href="page.attributes.permalink" hidden></a> -->
    </article>
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
