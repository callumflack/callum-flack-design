<template lang="pug">
  a.Project-item.Text.f(
    :href="link"
    target="_blank"
  )
    span.m-r5 {{ title }}
    span.Meta.AlignMeta.m-r3 {{ medium }}
    span.Meta.AlignMeta {{ tags }}
    span.Text.Project-item-target.icon-targetBlank.m-lA &nbsp;

  //- todo: req's learning slots
  //- disabled link
  //- internal case link

</template>

<script scoped>
export default {
  components: {},
  props: {
    title: String,
    medium: {
      type: String,
      default: "Website"
    },
    tags: String,
    link: String
  }
};
</script>

<style lang="postcss" scoped>
.AlignMeta {
  color: var(--c-text-light);
  display: inline-flex;
  align-self: flex-end;
  transform: translateY(-5px);
  transform: translateY(-0.357142857em);
}

.Project-item-target {
  opacity: 0;
  transform: translateX(-5px);
  transition: all 150ms ease;

  &:after {
    font-size: 100%;
    right: 0;
  }
}

.Project-item:hover .Project-item-target {
  opacity: 1;
  transform: translateX(0);
  transition: all 150ms ease;
}
</style>

