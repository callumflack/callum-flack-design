<template lang="pug">
  div(:class="['Grid-cell', { 'u-sm-size1of3': feature }]")
    router-link.Card(:to="link")
      .FlexEmbed
        .FlexEmbed-ratio.FlexEmbed-ratio--4by3
        .FlexEmbed-content
          img.Card-image(
            v-if="backgroundImage",
            :src="backgroundImage"
          )
      .Card-info
        h2.Heading {{ headline }}
        p.color-textLight(v-html="subtext")
        p.meta(v-if="tags") {{ tags }}
</template>


<script>
export default {
  name: "card",
  components: {},
  computed: {
    classes() {
      return [
        "Grid-cell",
        {
          "u-sm-size1of3": this.feature,
          "u-sm-size1of6": this.casestudy,
          "u-size1of2 u-sm-size1of12": this.archive,
          "Grid-cell--center": this.center
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
    backgroundImage: String,
    headline: String,
    subtext: String,
    tags: String
  }
};
</script>


<style scoped>
@import "../assets/styles/vars.pcss";

.Card {
  border: 1px solid var(--color-text);
  border-color: rgba(17, 17, 17, 0.25);
  border-radius: 4px;
  display: block;
  overflow: hidden;
}

.Card-image {
  @apply --stick;
  background-color: var(--color-hilight);
  height: 100%;
  left: 50%;
  max-width: initial;
  transform: translateX(-50%);
}

.Card-info {
  background-color: white;
  padding: var(--s3);
  padding-left: calc(1.15 * var(--s3));
  padding-top: var(--s4);
}
</style>
