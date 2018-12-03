<template lang="pug">
  a.Project-item.Text.f(
    v-if="external"
    key="external-link"
    :href="link"
    target="_blank"
    :class="disabledClass"
  )
    span.m-r5 {{ title }}
    span.Meta.Project-item-span {{ medium }}
    span.Meta.Project-item-span(v-if="client") {{ client }}
    span.Meta.Project-item-span {{ tags }}
    span.Text.Project-item-target.icon-targetBlank.m-lA &nbsp;

  nuxt-link.Project-item.Text.f(
    v-else
    key="internal-link"
    :to="link"
  )
    span.m-r5 {{ title }}
    span.Meta.Project-item-span {{ medium }}
    span.Meta.Project-item-span(v-if="client") {{ client }}
    span.Meta.Project-item-span {{ tags }}
    span.Meta.Project-item-case.icon-targetBlank.icon-targetCase.p-r4.m-lA Case study

  //- todo: req's learning slots
  //- disabled link
  //- internal case link

</template>

<script scoped>
export default {
  name: "ProjectListItem",
  components: {},
  props: {
    client: String,
    disabled: {
      type: Boolean,
      default: false
    },
    external: {
      type: Boolean,
      default: true
    },
    link: String,
    medium: {
      type: String,
      default: "Website"
    },
    tags: {
      type: String,
      default: "Design, Frontend"
    },
    title: String
  },
  computed: {
    disabledClass() {
      return this.disabled && "is-disabled";
    }
  }
};
</script>

<style lang="postcss" scoped>
.Project-item-span {
  align-self: flex-end;
  color: var(--c-text-light);
  display: inline-flex;
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

.Project-item-case {
  align-self: flex-end;
  display: inline-flex;
  opacity: 0;
  transform: translate(-0.72em, -0.36em);
  transition: all 150ms ease;

  &:after {
    font-size: 100%;
    right: 0;
    transform: translateY(-0.25em) rotate(0);
  }
}

.Project-item:hover .Project-item-case {
  opacity: 1;
  transform: translate(0, -0.36em);
  transition: all 150ms ease;
}

/* disabled */
.Project-item.is-disabled {
  cursor: not-allowed;
  border-bottom: 1px solid var(--c-border) !important;

  & span {
    opacity: 0.5 !important;
  }

  & span:after {
    content: initial;
  }
}
</style>

