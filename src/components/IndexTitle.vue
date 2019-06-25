<template>
  <header class="Grid-extract--edge Block-md">
    <div class="container container--text">
      <h1
        v-if="title"
        class="Display Display--page text-center s-h"
      >{{ title }}</h1>
      <p
        v-if="lede"
        class="w-2/3 mx-auto s-h"
      >{{ lede }}</p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "Page title"
    },
    lede: {
      type: String,
      required: false
    }
  }
}
</script>
