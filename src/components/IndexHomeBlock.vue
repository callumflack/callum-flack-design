<template>
  <div class="IndexBlock">
    <HeaderTitleWrap>
      <!-- signal letter -->
      <template v-slot:signal>
        <div class="Signal hidden lg:block">
          <span>{{ signalLetter }}</span>
        </div>
      </template>
      <!-- info col -->
      <header class="lg:w-9/12">
        <h1 v-if="block.title" class="Display s-m">
          <saber-link :to="`/${block.link}.html`">
            {{ block.title }}
            <span class="Link--blank">&#8594;</span>
          </saber-link>
        </h1>
        <p v-if="block.lede" class="Link Text--sm text-gray">
          {{ block.lede }}
          <saber-link
            :to="`/${block.link}.html`"
            class="text-text"
            v-html="renderLabel"
          >
          </saber-link>
        </p>
      </header>
      <!-- slot (posts slider) -->
      <slot></slot>
    </HeaderTitleWrap>
  </div>
</template>

<script>
import HeaderTitleWrap from "../components/HeaderTitleWrap";

export default {
  components: {
    HeaderTitleWrap,
  },
  props: ["block"],
  computed: {
    signalLetter() {
      if (this.block.link === "about") return "1";
      if (this.block.link === "projects") return "2";
      if (this.block.link === "writing") return "3";
      if (this.block.link === "the-littoral-line") return "4";
      return null;
    },
    renderLabel() {
      if (this.block.link === "about") {
        return "About &#8594;";
      } else if (this.block.link === "newsletter") {
        return "See the archives &#8594;";
      }
      return "View all &#8594";
    },
  },
};
</script>

<style lang="postcss" scoped>
.IndexBlock {
  @apply relative border-b;
}
.IndexBlock:first-of-type {
  /* @apply border-t */
}
.Signal {
  @apply absolute top-0;
  @apply font-light text-right;
  @apply pr-20;
  left: -150px;
  line-height: 0.875;
  font-size: 10vh;
  width: 150px;
}
.Signal span {
  @apply block;
}
</style>
