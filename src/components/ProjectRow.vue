<template>
  <component
    :is="type"
    :to="post.permalink"
    :href="post.link"
    :target="target"
    :rel="rel"
    class="Row frame frame--projectRow"
  >
    <h3 class="Heading Heading-4xl font-medium frame-area-a">
      {{ post.title }}
    </h3>
    <div
      class="Text-sm text-gray Text--alignNotMobile Text--align flex lg:justify-end frame-area-b"
    >
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
    <div class="Text-sm Text--align flex justify-end frame-area-c">
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
      return this.post.tags && this.post.tags.filter((x) => x !== "featured");
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
/* ROW GRID */
.frame--projectRow {
  @apply m-0;
  /* grid-template-columns: repeat(10, minmax(0, 1fr)); */
  /* grid-column-gap: var(--gridColumnGap); */
  /* --gridColumnGap: calc(21 / 1680 * 100vw); */
  row-gap: var(--spacing4);
  grid-template-areas:
    "a a a a a a a a a a a a"
    "b b b b b b b b b c c c";
}
@screen lg {
  .frame--projectRow {
    grid-template-areas: "a a a a a a b b b b b c";
    /* grid-template-areas: "a a a a a a b b b b c c"; */
  }
}
@screen hu {
  .frame--projectRow {
    grid-template-areas: "a a a a a a a a b b b c";
  }
}

/* ROW */

.Row {
  @apply py-8 relative cursor-pointer;
  @apply border-b;
  transition: all 1000ms ease;
  transform: translateZ(0);
  backface-visibility: hidden;
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
@screen lg {
  .Row {
    @apply py-8;
  }
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

.Text--align > span {
  align-self: flex-end;
}
@screen mobile {
  .Text--alignNotMobile {
    @apply block;
  }
}

.Text-divider {
  /* @apply mx-2; */
  margin-left: 0.333rem;
  margin-right: 0.25rem;
}
@screen lg {
  .Text-divider {
    margin-left: 0.5rem;
    margin-right: 0.45rem;
  }
}
</style>
