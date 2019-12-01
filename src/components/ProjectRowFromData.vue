<template>
  <component
    :is="type"
    :to="post.link"
    :href="post.link"
    :target="target"
    :rel="rel"
    class="Card col-span-12"
  >
    <div class="Card-body flex justify-between" :class="{ 'text-gray': post.expand }">
      <h3 class="Heading Heading-7xl font-light w-9/12">
        {{ post.title }}
      </h3>
      <div v-if="post" class="w-3/12 flex justify-between">
        <div class="Title font-normal text-gray text-right">{{ post.tags }}</div>
        <!-- <div v-if="!post.expand" class="Heading Heading-7xl font-light">
          {{ type === "saber-link" ? "&#8594;" : "&#8599;" }}
        </div> -->
        <div class="Heading Heading-6xl font-light" v-html="icon"></div>
      </div>
    </div>
  </component>
</template>

<script>
import formatListDate from "../utils/formatListDate";
/*

  ProjectRowFromData is updated from CardRow, which has many commented out elements

*/
export default {
  components: {},
  props: ["post"],
  computed: {
    type() {
      // return this.post.external ? "a" : "saber-link";
      if (this.post.external || this.post.expand) {
        return "a";
      }
      return "saber-link";
    },
    target() {
      return this.post.external && "_blank";
    },
    rel() {
      return this.post.external && "noopener noreferrer";
    },
    icon() {
      if (this.post.expand) {
        return "+";
      }
      if (this.post.external) {
        return "&#8599;";
      }
      return "&#8594;"; // saber-link
    },
  },
  methods: {
    formatListDate,
  },
};
</script>

<style lang="postcss" scoped>
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

.Card:active *,
.Card:focus *,
.Card:hover * {
  @apply text-text !important;
}

/* CARD BODY */

.Card-body {
  @apply py-1;
  transform: translateY(1px);
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
