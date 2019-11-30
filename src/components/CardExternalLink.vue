<template>
  <span class="ExternalLink Text-xs">
    Visit
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
  @apply inline-block;
  @apply rounded;
  @apply bg-transparent;
  @apply text-transparent;
  padding: 3px 6px 1px 6px;
  transform: translate(-12px, -0.15em);
  transition: all 250ms cubic-bezier(0.19, 1, 0.22, 1);
}
.Card:hover .ExternalLink {
  @apply bg-text;
  @apply text-white !important; /* override vue [data] style */
  transform: translate(3px, -0.15em);
}

.ExternalLink .Link--blank {
  @apply inline-block;
  @apply text-text;
  font-size: 125%;
  transform: translate(-18px, 0em);
}

/* KISS: only adapt the Link--blank here */
@screen lg {
  .ExternalLink .Link--blank {
    transition: all 250ms cubic-bezier(0.19, 1, 0.22, 1);
    transform: translate(-23px, 0em);
  }
  .Card:hover .ExternalLink .Link--blank {
    @apply text-white !important;
    font-size: 96%;
    transform: translate(0.1em, -0.1em);
  }
}

/*

  REVERSE THEME
  Issues to fix: see 1. below

 */

/* 1. externalLink changes height on hover. To see this, turn on the outline below */
/* .reverse .Card .ExternalLink {
  @apply border border-white;
} */
.reverse .Card:hover .ExternalLink {
  @apply border border-white;
}
.reverse .ExternalLink .Link--blank {
  /* font-size: 125%;
  transform: translate(0, 0) !important; */
  @apply text-white !important;
}
/* .reverse .Card:hover .ExternalLink {
  @apply bg-white text-text !important;
}
.reverse .Card:hover .ExternalLink .Link--blank {
  @apply text-text !important;
} */
</style>
