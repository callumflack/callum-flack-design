<template>
  <div class="Block">
    <div class="container relative" :class="containerType">
      <slot name="signal"></slot>
      <slot></slot>
      <!-- <div :class="widthType">
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["kind"],
  computed: {
    containerType() {
      return this.kind === "post" ? "container--text" : "container--list";
    },
    /* widthType() {
      return this.kind !== "post" && "lg:w-9/12";
    }, */
  },
};
</script>
