<template>
  <component
    :is="type"
    :to="post.permalink"
    :href="post.link"
    :target="target"
    :rel="rel"
    class="Row"
  >
    <h3 class="Heading Heading-4xl font-medium col-span-6">
      {{ post.title }}
    </h3>
    <div class="Text-sm text-gray col-span-3 Text--align">
      <span
        v-for="(tag, index) in tagsWithFeaturedRemoved"
        :key="index"
        class="text-right"
      >
        <span v-if="index != 0">,</span>
        <span class="capitalize">{{ tag }}</span>
      </span>
      <template v-if="post.agency">
        <span class="Text-divider">|</span>
        <span>Design: {{ post.agency }}</span>
      </template>
    </div>
    <div class="Text-sm col-span-1 Text--align">
      <span class="Row-action">
        {{ type === "saber-link" ? "Read " : "Open " }}
      </span>
      <span class="Row-arrow inline-block ml-2">
        {{ type === "saber-link" ? "&#8594;" : "&#8599;" }}
      </span>
    </div>
  </component>
</template>

<script>
import formatListDate from "../utils/formatListDate";
/*

  ProjectRow is updateed from RowRow, which has amny commented out elements

*/
export default {
  components: {},
  props: ["post"],
  computed: {
    type() {
      return this.post && this.post.card && this.post.card.externalLink
        ? "a"
        : "saber-link";
      /* if (this.post.card && this.post.card.externalLink) {
        return "a";
      }
      if (this.post.card && !this.post.card.externalLink) {
        return "saber-link";
      }
      if (!this.post) {
        return "div";
      }
      return "div"; */
    },
    target() {
      return this.post && this.post.card && this.post.card.externalLink ? "_blank" : "";
    },
    rel() {
      return (
        this.post &&
        this.post.card &&
        this.post.card.externalLink &&
        "noopener noreferrer"
      );
    },
    tagsWithFeaturedRemoved() {
      return this.post.tags && this.post.tags.filter(x => x !== "featured");
    },
    /* formatTags() {
      return this.slice(0, -1).join(', ')
    }, */
    /* figureShade() {
      return this.post.assets.cover && "bg-gray-100";
    }, */
  },
  methods: {
    formatListDate,
  },
};
</script>

<style lang="postcss" scoped>
.Row {
  @apply grid py-8 relative cursor-pointer;
  @apply border-b;
  transition: all 1000ms ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  /* gird */
  /* --gridColumnCount: 10; */
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  grid-column-gap: var(--gridColumnGap);
  grid-row-gap: 0;
}
.Row:before {
  @apply absolute left-0 bg-text h-px;
  content: "";
  right: 100%;
  bottom: -1px;
  transition: right 150ms ease-out;
  z-index: -1;
}
.Row:active:before,
.Row:focus:before,
.Row:hover:before {
  right: 0;
}
.Row:active .text-gray,
.Row:focus .text-gray,
.Row:hover .text-gray {
  @apply text-text !important;
}

/* TRANSITIONS */

.Row:hover .Row-action {
  @apply opacity-100;
  transform: translateX(0);
}
.Row:hover .Row-arrow {
  @apply text-brand-red;
  transform: translateX(0);
}

/* ROW BODY */

.Row-action {
  @apply inline-block opacity-0 text-brand-red;
  transform: translateX(-1em);
}
.Row-action,
.Row-arrow {
  transition: all 500ms theme(bezier.thisalso);
}

/* TEXT UTILS */

.Text--align {
  @apply flex justify-end;
}
.Text--align > span {
  /* align-items: baseline;
  align-content: flex-end; */
  align-self: flex-end;
}

.Text-divider {
  @apply mx-2;
  margin-left: 0.5rem;
  margin-right: 0.45rem;
}
</style>
