<template lang="pug">
  div(:class="cellClass")
    nuxt-link.project.block--half(:to="link")
      figure.project-image
        img(v-if="image", :src="image")
      .project-text
        h2.title
          span.project-visualLink(v-html="title")
        p.project-subtext.textscope-reset
          span(v-if="date") {{ date }}
          span.project-divider ——
          | {{ headline }}
</template>


<script>
export default {
  name: "post",
  components: {},
  computed: {
    cellClass() {
      return [
        {
          "Grid-cell u-sm-size1of2 u-lg-size1of2": this.featured,
          "Grid-cell u-size1of2 u-md-size1of3 u-lg-size1of4": !this.featured
        }
      ];
    }
  },
  props: {
    link: String,
    image: String,
    title: String,
    headline: String,
    date: String
  }
};
</script>


<style scoped>
@import "../assets/styles/vars.pcss";

/* .Grid-cell:nth-child(7), */
/* .Grid-cell:nth-child(8), */
.Grid-cell:nth-child(9) {
  & .project {
    margin-bottom: 0 !important;
  }
}

.project {
  display: block;
}

.project-text h2 {
  margin: var(--s2) 0;

  @media (--small-viewport) {
    margin: calc(1.5 * var(--s3)) 0 calc(0.8 * var(--s3));
  }
}

.project-subtext {
  color: var(--color-text);
  width: 80%;

  @media (--small-viewport) {
    width: 66%;
  }

  @media (--large-viewport) {
    width: 50%;
  }
}

.project-divider {
  letter-spacing: -0.2em;
  margin-left: 0.1em;
  margin-right: 0.2em;
}
</style>
