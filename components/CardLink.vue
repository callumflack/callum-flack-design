<template>
  <div>
    <router-link v-if="link" :to="link">
      <slot />
    </router-link>

    <template v-else>
      <slot />
    </template>

  </div>
</template>

<script scoped>
export default {
  props: {
    link: String
  }
}
</script>
