<template lang="pug">
  div(:class="cellClass")
    router-link.u-block(:to="link")
      .Project
        figure.Project-image
          img(:src="image")
        .Project-text
          .Project-text-inner
            h2(:class="headlineClass")
              span {{ title }}
            p.u-colorTextLight {{ headline }}
            p.Meta.--medium.u-colorTextLight.u-marginB3(v-if="tags") 
              span {{ tags }} 
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
          "Grid-cell u-size1of2 u-md-size1of3 u-lg-size1of5": !this.feature
        }
      ];
    },
    headlineClass() {
      return [
        "u-marginB3",
        {
          "Heading u-textLeft u-marginT0": this.feature,
          Heading: !this.feature
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
    tags: String
  }
};
</script>


<style scoped lang="css">
@import "../assets/styles/vars.css";

a:hover h2 span {
  box-shadow: inset 0 -1px 0 0 #fff, inset 0 -3px 0 0 var(--color-text);
}

.Project-text {
  background-color: white;
  padding: var(--s2);
  padding-bottom: var(--s3);

  @media (--medium-viewport) {
    padding: var(--s3);
    padding-bottom: var(--s4);
  }

  @media (--large-viewport) {
    padding: var(--s4);
  }
}

.Project-text-inner {
  max-width: 540px;
}
</style>
