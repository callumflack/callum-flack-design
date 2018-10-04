<template lang="pug">
  td.Container.nl-container
    .nl-content
      .nl-spacer
        .u-textCenter.m-b2
          IconBase(icon-name="icon-sun")
            IconSun
        h1.Title.u-textCenter {{ title }}
        p.fs-text-sm.c-textLight.u-textCenter.m-b2
          span LL01
          span.MetaSeparator • 
          time(:date-time="date") {{ date | moment("MMMM Do, YYYY") }}
          span.MetaSeparator • 
          span {{ readingTime }} minutes
        p.Text.fs-text-sm.c-textLight.u-textCenter(v-if="archive") 
          | Just visiting? 
          nuxt-link(to="/the-littoral-line") Subscribe to The Littoral Line.

      //- no-ssr
      .Scope-post
        nuxtent-body.nl-spacer(:body="body")
</template>

<script>
import moment from "vue-moment";
import IconBase from "~/components/IconBase.vue";
import IconSun from "~/components/icons/IconSun.vue";

export default {
  name: "post",
  components: {
    moment,
    IconBase,
    IconSun
  },
  props: {
    archive: {
      type: Boolean,
      default: true
    },
    title: String,
    date: String,
    readingTime: Number,
    body: String
  }
};
</script>

<style lang="postcss">
.LittoralIcon--md >>> svg {
  height: 24px;
  width: 24px;

  @media (min-width: 513px) {
    height: 30px;
    width: 30px;
  }
  @media (min-width: 1280px) {
    height: 40px;
    width: 40px;
  }
}

.nl-container {
  max-width: 600px !important;
  padding: 0;
}

.nl-content {
  padding: 16px;
  max-width: 600px;
  margin: 0 auto;
  display: block;
}

.nl-content table {
  width: 100%;
}

.nl-img-fullbleed {
  display: inline;
  /* border-radius: 3px; */
  /* margin-bottom: 1.5em; */
  margin-top: 0.25rem;
  margin-bottom: 1.5rem;
  width: 100% !important;
  max-width: 100% !important;
  height: auto !important;
  max-height: auto !important;
}

.nl-spacer {
  margin-top: var(--s-4a);
  margin-bottom: calc(1.1 * var(--s-4a));
}

.nl-content hr {
  /* background-color: var(--c-text); */
  /* height: 1rem; */
  margin-bottom: calc(1.1 * var(--s-4a));
}
</style>
