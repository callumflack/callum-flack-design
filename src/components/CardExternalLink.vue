<template>
  <span class="ExternalLink Text--xs">
    {{ label }}
    <span class="Link--blank">&#8599;</span>
  </span>
</template>

<script>
export default {
  props: ["kind"],
  computed: {
    label() {
      return this.kind === "newsletter" ? "Visit issue" : "Visit site";
    },
  },
};
</script>

<style lang="postcss" scoped>
/* Styled by parent hover in `custom-card-external-link.css`  */

.ExternalLink {
  @apply rounded inline-block;
  /* padding: 0.25rem 0.333rem 0.005rem 0.333rem; */
  @apply bg-transparent text-transparent;
  /* @apply opacity-0; */
  padding: 3px 6px 1px 6px;
  transform: translate(-8px, -0.15em);
  transition: all 750ms cubic-bezier(0.19, 1, 0.22, 1);
}

.ExternalLink .Link--blank {
  @apply inline-block;
  @apply text-text !important;
  font-size: 96%;
  margin-left: 0;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  transform: translate(-45px, -0.5em);
}

.Card:hover .ExternalLink {
  @apply bg-text text-white !important; /* override vue [data] styles */
  transform: translate(3px, -0.15em);
}
.Card:hover .ExternalLink .Link--blank {
  @apply text-white !important;
  transform: translate(0, -0.1em);
}
</style>
