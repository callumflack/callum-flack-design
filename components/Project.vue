<template lang="pug">
  div(:class="cellClass")
    nuxt-link.Project.Block(:to="link")
      figure.Project-image
        img(:src="image")
      .Project-text
        h2.Title
          span.Project-visualLink {{ title }}
        p.Project-subtext.TypeScope-reset
          span.u-marginR1(v-if="year") {{ year }}
          span(v-if="tags") {{ tags }}
          span.Project-divider ——
          | {{ headline }}
    
</template>


<script>
export default {
  name: "cell",
  components: {},
  computed: {
    cellClass() {
      return [
        {
          "Grid-cell u-sm-size1of2 u-lg-size1of4": this.featured,
          "Grid-cell u-size1of2 u-md-size1of3 u-lg-size1of4": !this.featured
        }
      ];
    }
  },
  props: {
    featured: Boolean,
    casestudy: Boolean,
    archive: Boolean,
    center: Boolean,
    link: String,
    image: String,
    title: String,
    headline: String,
    lede: String,
    tags: String,
    year: Number
  }
};
</script>


<style scoped>
@import "../assets/styles/vars.css";

.Grid-cell:nth-child(7),
.Grid-cell:nth-child(8),
.Grid-cell:nth-child(9) {
  & .Project {
    margin-bottom: 0 !important;
  }
}

.Project {
  display: block;
}

/* use the SVG filter that's secreted on work/index */
.Project:hover img {
  filter: url("#gray");
}

.Project-text h2 {
  margin: var(--s2) 0;

  @media (--small-viewport) {
    margin: calc(1.5 * var(--s3)) 0 calc(0.8 * var(--s3));
  }
}

.Project-subtext {
  color: var(--color-text);
  width: 80%;

  @media (--small-viewport) {
    width: 66%;
  }

  @media (--large-viewport) {
    width: 50%;
  }
}

.Project-divider {
  letter-spacing: -0.2em;
  margin-left: 0.1em;
  margin-right: 0.2em;
}
</style>