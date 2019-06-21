<template lang="pug">
  nuxt-link.Project.Text(
    v-if="internal"
    :key="link"
    :to="link"
  )
    span.Project-title.m-sm-r5
      span {{ title }}
    span.Project-details.m-mo-t1
      span.Meta.Project-meta(v-if="medium") {{ medium }}
      span.Meta.Project-meta(v-if="tags") {{ tags }}
      span.Meta.Project-meta(v-if="client") {{ client }}
      span.Meta.Project-meta(v-if="number") {{ number }}
      span.Meta.Project-meta(v-if="date") {{ date }}
      span.Meta.Project-case.icon-targetBlank.icon-targetCase.p-r4.m-lA Read

  a.Project.Text.f(
    v-else
    :key="link"
    :href="link"
    target="_blank"
    :class="disabledClass"
  )
    span.Project-title.m-sm-r5
      span {{ title }}
    span.Project-details
      span.Meta.Project-meta(v-if="medium") {{ medium }}
      span.Meta.Project-meta(v-if="tags") {{ tags }}
      span.Meta.Project-meta(v-if="client") {{ client }}
      span.Meta.Project-meta(v-if="number") {{ number }}
      span.Meta.Project-meta(v-if="date") {{ date }}
      span.Text.Project-target.icon-targetBlank.m-lA &nbsp;

</template>

<script scoped>
export default {
  name: "ProjectListItem",
  props: {
    client: String,
    date: String,
    link: String,
    number: String,
    title: String,
    disabled: {
      type: Boolean,
      default: false
    },
    internal: {
      type: Boolean,
      default: false
    },
    medium: {
      type: String,
      default: "Website"
    },
    published: {
      type: Boolean,
      default: true
    },
    tags: {
      type: String,
      default: "Design, Frontend"
    }
  },
  computed: {
    disabledClass() {
      return this.disabled && "is-disabled";
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../assets/styles/variables.css";

.Project {
  border-bottom: 1px solid var(--c-border);
  display: flex;
  flex-direction: column;
  padding: var(--s-3) 0;
  transition: all 150ms ease;

  &:hover {
    border-color: var(--c-text);
    transition: all 150ms ease;
  }

  @media (--sm) {
    flex-direction: row;
  }
}

.Project-title,
.Project-details {
  @media (--mo) {
    min-height: calc(22 / 16 * 1em);
  }
}

.Project-details {
  display: flex;
  flex-grow: 1;
}

.Project-meta {
  align-self: flex-end;
  color: var(--c-text-light);
  display: inline-flex;
  transform: translateY(-0.36em);
  transition: all 500ms ease;
}

.Project-meta + .Project-meta {
  border-left: 1px solid var(--c-text-underline);
  margin-left: var(--s-2);
  padding-left: var(--s-2);
}

/*

  target indicators

*/

.Project-target {
  /* transform: translateX(-0.72em); */
  transform: translate(-0.72em, -0.18em);
  transition: all 150ms ease;

  &:after {
    font-size: 100%;
    right: 0;
  }

  @media (--mdl) {
    opacity: 0;
  }
}

.Project:hover .Project-target {
  transform: translate(0, -0.18em);
  transition: all 150ms ease;

  @media (--mdl) {
    opacity: 1;
  }
}

.Project:hover:not(.is-disabled) .Project-meta {
  color: var(--c-text);
}

.Project-case {
  align-self: flex-end;
  display: inline-flex;
  transform: translate(-0.72em, -0.36em);
  transition: all 150ms ease;

  &:after {
    font-size: 100%;
    right: 0;
    transform: translateY(-0.25em) rotate(0);
  }

  @media (--mdl) {
    opacity: 0;
  }
}

.Project:hover .Project-case {
  transform: translate(0, -0.36em);
  transition: all 150ms ease;

  @media (--mdl) {
    opacity: 1;
  }
}

/*

  disabled

*/

.Project.is-disabled {
  color: var(--c-text-light);
  /* cursor: not-allowed; */
  cursor: default;
  border-bottom: 1px solid var(--c-border) !important;

  & .Project-title span:first-child {
    position: relative;
    /* text-decoration: line-through; */

    /* &:after {
      border-bottom: 1px solid var(--c-text);
      content: "";
      position: absolute;
      left: 0;
      top: 53%;
      width: 100%;
    } */
  }

  & .Project-target:after,
  & .Project-case:after {
    content: initial;
  }
}
</style>

