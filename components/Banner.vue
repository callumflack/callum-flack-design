<template>
  <header
    class="Banner"
    :style="{ backgroundImage: `url(${imageUrl})` }"
  >
    <div
      class='Banner-filter'
      :style='filterStyle'
    />
    <slot />
  </header>
</template>

<script scoped>
export default {
  name: 'banner',

  computed: {
    filterStyle () {
      return this.opacity ? `background-color: rgba(0, 0, 0, ${this.opacity})` : ''
    }
  },

  props: {
    imageUrl: String,
    opacity: {
      type: String,
      default: '1'
    }
  }
}
</script>

<style scoped>
.Banner {
  align-items: center;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
  position: relative;

  filter: grayscale(100);
}

/*won't work when scoped*/
/*.Banner h1 {
  color: white;
}*/

.Banner-filter {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
