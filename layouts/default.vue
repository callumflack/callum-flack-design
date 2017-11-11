<template>
  <div>
    <NavTop />
    <!-- <NavTopFixed /> -->
    <nuxt/>
    <NavBottom />
  </div>
</template>

<script>
import NavTop from "~/components/NavTopAlt.vue";
import NavTopFixed from "~/components/NavTopFixed.vue";
import NavBottom from "~/components/NavBottom.vue";

export default {
  components: {
    NavTop,
    NavTopFixed,
    NavBottom
  }
};
</script>

<style>
/*.page-enter-active,
.page-leave-active {
  background-color: black;
  height: 100vh;
  transition: opacity 4s;
  width: 100vw;
  z-index: 999;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}*/
</style>
