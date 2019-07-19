<template>
  <div class="Block">
    <div class="container" :class="containerType">
      <div :class="widthType">
        <slot></slot>
      </div>
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
    widthType() {
      return this.kind !== "post" && "lg:w-8/12";
    },
  },
};
</script>
