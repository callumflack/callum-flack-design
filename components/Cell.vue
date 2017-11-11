<template lang="pug">
  div(:class="cellClass")
    router-link.u-block(:to="link")
      figure.Figure.u-marginT0
        img(:src="image")
      p.Sans.Sans--mediumWeight.u-textCenter.u-marginB3(v-if="tags") 
        span.u-textCapitalise {{ tags }} 
        span.u-textLowercase for 
        span.u-textCapitalise {{ title }}
      h2(:class="headlineClass")
        span {{ headline }}
      p {{ lede }}
</template>


<script>
export default {
  name: 'cell',
  components: {},
  computed: {
    cellClass () {
      return ['Project', {
        'Container Container--medium': this.feature,
        'Grid-cell u-size1of2': !this.feature
      }]
    },
    headlineClass () {
      return ['u-pSpace', {
        'Title': this.feature,
        'Subheading': !this.feature
      }]
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
}
</script>


<style scoped>
@import "../assets/styles/vars.css";

a:hover h2 span {  
  box-shadow: inset 0 -1px 0 0 #fff, inset 0 -3px 0 0 var(--color-text);
}
</style>
