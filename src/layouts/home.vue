<template>
  <Wrap :page="page" kind="index">
    <HeaderTitleWrap class="One">
      <header class="lg:w-9/12">
        <h1 class="Display s-m">
          <saber-link :to="`/${page.link}`">
            {{ page.title }}
            <span class="Link--blank">&#8594;</span>
          </saber-link>
        </h1>
        <p class="Link Text--sm text-gray s-m">
          {{ page.lede }}
        </p>
        <p class="Link Text--sm text-gray s-m">
          {{ page.next }}
        </p>
      </header>
      <FormNewsletter class="st-2xh lg:w-9/12"></FormNewsletter>
    </HeaderTitleWrap>
  </Wrap>
</template>

<script>
import FormNewsletter from "../components/FormNewsletter";
import HeaderTitleWrap from "../components/HeaderTitleWrap";
import Wrap from "../components/Wrap.vue";

export default {
  components: {
    FormNewsletter,
    HeaderTitleWrap,
    Wrap,
  },
  props: ["page"],
};
</script>

<style lang="postcss" scoped>
.One {
  @apply border-0;
  padding-top: calc(theme(spacing.48) * var(--block-size-ratio));
  padding-bottom: calc(theme(spacing.48) * var(--block-size-ratio));
}
</style>
