<template lang="pug">
  div(:class="cellClass")
    router-link.Project(:to="link")
      figure.Project-image
        img(:src="image")
      .Project-text
        h2.Subheading
          span.Project-visualLink {{ title }}
        p.u-colorTextLight 
          span.Meta.--medium.u-marginR2(v-if="year") {{ year }} 
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

a:hover h2 span {
  /* box-shadow: inset 0 -1px 0 0 #fff, inset 0 -3px 0 0 var(--color-text); */
}

.Project {
  display: block;
  margin-bottom: var(--s5);
}

.Project-text {
  @media (--small-viewport) {
    max-width: 80%;
  }

  @media (--large-viewport) {
    max-width: 70%;
  }
}

.Project-text .Subheading {
  margin: calc(1.5 * var(--s3)) 0 var(--s3);
}
</style>
