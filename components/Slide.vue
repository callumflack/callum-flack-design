<template lang="pug">
  //- section(:class="['hero', { 'text-white': backgroundImage }]")
  //- lazy-image(
  //-   v-if="backgroundImage",
  //-   class="hero-background-image",
  //-   :src="backgroundImage")
  //- div(
  //-   class='filter',
  //-   :style='filterStyle')
  //- hero-link(:link="link")
  //-   .Container
  //-     div(:class="['hero-body', { 'hero-body--half': half }]")
  //-       div(:class="['columns u-size11of12 u-sm-size7of12', { reverse }]")
  //-         h1.header {{headline}}
  //-         h4.lede(v-html="subtext")


  section(:class="['Banner', { '--withImage': imageUrl }]")
    .Banner-image.u-posFit(v-if="imageUrl")
      img(:src="`/images/${imageUrl}`", alt="")
      //- lazy-image(
        v-if="backgroundImage",
        class="hero-background-image",
        :src="backgroundImage")
      //- div(
        class='filter',
        :style='filterStyle')
    .Banner-text.u-posFit.u-height100
      .Container.Container--tuck.u-height100
        .u-flex.u-flexAlignItemsCenter.u-height100
          div(:class="['Banner-text-inner', { 'is-right': alignRight }]")
            h1(:class="['Title', {'u-colorWhite': this.imageUrl,}]", v-html="text") 
</template>

<script>
export default {
  components: {},
  computed: {},
  props: {
    imageUrl: String,
    text: String,
    alignRight: Boolean
  }
};
</script>

<style>
@import "../assets/styles/vars.css";

.Banner {
  background-color: #eaeaea;
  position: relative;
  /* min-height: calc(100vh - 60px);
  max-height: calc((100vh - 370px)/1.5); */
  min-height: 60vh;
  max-height: 60vh;
}

.Banner.--withImage {
  min-height: 80vh;
  max-height: 80vh;
}

.Banner-image {
  & > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}

.Banner-text-inner {
  display: flex;
  flex-direction: column;

  @media (--small-viewport) {
    width: 60%;
  }

  @media (--xlarge-viewport) {
    width: 33.333%;
  }
}

.Banner-text-inner.is-right {
  margin-left: auto;
}

.Banner-text-inner span {
  display: table;
  margin-top: var(--s3);
  text-transform: initial;
}
</style>
