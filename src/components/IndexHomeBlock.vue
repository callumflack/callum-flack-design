<template>
  <div class="IndexBlock">
    <!-- <hr v-if="block.name !== 'about'" class="border-t m-0" /> -->
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
          <saber-link :to="`/${block.name}.html`">
            {{ block.title }}
            <span class="Link--blank">&#8594;</span>
          </saber-link>
        </h1>
        <p v-if="block.lede" class="Link Text--sm text-gray">
          {{ block.lede }}
          <saber-link v-if="!block.name" to="/about.html" class="text-text">
            Learn more &#8594;
          </saber-link>
          <saber-link
            v-if="block.name === 'newsletter'"
            to="/the-littoral-line.html"
            class="text-text"
          >
            See the archives &#8594;
          </saber-link>
        </p>
      </header>
      <!-- posts slider -->
      <div v-if="block.name === 'projects' || 'writing'">
        <slot></slot>
      </div>
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
      if (!this.block.name) return "1";
      if (this.block.name === "projects") return "2";
      if (this.block.name === "writing") return "3";
      if (this.block.name === "newsletter") return "4";
      return null;
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
