<template lang="pug">
  a.Project-item.Text.f(
    :href="link"
    target="_blank"
  )
    span.m-r5 {{ title }}
    span.Meta.Project-item-span {{ medium }}
    span.Meta.Project-item-span {{ tags }}
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
    tags: {
      type: String,
      default: "Design, Frontend"
    },
    link: String
  }
};
</script>

<style lang="postcss" scoped>
.Project-item-span {
  color: var(--c-text-light);
  display: inline-flex;
  align-self: flex-end;
  transform: translateY(-5px);
  transform: translateY(-0.36em);
  transition: all 500ms ease;
}

.Project-item-span + .Project-item-span {
  border-left: 1px solid var(--c-text-underline);
  margin-left: var(--s-2);
  padding-left: var(--s-2);
}

.Project-item-target {
  opacity: 0;
  transform: translateX(-5px);
  transform: translateX(-0.72em);
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

