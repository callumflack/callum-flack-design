<template lang="pug">
  div(:class="cellClass")
    router-link.Project.Block(:to="link")
      figure.Project-image
        img(:src="image")
      .Project-text
        .Project-text-inner
          h2.Subheading
            span.Project-visualLink {{ title }}
          p.u-colorTextLight 
            span.Meta.--medium.u-marginR1(v-if="year") {{ year }} 
            span.Meta.--medium.u-marginR2(v-if="tags") {{ tags }}
            span.Meta.--medium.u-marginR2.u-inlineBlock(style="transform: translateY(-2px)") |
            span {{ headline }}
</template>


<script>
export default {
  name: "cell",
  components: {},
  computed: {
    cellClass() {
      return [
        {
          "Grid-cell u-sm-size1of2 u-lg-size1of3": this.featured,
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


<style scoped lang="css">
@import "../assets/styles/vars.css";

.Project {
  background-color: white;
  display: block;
  /* margin-bottom: var(--s5); */

  @media (--xlarge-viewport) {
    min-height: 597px;
  }
}

.Project-text {
  /* border: 1px solid var(--color-border); */
  border-top: 0;
  padding: 0 24px 21px;
}

.Project-text-inner {
  @media (--small-viewport) {
    max-width: 95%;
  }

  @media (--large-viewport) {
    max-width: 90%;
  }

  @media (--xlarge-viewport) {
    max-width: 70%;
  }
}

.Project-text .Subheading {
  padding-top: 30px;
  margin-bottom: 24px;
}
</style>
