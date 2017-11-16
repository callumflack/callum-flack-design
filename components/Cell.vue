<template lang="pug">
  div(:class="cellClass")
    router-link.Project(:to="link")
      figure.Project-image
        img(:src="image")
      .Project-text
        .Project-text-inner
          h2.Subheading.u-marginB1 
            span.Project-visualLink {{ title }}
          p.u-colorTextLight 
            span.Meta.--medium.u-marginR2(v-if="year") {{ year }} 
            span.Meta.--medium.u-marginR2(v-if="tags") {{ tags }} 
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
          "Grid-cell u-sm-size1of2 u-lg-size1of3": this.feature,
          "Grid-cell u-size1of2 u-md-size1of3 u-lg-size1of4": !this.feature
        }
      ];
    }
  },
  props: {
    feature: Boolean,
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
  box-shadow: inset 0 -1px 0 0 #fff, inset 0 -3px 0 0 var(--color-text);
}

.Project {
  display: block;
}

.Project-text {
  margin-top: var(--s3);

  @media (--medium-viewport) {
    margin-top: var(--s3);
  }

  @media (--large-viewport) {
    margin-top: var(--s3);
  }
}

.Project-text-inner {
  max-width: 540px;

  & h2,
  & p {
    /* display: inline; */
  }
}
</style>
