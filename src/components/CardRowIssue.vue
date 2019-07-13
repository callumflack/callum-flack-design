<template>
  <a
    :href="issue.link"
    target="_blank"
    rel="noopener noreferrer"
    class="Card"
  >
    <div class="Card-body flex justify-between">
      <!-- title -->
      <h3 class="Title w-15x24 lg:w-8/12">
        {{ issue.title }}
        <span class="Link--blank">&#8599;</span>
      </h3>
      <div class="w-9x24 lg:w-4/12 flex justify-between">
        <!-- number -->
        <div>
          <span class="Title text-gray">{{ issue.number }}</span>
          <!-- <span class="Text text-gray inline-block mx-2px">&centerdot;</span> -->
          <!-- <span class="Text text-gray">{{ issue.readingTime }} mins</span> -->
        </div>
        <!-- date -->
        <span class="Title text-gray ml-4 lg:ml-8">
          {{ formatListDate(issue.date) }}
        </span>
      </div>
    </div>
  </a>
</template>

<script>
import formatListDate from "../utils/formatListDate";

export default {
  props: ["issue"],
  methods: {
    formatListDate
  }
};
</script>

<style lang="postcss" scoped>
/* REFACTOR: exact same CSS as CardRow */
.Card {
  @apply block py-2 relative cursor-pointer;
  @apply border-b;
  transition: all 500ms ease;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.Card:before {
  @apply absolute left-0 bg-text h-px;
  content: "";
  right: 100%;
  bottom: -1px;
  transition: right 150ms ease-out;
  z-index: -1;
}

.Card:active:before,
.Card:focus:before,
.Card:hover:before {
  right: 0;
}

.Card:not(:last-of-type) {
  margin-bottom: 0.1875em;
}

/* CARD TYPE */

.Card:active *,
.Card:focus *,
.Card:hover * {
  @apply text-text !important;
}

.Card-body {
  @apply py-1;
}

.Card-body-meta {
  @apply text-gray-600;
}

.Card-body-meta > * {
  @apply capitalize;
}

.Card-figure {
  @apply h-full relative;
}

.Card-figure-image {
  @apply absolute inset-0 object-cover w-full h-full;
  max-width: none;
  mix-blend-mode: multiply;
}

.Card-figure-blanklink {
  @apply absolute inset-0 flex justify-center items-center;
}

@screen lg {
  .Card-body {
    @apply py-2;
  }
  .Card-body > .Title {
    @apply pr-4;
  }
}
</style>

